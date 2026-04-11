// src/lib/stores/playerStore.js
import { writable, derived, get } from "svelte/store";
import { readFile } from "@tauri-apps/plugin-fs";

export const playlist = writable([]);
export const currentIndex = writable(-1);
export const isPlaying = writable(false);
export const volume = writable(0.8);
export const playbackRate = writable(1);
export const currentTime = writable(0);
export const duration = writable(0);

// 当前歌曲
export const currentSong = derived(
  [playlist, currentIndex],
  ([$playlist, $currentIndex]) => {
    if ($currentIndex >= 0 && $currentIndex < $playlist.length) {
      return $playlist[$currentIndex];
    }
    return null;
  }
);

// ========== Audio 实例 ==========
let audio = null;
let isChangingTrack = false;
// 缓存已加载过的 blob URL，避免重复读取
let blobUrlCache = {};

function getAudioInstance() {
  if (!audio) {
    audio = new Audio();
    audio.volume = 0.8;

    audio.addEventListener("timeupdate", () => {
      currentTime.set(audio.currentTime);
    });

    audio.addEventListener("loadedmetadata", () => {
      duration.set(audio.duration);
    });

    audio.addEventListener("ended", () => {
      isChangingTrack = false;
      nextTrack();
    });

    audio.addEventListener("play", () => {
      isPlaying.set(true);
    });

    audio.addEventListener("pause", () => {
      isPlaying.set(false);
    });

    audio.addEventListener("error", (e) => {
      console.error("音频加载错误:", e);
      isChangingTrack = false;
    });
  }
  return audio;
}

/**
 * 根据文件扩展名返回 MIME 类型
 */
function getMimeType(filename) {
  const ext = filename.toLowerCase().split(".").pop();
  const mimeMap = {
    mp3: "audio/mpeg",
    wav: "audio/wav",
    flac: "audio/flac",
    ogg: "audio/ogg",
    m4a: "audio/mp4",
    aac: "audio/aac",
    wma: "audio/x-ms-wma",
  };
  return mimeMap[ext] || "audio/mpeg";
}

/**
 * 通过 Tauri fs 读取文件并创建 Blob URL
 */
async function loadAudioFile(song) {
  // 如果已经缓存过，直接返回
  if (blobUrlCache[song.filePath]) {
    return blobUrlCache[song.filePath];
  }

  const fileData = await readFile(song.filePath);
  const mimeType = getMimeType(song.filename);
  const blob = new Blob([fileData], { type: mimeType });
  const blobUrl = URL.createObjectURL(blob);

  // 缓存
  blobUrlCache[song.filePath] = blobUrl;
  return blobUrl;
}

// 播放指定索引的歌曲
export async function playTrack(index) {
  if (isChangingTrack) return;

  const list = get(playlist);
  if (index < 0 || index >= list.length) return;

  isChangingTrack = true;

  const a = getAudioInstance();
  const song = list[index];

  // 先停止当前播放
  a.pause();
  a.currentTime = 0;

  currentIndex.set(index);

  try {
    // 通过 Tauri fs 读取文件
    const blobUrl = await loadAudioFile(song);
    a.src = blobUrl;
    a.load();
    await a.play();
  } catch (err) {
    console.error("播放失败:", err);
  } finally {
    isChangingTrack = false;
  }
}

// 切换播放/暂停
export function togglePlay() {
  if (isChangingTrack) return;

  const a = getAudioInstance();
  if (!a.src) return;

  if (a.paused) {
    a.play().catch((err) => {
      console.error("播放失败:", err);
    });
  } else {
    a.pause();
  }
}

// 播放/暂停当前歌曲（从列表）
export function playOrPauseCurrent(index) {
  const idx = get(currentIndex);

  if (idx === index) {
    togglePlay();
  } else {
    playTrack(index);
  }
}

// 下一首
export function nextTrack() {
  const list = get(playlist);
  const idx = get(currentIndex);
  if (list.length === 0) return;
  playTrack((idx + 1) % list.length);
}

// 上一首
export function prevTrack() {
  const list = get(playlist);
  const idx = get(currentIndex);
  if (list.length === 0) return;
  playTrack((idx - 1 + list.length) % list.length);
}

// 设置音量
export function setVolume(val) {
  const a = getAudioInstance();
  a.volume = Math.max(0, Math.min(1, val));
  volume.set(a.volume);
}

// 设置倍速
export function setPlaybackRate(rate) {
  const a = getAudioInstance();
  a.playbackRate = rate;
  playbackRate.set(rate);
}

// 跳转时间
export function seekTo(time) {
  const a = getAudioInstance();
  a.currentTime = time;
  currentTime.set(time);
}