// src/lib/stores/neteaseStore.js
import { writable } from "svelte/store";

export const apiBaseUrl = writable(
  localStorage.getItem("ncm-api-url") || "http://localhost:3000"
);

export const neteaseUser = writable(null);
export const neteaseCookie = writable(localStorage.getItem("ncm-cookie") || "");

let manualLogout = false;

apiBaseUrl.subscribe((url) => localStorage.setItem("ncm-api-url", url));
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
  store.subscribe((v) => (value = v))();
  return value;
}

/**
 * 封装请求：10秒超时、无 credentials、自动处理 cookie
 */
export async function ncmFetch(endpoint, params = {}) {
  const base = getStoreValue(apiBaseUrl);
  const url = new URL(endpoint, base);

  Object.entries(params).forEach(([k, v]) => {
    if (v !== undefined && v !== null) url.searchParams.set(k, v);
  });
  url.searchParams.set("_t", Date.now());

  const cookie = getStoreValue(neteaseCookie);
  const headers = { Accept: "application/json" };
  if (cookie) headers["Cookie"] = cookie;

  console.log("[NCM Request]", url.toString(), { headers });

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 10000);

  try {
    const res = await fetch(url.toString(), {
      method: "GET",
      headers,
      signal: controller.signal,
    });
    clearTimeout(timeoutId);

    console.log("[NCM Response] HTTP", res.status, res.statusText);

    if (!res.ok) {
      throw new Error(`HTTP ${res.status}: ${res.statusText}`);
    }

    const data = await res.json();
    console.log("[NCM Data]", data);

    // 保存 cookie（从 JSON 响应体取，浏览器 fetch 拿不到 Set-Cookie header）
    const newCookie = data?.cookie;
    if (!manualLogout && newCookie && typeof newCookie === "string" && newCookie.trim()) {
      neteaseCookie.set(newCookie);
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
    console.log("[Debug] /login/status full response:", JSON.stringify(data, null, 2));
    const profile = data?.data?.profile;
    const account = data?.data?.account;
    console.log("这是一个调试信号：",profile?.nickname)
    if (account?.id) {
      neteaseUser.set({
        userId: account.id,
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
  } catch (e) {}
  neteaseUser.set(null);
  neteaseCookie.set("");
  localStorage.removeItem("ncm-cookie");
}