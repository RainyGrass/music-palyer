// src/lib/stores/themeStore.js
import { writable } from "svelte/store";

const THEME_KEY = "music-player-theme";

function getInitialTheme() {
  if (typeof localStorage === "undefined") return "dark";

  const savedTheme = localStorage.getItem(THEME_KEY);

  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme;
  }

  return "dark";
}

function createThemeStore() {
  const { subscribe, set, update } = writable(getInitialTheme());

  function applyTheme(nextTheme) {
    const safeTheme = nextTheme === "light" ? "light" : "dark";

    set(safeTheme);

    if (typeof localStorage !== "undefined") {
      localStorage.setItem(THEME_KEY, safeTheme);
    }

    if (typeof document !== "undefined") {
      document.documentElement.dataset.theme = safeTheme;
    }
  }

  return {
    subscribe,
    setTheme: applyTheme,
    toggleTheme() {
      update((currentTheme) => {
        const nextTheme = currentTheme === "dark" ? "light" : "dark";

        if (typeof localStorage !== "undefined") {
          localStorage.setItem(THEME_KEY, nextTheme);
        }

        if (typeof document !== "undefined") {
          document.documentElement.dataset.theme = nextTheme;
        }

        return nextTheme;
      });
    },
  };
}

export const theme = createThemeStore();