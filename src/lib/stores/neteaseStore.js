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