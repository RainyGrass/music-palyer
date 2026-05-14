// src/lib/stores/playerStore.js
import { writable, derived } from "svelte/store";
import { readFile } from "@tauri-apps/plugin-fs";

export const playlist = writable([]);
export const currentIndex = writable(-1);
export const isPlaying = writable(false);
export const volume = writable(0.8);
export const playbackRate = writable(1);
export const currentTime = writable(0);
export const duration = writable(0);
export const playMode = writable("all"); // 'all' | 'loop' | 'random'

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

function getStoreValue(store) {
  let value;
  store.subscribe((v) => (value = v))();
  return value;
}

export function getAudio() {
  if (!audio) {
    audio = new Audio();
    audio.volume = getStoreValue(volume);

    audio.addEventListener("timeupdate", () => {
      currentTime.set(audio.currentTime);
    });

    audio.addEventListener("loadedmetadata", () => {
      duration.set(audio.duration);
    });

    audio.addEventListener("ended", () => {
      const mode = getStoreValue(playMode);
      if (mode === "loop") {
        audio.currentTime = 0;
        audio.play();
      } else {
        nextTrack();
      }
    });
  }
  return audio;
}

export function playTrack(index) {
  const list = getStoreValue(playlist);
  if (index < 0 || index >= list.length) return;

  currentIndex.set(index);
  const song = list[index];
  const a = getAudio();

  a.src = song.url;
  a.load();
  a.play();
  isPlaying.set(true);
}

export function togglePlay() {
  const a = getAudio();
  if (!a.src) return;

  if (a.paused) {
    a.play();
    isPlaying.set(true);
  } else {
    a.pause();
    isPlaying.set(false);
  }
}

export function nextTrack() {
  const list = getStoreValue(playlist);
  const idx = getStoreValue(currentIndex);
  const mode = getStoreValue(playMode);

  if (list.length === 0) return;

  let next;
  if (mode === "random") {
    next = Math.floor(Math.random() * list.length);
  } else {
    next = (idx + 1) % list.length;
  }
  playTrack(next);
}

export function prevTrack() {
  const list = getStoreValue(playlist);
  const idx = getStoreValue(currentIndex);
  const mode = getStoreValue(playMode);

  if (list.length === 0) return;

  let prev;
  if (mode === "random") {
    prev = Math.floor(Math.random() * list.length);
  } else {
    prev = (idx - 1 + list.length) % list.length;
  }
  playTrack(prev);
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
    };
    localStorage.setItem("music-player-state", JSON.stringify(state));
  } catch (e) {
    console.error("保存状态失败", e);
  }
}

// 订阅变更自动保存
playlist.subscribe(() => saveState());
volume.subscribe(() => saveState());
playMode.subscribe(() => saveState());

// 导出恢复函数，供页面调用
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
  } catch (e) {
    console.error("恢复状态失败", e);
  }
}