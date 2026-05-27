// src/lib/stores/themeStore.js
import { writable } from "svelte/store";

const THEME_KEY = "music-player-theme";

/**
 * 统一主题值，兼容历史版本：
 * - light
 * - dark
 * - music-light
 * - music-dark
 */
function normalizeTheme(value) {
  if (value === "light" || value === "music-light") return "light";
  return "dark";
}

function getInitialTheme() {
  if (typeof localStorage === "undefined") return "dark";

  const savedTheme = localStorage.getItem(THEME_KEY);
  return normalizeTheme(savedTheme);
}

function syncThemeToDom(theme) {
  if (typeof document === "undefined") return;

  document.documentElement.dataset.theme = theme;

  if (document.body) {
    document.body.dataset.theme = theme;
  }
}

function saveTheme(theme) {
  if (typeof localStorage === "undefined") return;
  localStorage.setItem(THEME_KEY, theme);
}

function createThemeStore() {
  const initialTheme = getInitialTheme();
  const { subscribe, set, update } = writable(initialTheme);

  function applyTheme(nextTheme) {
    const safeTheme = normalizeTheme(nextTheme);

    syncThemeToDom(safeTheme);
    saveTheme(safeTheme);
    set(safeTheme);
  }

  return {
    subscribe,

    init() {
      applyTheme(getInitialTheme());
    },

    setTheme(nextTheme) {
      applyTheme(nextTheme);
    },

    toggleTheme() {
      update((currentTheme) => {
        const nextTheme = normalizeTheme(currentTheme) === "dark" ? "light" : "dark";

        syncThemeToDom(nextTheme);
        saveTheme(nextTheme);

        return nextTheme;
      });
    },
  };
}

export const theme = createThemeStore();