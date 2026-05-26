// src/lib/stores/playerStore.js
import { writable, derived } from "svelte/store";

export const playlist = writable([]);
export const currentIndex = writable(-1);
export const isPlaying = writable(false);
export const isTrackLoading = writable(false);
export const playbackError = writable("");

export const volume = writable(0.8);
export const playbackRate = writable(1);
export const currentTime = writable(0);
export const duration = writable(0);
export const playMode = writable("all"); // 'all' | 'loop' | 'random'
export const lyricOffset = writable(0); // 歌词延迟（秒），负=提前，正=延后

export const currentSong = derived(
  [playlist, currentIndex],
  ([$playlist, $currentIndex]) => {
    if ($currentIndex >= 0 && $currentIndex < $playlist.length) {
      return $playlist[$currentIndex];
    }
    return null;
  }
);

let audio = null;
let playRequestId = 0;

function getStoreValue(store) {
  let value;
  store.subscribe((v) => (value = v))();
  return value;
}

export function getAudio() {
  if (!audio) {
    audio = new Audio();
    audio.volume = getStoreValue(volume);
    audio.playbackRate = getStoreValue(playbackRate);

    audio.addEventListener("timeupdate", () => {
      currentTime.set(audio.currentTime || 0);
    });

    audio.addEventListener("loadedmetadata", () => {
      duration.set(audio.duration || 0);
    });

    audio.addEventListener("play", () => {
      isPlaying.set(true);
    });

    audio.addEventListener("pause", () => {
      isPlaying.set(false);
    });

    audio.addEventListener("ended", () => {
      const mode = getStoreValue(playMode);
      if (mode === "loop") {
        audio.currentTime = 0;
        audio.play().catch((e) => {
          console.error("单曲循环播放失败", e);
          playbackError.set(e.message || "播放失败");
          isPlaying.set(false);
        });
      } else {
        nextTrack();
      }
    });

    audio.addEventListener("error", () => {
      console.error("音频加载失败", audio?.error);
      playbackError.set("音频加载失败，可能是播放地址失效或资源不可访问");
      isPlaying.set(false);
      isTrackLoading.set(false);
    });
  }

  return audio;
}

/**
 * 更新播放列表中的某一首歌曲
 */
function updateSongInPlaylist(index, newSong) {
  playlist.update((list) => {
    if (index < 0 || index >= list.length) return list;

    const next = [...list];
    next[index] = {
      ...next[index],
      ...newSong,
    };

    return next;
  });
}

/**
 * 判断是否需要自动获取网易云播放地址
 */
function needResolveNeteaseUrl(song) {
  return song?.source === "netease" && song?.id && !song?.url;
}

/**
 * 自动补充网易云歌曲播放地址
 */
async function resolvePlayableSong(song, index) {
  if (!song) return song;

  // 本地歌曲或已有 url，直接返回
  if (!needResolveNeteaseUrl(song)) {
    return song;
  }

  try {
    const { prepareNcmSongForPlay } = await import("./neteaseStore.js");
    const preparedSong = await prepareNcmSongForPlay(song);

    if (preparedSong?.url) {
      updateSongInPlaylist(index, preparedSong);
    }

    return preparedSong;
  } catch (e) {
    console.error("自动获取网易云播放地址失败", e);
    throw new Error("自动获取网易云播放地址失败：" + (e.message || "未知错误"));
  }
}

/**
 * 预加载指定索引歌曲的网易云播放地址
 * 失败不影响当前播放
 */
async function prefetchTrackUrl(index) {
  const list = getStoreValue(playlist);

  if (index < 0 || index >= list.length) return;

  const song = list[index];

  if (!needResolveNeteaseUrl(song)) return;

  try {
    const resolved = await resolvePlayableSong(song, index);

    if (resolved?.url) {
      console.log("[Prefetch] 已预加载歌曲播放地址:", resolved.title);
    }
  } catch (e) {
    console.warn("[Prefetch] 预加载歌曲播放地址失败:", song?.title, e);
  }
}

/**
 * 预加载当前歌曲附近的播放地址
 * 主要用于让下一首/上一首更快播放
 */
function prefetchNearbyTracks(index) {
  const list = getStoreValue(playlist);

  if (!list.length) return;

  const indexes = [];

  const nextIndex = index + 1 < list.length ? index + 1 : 0;
  const prevIndex = index - 1 >= 0 ? index - 1 : list.length - 1;

  if (nextIndex !== index) indexes.push(nextIndex);
  if (prevIndex !== index) indexes.push(prevIndex);

  for (const i of indexes) {
    prefetchTrackUrl(i);
  }
}

/**
 * 播放指定索引歌曲
 * 支持网易云歌曲自动获取播放地址
 */
export async function playTrack(index) {
  const requestId = ++playRequestId;

  const list = getStoreValue(playlist);

  if (index < 0 || index >= list.length) return;

  let song = list[index];

  currentIndex.set(index);
  playbackError.set("");
  isTrackLoading.set(true);

  try {
    song = await resolvePlayableSong(song, index);

    // 如果在异步获取 URL 期间，用户又切换了歌曲，则放弃本次播放
    if (requestId !== playRequestId) return;

    if (!song?.url) {
      throw new Error("该歌曲暂无可用播放地址，可能是 VIP、版权或地区限制");
    }

    const a = getAudio();

    // 切歌时重置时间
    currentTime.set(0);
    duration.set(0);

    a.src = song.url;
    a.volume = getStoreValue(volume);
    a.playbackRate = getStoreValue(playbackRate);

    await a.play();

    isPlaying.set(true);
    playbackError.set("");

    // 当前歌曲开始播放后，后台预加载上一首和下一首
    prefetchNearbyTracks(index);
  } catch (e) {
    if (requestId !== playRequestId) return;

    console.error("播放失败", e);

    isPlaying.set(false);
    playbackError.set(e.message || "播放失败");
  } finally {
    if (requestId === playRequestId) {
      isTrackLoading.set(false);
    }
  }
}

export async function togglePlay() {
  const a = getAudio();

  // 如果 audio 还没有 src，但当前列表有歌曲，则尝试播放当前歌曲
  if (!a.src) {
    const idx = getStoreValue(currentIndex);
    const list = getStoreValue(playlist);

    if (idx >= 0 && idx < list.length) {
      await playTrack(idx);
    }

    return;
  }

  try {
    playbackError.set("");

    if (a.paused) {
      await a.play();
      isPlaying.set(true);
    } else {
      a.pause();
      isPlaying.set(false);
    }
  } catch (e) {
    console.error("播放/暂停失败", e);
    playbackError.set(e.message || "播放失败");
    isPlaying.set(false);
  }
}

export async function nextTrack() {
  const list = getStoreValue(playlist);
  const idx = getStoreValue(currentIndex);
  const mode = getStoreValue(playMode);

  if (list.length === 0) return;

  let next;

  if (mode === "random") {
    if (list.length === 1) {
      next = 0;
    } else {
      do {
        next = Math.floor(Math.random() * list.length);
      } while (next === idx);
    }
  } else {
    next = (idx + 1) % list.length;
  }

  await playTrack(next);
}

export async function prevTrack() {
  const list = getStoreValue(playlist);
  const idx = getStoreValue(currentIndex);
  const mode = getStoreValue(playMode);

  if (list.length === 0) return;

  let prev;

  if (mode === "random") {
    if (list.length === 1) {
      prev = 0;
    } else {
      do {
        prev = Math.floor(Math.random() * list.length);
      } while (prev === idx);
    }
  } else {
    prev = (idx - 1 + list.length) % list.length;
  }

  await playTrack(prev);
}

export function setVolume(val) {
  const a = getAudio();
  a.volume = val;
  volume.set(val);
}

export function setPlaybackRate(rate) {
  const a = getAudio();
  a.playbackRate = rate;
  playbackRate.set(rate);
}

export function seekTo(time) {
  const a = getAudio();

  if (!a.src) return;

  a.currentTime = time;
  currentTime.set(time);
}

export function togglePlayMode() {
  const mode = getStoreValue(playMode);
  const modes = ["all", "loop", "random"];
  const nextIndex = (modes.indexOf(mode) + 1) % modes.length;
  playMode.set(modes[nextIndex]);
}

// ========== 自动持久化 ==========
function saveState() {
  try {
    const state = {
      playlist: getStoreValue(playlist),
      volume: getStoreValue(volume),
      playMode: getStoreValue(playMode),
      lyricOffset: getStoreValue(lyricOffset),
    };
    localStorage.setItem("music-player-state", JSON.stringify(state));
  } catch (e) {
    console.error("保存状态失败", e);
  }
}

playlist.subscribe(() => saveState());
volume.subscribe(() => saveState());
playMode.subscribe(() => saveState());
lyricOffset.subscribe(() => saveState());

export function restoreState() {
  try {
    const raw = localStorage.getItem("music-player-state");
    if (!raw) return;

    const state = JSON.parse(raw);

    if (state.playlist && state.playlist.length > 0) {
      playlist.set(state.playlist);
    }

    if (state.volume !== undefined) {
      volume.set(state.volume);
      if (audio) audio.volume = state.volume;
    }

    if (state.playMode) playMode.set(state.playMode);

    if (state.lyricOffset !== undefined) {
      lyricOffset.set(state.lyricOffset);
    }
  } catch (e) {
    console.error("恢复状态失败", e);
  }
}