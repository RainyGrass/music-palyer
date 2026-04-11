// src/lib/stores/router.js
import { writable } from "svelte/store";

export const currentRoute = writable("/");

export function navigate(path) {
  currentRoute.set(path);
}