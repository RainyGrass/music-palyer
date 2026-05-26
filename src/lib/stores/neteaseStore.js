// src/lib/stores/neteaseStore.js
import { writable } from "svelte/store";

export const apiBaseUrl = writable(
  localStorage.getItem("ncm-api-url") || "http://localhost:3000"
);

export const neteaseUser = writable(null);
export const neteaseCookie = writable(localStorage.getItem("ncm-cookie") || "");

let manualLogout = false;

apiBaseUrl.subscribe((url) => {
  if (url) {
    localStorage.setItem("ncm-api-url", url);
  }
});

neteaseCookie.subscribe((c) => {
  if (c) {
    localStorage.setItem("ncm-cookie", c);
    manualLogout = false;
  } else {
    localStorage.removeItem("ncm-cookie");
  }
});

function getStoreValue(store) {
  let value;
  const unsubscribe = store.subscribe((v) => {
    value = v;
  });
  unsubscribe();
  return value;
}

/**
 * 网易云 API 请求封装
 */
export async function ncmFetch(endpoint, params = {}, options = {}) {
  const base = getStoreValue(apiBaseUrl);
  const url = new URL(endpoint, base);

  const cookie = getStoreValue(neteaseCookie);

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") {
      url.searchParams.set(key, value);
    }
  });

  /**
   * 网易云 API 很多登录相关接口需要 timestamp 防缓存
   * 例如：
   * /login/qr/key
   * /login/qr/create
   * /login/qr/check
   */
  url.searchParams.set("timestamp", Date.now().toString());

  /**
   * 重点：
   * 不要手动设置 Cookie 请求头。
   * 浏览器/Tauri WebView 里 Cookie 是 forbidden header。
   * 网易云 API 支持通过 query 参数传 cookie。
   */
  const withCookie = options.withCookie !== false;
  if (withCookie && cookie) {
    url.searchParams.set("cookie", cookie);
  }

  console.log("[NCM Request]", url.toString());

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 10000);

  try {
    const res = await fetch(url.toString(), {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    console.log("[NCM Response]", res.status, res.statusText);

    if (!res.ok) {
      throw new Error(`HTTP ${res.status}: ${res.statusText}`);
    }

    const data = await res.json();
    console.log("[NCM Data]", data);

    /**
     * 登录接口通常会在 JSON 里返回 cookie。
     * 浏览器 fetch 拿不到 Set-Cookie，所以只能从 data.cookie 里取。
     */
    if (
      !manualLogout &&
      data?.cookie &&
      typeof data.cookie === "string" &&
      data.cookie.trim()
    ) {
      neteaseCookie.set(data.cookie);
    }

    return data;
  } catch (e) {
    clearTimeout(timeoutId);
    console.error("[NCM Error]", e);
    throw e;
  }
}

/**
 * 检查登录状态
 */
export async function checkLoginStatus() {
  const cookie = getStoreValue(neteaseCookie);

  if (!cookie || manualLogout) {
    neteaseUser.set(null);
    return false;
  }

  try {
    const data = await ncmFetch("/login/status");

    console.log("[Debug] /login/status response:", data);

    const profile = data?.data?.profile;
    const account = data?.data?.account;

    if (account?.id || profile?.userId) {
      neteaseUser.set({
        userId: account?.id || profile?.userId,
        nickname: profile?.nickname || "网易云用户",
        avatarUrl: profile?.avatarUrl || "",
        signature: profile?.signature || "",
      });

      return true;
    }

    neteaseUser.set(null);
    return false;
  } catch (e) {
    console.error("登录状态检查失败", e);
    neteaseUser.set(null);
    return false;
  }
}

/**
 * 退出登录
 */
export async function logoutNcm() {
  manualLogout = true;

  try {
    await ncmFetch("/logout");
  } catch (e) {
    console.warn("退出登录接口调用失败", e);
  }

  neteaseUser.set(null);
  neteaseCookie.set("");
  localStorage.removeItem("ncm-cookie");
}

// ========== 网易云主页数据 ==========

export const likedSongs = writable([]);
export const userPlaylists = writable([]);
export const ncmSearchResults = writable([]);

export const ncmLoading = writable(false);
export const ncmError = writable("");

// 简单内存缓存
const searchCache = new Map();
const playlistSongsCache = new Map();
const songUrlCache = new Map();

/**
 * 将网易云歌曲对象转换为播放器统一格式
 */
export function normalizeNcmSong(song) {
  if (!song) return null;

  const album = song.al || song.album || {};
  const artists = song.ar || song.artists || [];

  return {
    id: song.id,
    title: song.name || "未知歌曲",
    artist: artists.length > 0 ? artists.map((a) => a.name).join(" / ") : "未知歌手",
    album: album.name || "",
    cover: album.picUrl || "",
    duration: song.dt || song.duration || 0,
    url: "",
    lyrics: null,
    source: "netease",
    filename: "网易云音乐",
  };
}

/**
 * 获取歌曲播放地址，带缓存
 */
export async function fetchNcmSongUrls(ids = []) {
  const validIds = ids.filter(Boolean);

  if (!validIds.length) return new Map();

  const resultMap = new Map();
  const needFetchIds = [];

  for (const id of validIds) {
    if (songUrlCache.has(id)) {
      resultMap.set(id, songUrlCache.get(id));
    } else {
      needFetchIds.push(id);
    }
  }

  if (!needFetchIds.length) {
    return resultMap;
  }

  const idText = needFetchIds.join(",");
  let data;

  try {
    data = await ncmFetch("/song/url/v1", {
      id: idText,
      level: "standard",
    });
  } catch (e) {
    console.warn("/song/url/v1 获取失败，尝试 /song/url", e);
    data = await ncmFetch("/song/url", {
      id: idText,
    });
  }

  for (const item of data?.data || []) {
    if (item?.id) {
      const url = item.url || "";
      songUrlCache.set(item.id, url);
      resultMap.set(item.id, url);
    }
  }

  return resultMap;
}

/**
 * 给单首网易云歌曲补充播放地址和歌词
 */
export async function prepareNcmSongForPlay(song) {
  if (!song?.id) return song;

  let nextSong = { ...song };

  try {
    // 1. 补充播放地址
    if (!nextSong.url) {
      const urlMap = await fetchNcmSongUrls([nextSong.id]);

      nextSong = {
        ...nextSong,
        url: urlMap.get(nextSong.id) || "",
      };
    }

    // 2. 补充歌词
    // lyrics 为 null 或 undefined 时才请求，避免重复请求
    if (nextSong.lyrics === null || nextSong.lyrics === undefined) {
      const lyrics = await fetchNcmLyrics(nextSong.id);

      nextSong = {
        ...nextSong,
        lyrics,
      };
    }

    return nextSong;
  } catch (e) {
    console.warn("准备网易云歌曲失败", e);
    return nextSong;
  }
}

/**
 * 给歌曲列表补充播放地址
 * 注意：这个函数仍然保留，但不建议对大列表直接调用
 */
export async function prepareNcmSongsForPlay(songs = []) {
  const ids = songs.map((s) => s.id).filter(Boolean);
  const urlMap = await fetchNcmSongUrls(ids);

  return songs.map((song) => ({
    ...song,
    url: urlMap.get(song.id) || song.url || "",
  }));
}

/**
 * 获取我喜欢的音乐
 */
export async function fetchLikedSongs(limit = 50) {
  ncmError.set("");

  let user = getStoreValue(neteaseUser);

  if (!user?.userId) {
    const ok = await checkLoginStatus();
    if (!ok) {
      likedSongs.set([]);
      return [];
    }
    user = getStoreValue(neteaseUser);
  }

  try {
    ncmLoading.set(true);

    const likeRes = await ncmFetch("/likelist", {
      uid: user.userId,
    });

    const ids = likeRes?.ids || [];

    if (!ids.length) {
      likedSongs.set([]);
      return [];
    }

    const limitedIds = ids.slice(0, limit);

    const detailRes = await ncmFetch("/song/detail", {
      ids: limitedIds.join(","),
    });

    const songs = (detailRes?.songs || [])
      .map(normalizeNcmSong)
      .filter(Boolean);

    likedSongs.set(songs);
    return songs;
  } catch (e) {
    console.error("获取喜欢的歌曲失败", e);
    ncmError.set("获取喜欢的歌曲失败：" + (e.message || "未知错误"));
    likedSongs.set([]);
    return [];
  } finally {
    ncmLoading.set(false);
  }
}

/**
 * 获取用户歌单
 */
export async function fetchUserPlaylists(limit = 30) {
  ncmError.set("");

  let user = getStoreValue(neteaseUser);

  if (!user?.userId) {
    const ok = await checkLoginStatus();
    if (!ok) {
      userPlaylists.set([]);
      return [];
    }
    user = getStoreValue(neteaseUser);
  }

  try {
    ncmLoading.set(true);

    const res = await ncmFetch("/user/playlist", {
      uid: user.userId,
      limit,
    });

    const lists = res?.playlist || [];
    userPlaylists.set(lists);
    return lists;
  } catch (e) {
    console.error("获取用户歌单失败", e);
    ncmError.set("获取用户歌单失败：" + (e.message || "未知错误"));
    userPlaylists.set([]);
    return [];
  } finally {
    ncmLoading.set(false);
  }
}

/**
 * 搜索网易云歌曲，支持分页
 */
export async function searchNcmSongs(keyword, limit = 30, offset = 0, append = false) {
  ncmError.set("");

  const keywords = keyword?.trim();

  if (!keywords) {
    if (!append) ncmSearchResults.set([]);
    return [];
  }

  const cacheKey = `search:${keywords}:${limit}:${offset}`;

  if (searchCache.has(cacheKey)) {
    const cachedSongs = searchCache.get(cacheKey);

    if (append) {
      ncmSearchResults.update((old) => {
        const ids = new Set(old.map((s) => s.id));
        const merged = [...old];

        for (const song of cachedSongs) {
          if (!ids.has(song.id)) merged.push(song);
        }

        return merged;
      });
    } else {
      ncmSearchResults.set(cachedSongs);
    }

    return cachedSongs;
  }

  try {
    ncmLoading.set(true);

    let res;

    try {
      res = await ncmFetch("/cloudsearch", {
        keywords,
        type: 1,
        limit,
        offset,
      });
    } catch (e) {
      console.warn("/cloudsearch 搜索失败，尝试 /search", e);

      res = await ncmFetch("/search", {
        keywords,
        type: 1,
        limit,
        offset,
      });
    }

    const songs = (res?.result?.songs || [])
      .map(normalizeNcmSong)
      .filter(Boolean);

    searchCache.set(cacheKey, songs);

    if (append) {
      ncmSearchResults.update((old) => {
        const ids = new Set(old.map((s) => s.id));
        const merged = [...old];

        for (const song of songs) {
          if (!ids.has(song.id)) merged.push(song);
        }

        return merged;
      });
    } else {
      ncmSearchResults.set(songs);
    }

    return songs;
  } catch (e) {
    console.error("搜索歌曲失败", e);
    ncmError.set("搜索歌曲失败：" + (e.message || "未知错误"));

    if (!append) {
      ncmSearchResults.set([]);
    }

    return [];
  } finally {
    ncmLoading.set(false);
  }
}

/**
 * 获取歌单歌曲，支持分页
 */
export async function fetchPlaylistSongs(playlistId, limit = 50, offset = 0) {
  if (!playlistId) return [];

  const cacheKey = `playlist:${playlistId}:${limit}:${offset}`;

  if (playlistSongsCache.has(cacheKey)) {
    return playlistSongsCache.get(cacheKey);
  }

  try {
    ncmLoading.set(true);
    ncmError.set("");

    let res;

    try {
      res = await ncmFetch("/playlist/track/all", {
        id: playlistId,
        limit,
        offset,
      });
    } catch (e) {
      console.warn("/playlist/track/all 获取失败，尝试 /playlist/detail", e);

      res = await ncmFetch("/playlist/detail", {
        id: playlistId,
      });
    }

    let rawSongs = res?.songs || res?.playlist?.tracks || [];

    // 如果 fallback 到 /playlist/detail，它可能一次返回全部，这里手动分页
    if (res?.playlist?.tracks && Array.isArray(res.playlist.tracks)) {
      rawSongs = res.playlist.tracks.slice(offset, offset + limit);
    }

    const songs = rawSongs.map(normalizeNcmSong).filter(Boolean);

    playlistSongsCache.set(cacheKey, songs);

    return songs;
  } catch (e) {
    console.error("获取歌单歌曲失败", e);
    ncmError.set("获取歌单歌曲失败：" + (e.message || "未知错误"));
    return [];
  } finally {
    ncmLoading.set(false);
  }
}

/**
 * 解析 LRC 歌词
 * 返回格式：
 * [
 *   { time: 12.34, text: "歌词内容" }
 * ]
 */
export function parseLrc(lrcText) {
  if (!lrcText || typeof lrcText !== "string") return [];

  const lines = lrcText.split("\n");
  const result = [];

  // 支持：
  // [00:12.34]歌词
  // [00:12.345]歌词
  // [00:12]歌词
  // [00:12.34][00:15.67]歌词
  const timeRegex = /\[(\d{1,2}):(\d{1,2})(?:\.(\d{1,3}))?\]/g;

  for (const line of lines) {
    const times = [];
    let match;

    while ((match = timeRegex.exec(line)) !== null) {
      const min = parseInt(match[1], 10);
      const sec = parseInt(match[2], 10);
      const msText = match[3] || "0";
      const ms = parseInt(msText.padEnd(3, "0"), 10);

      times.push(min * 60 + sec + ms / 1000);
    }

    const text = line.replace(timeRegex, "").trim();

    if (times.length > 0 && text) {
      for (const time of times) {
        result.push({
          time,
          text,
        });
      }
    }
  }

  return result.sort((a, b) => a.time - b.time);
}
/**
 * 合并原歌词和翻译歌词
 */
export function mergeTranslatedLyrics(mainLyrics = [], translatedLyrics = []) {
  if (!mainLyrics.length) return translatedLyrics;
  if (!translatedLyrics.length) return mainLyrics;

  return mainLyrics.map((line) => {
    const translated = translatedLyrics.find(
      (t) => Math.abs(t.time - line.time) < 0.3
    );

    if (translated?.text && translated.text !== line.text) {
      return {
        ...line,
        text: `${line.text}\n${translated.text}`,
      };
    }

    return line;
  });
}

/**
 * 获取网易云歌词
 */
export async function fetchNcmLyrics(songId) {
  if (!songId) return [];

  try {
    const res = await ncmFetch("/lyric", {
      id: songId,
    });

    const rawLrc = res?.lrc?.lyric || "";
    const rawTransLrc = res?.tlyric?.lyric || "";

    const mainLyrics = parseLrc(rawLrc);
    const translatedLyrics = parseLrc(rawTransLrc);

    const mergedLyrics = mergeTranslatedLyrics(mainLyrics, translatedLyrics);

    return mergedLyrics;
  } catch (e) {
    console.warn("获取网易云歌词失败", e);
    return [];
  }
}