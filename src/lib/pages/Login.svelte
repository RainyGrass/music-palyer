<!-- src/lib/pages/Login.svelte -->
<script>
  import { onMount, onDestroy } from "svelte";
  import { navigate } from "../stores/router.js";
  import {
    apiBaseUrl,
    neteaseCookie,
    ncmFetch,
    neteaseUser,
    checkLoginStatus,
  } from "../stores/neteaseStore.js";

  let activeTab = "qr";

  let editingApi = false;
  let apiInput = "";

  // 二维码相关
  let qrKey = "";
  let qrImg = "";
  let qrStatus = "";
  let qrChecking = false;
  let qrTimer = null;
  let isStartingQr = false;

  // 手机号相关
  let phone = "";
  let phonePassword = "";
  let phoneCaptcha = "";
  let phoneMode = "password";
  let captchaCountdown = 0;
  let captchaTimer = null;

  // 邮箱相关
  let email = "";
  let emailPassword = "";

  let loading = false;
  let errorMsg = "";

  // 只有已保存 cookie 时才自动检查登录状态
  if ($neteaseCookie) {
    checkLoginStatus().then((ok) => {
      if (ok) navigate("/user");
    });
  }

  onMount(() => {
    if (activeTab === "qr") {
      startQrLogin();
    }
  });
  onDestroy(() => {
    stopQrCheck();
    if (captchaTimer) clearInterval(captchaTimer);
  });

  function startEditApi() {
    apiInput = $apiBaseUrl;
    editingApi = true;
  }

  function saveApi() {
    if (apiInput.trim()) {
      apiBaseUrl.set(apiInput.trim());
    }
    editingApi = false;
  }

  // ========== 二维码登录 ==========
  async function startQrLogin() {
    if (isStartingQr) {
      console.log("[QR] Already starting, skip");
      return;
    }
    isStartingQr = true;
    errorMsg = "";
    qrStatus = "正在获取二维码...";
    qrImg = "";
    stopQrCheck();

    try {
      console.log("[QR] Step 1: Getting key...");
      const keyRes = await ncmFetch("/login/qr/key");
      console.log("[QR] Key response:", keyRes);

      qrKey = keyRes?.data?.unikey || keyRes?.unikey;
      if (!qrKey) {
        throw new Error("获取二维码 Key 失败，响应中无 unikey");
      }

      console.log("[QR] Step 2: Creating QR with key:", qrKey);
      const createRes = await ncmFetch("/login/qr/create", {
        key: qrKey,
        qrimg: "true",
      });
      console.log("[QR] Create response:", createRes);

      qrImg = createRes?.data?.qrimg || createRes?.qrimg;
      if (!qrImg) {
        throw new Error("获取二维码图片失败");
      }

      qrStatus = "请使用网易云音乐 APP 扫码登录";
      qrChecking = true;
      checkQrLoop();
    } catch (e) {
      qrStatus = "";
      errorMsg = "获取二维码失败：" + (e.message || "未知错误");
      console.error("[QR] Failed:", e);
    } finally {
      isStartingQr = false;
    }
  }

  async function checkQrLoop() {
    if (!qrChecking || !qrKey) return;

    try {
      const res = await ncmFetch("/login/qr/check", { key: qrKey });
      const code = res?.code;

      if (code === 801) {
        qrStatus = "等待扫码...";
      } else if (code === 802) {
        qrStatus = `扫码成功，等待确认... ${res.nickname ? "(" + res.nickname + ")" : ""}`;
      } else if (code === 803) {
        qrStatus = "登录成功！";
        qrChecking = false;
        if (res.cookie) neteaseCookie.set(res.cookie);
        // 先用 qr/check 里的 nickname（如果有）
        if (res.nickname) {
            neteaseUser.set({
            userId: res.userId || 0,
            nickname: res.nickname,
            avatarUrl: res.avatarUrl || "",
            signature: "",
            });
        }
        await checkLoginStatus();
        navigate("/user");
        return;
      } else if (code === 800) {
        qrStatus = "二维码已过期，正在刷新...";
        qrChecking = false;
        qrImg = "";
        setTimeout(() => startQrLogin(), 1000);
        return;
      }

      if (qrChecking) {
        qrTimer = setTimeout(checkQrLoop, 5000);
      }
    } catch (e) {
      qrStatus = "检查状态失败，正在重试...";
      if (qrChecking) {
        qrTimer = setTimeout(checkQrLoop, 3000);
      }
    }
  }

  function stopQrCheck() {
    qrChecking = false;
    if (qrTimer) {
      clearTimeout(qrTimer);
      qrTimer = null;
    }
  }

  function refreshQr() {
    stopQrCheck();
    startQrLogin();
  }

  // ========== 切换标签页 ==========
  function switchTab(tab) {
    activeTab = tab;
    errorMsg = "";
    if (tab === "qr") {
      // 无条件启动二维码，让 startQrLogin 内部的锁来处理重复
      startQrLogin();
    } else {
      stopQrCheck();
    }
  }

  // ========== 手机号登录 ==========
  async function sendCaptcha() {
    if (!phone.trim()) {
      errorMsg = "请输入手机号";
      return;
    }
    errorMsg = "";
    try {
      loading = true;
      const res = await ncmFetch("/captcha/sent", { phone: phone.trim() });
      if (res?.code === 200) {
        captchaCountdown = 60;
        captchaTimer = setInterval(() => {
          captchaCountdown--;
          if (captchaCountdown <= 0) clearInterval(captchaTimer);
        }, 1000);
      } else {
        errorMsg = res?.message || "发送验证码失败";
      }
    } catch (e) {
      errorMsg = "发送验证码失败：" + (e.message || "网络错误");
    } finally {
      loading = false;
    }
  }

  async function phoneLogin() {
    errorMsg = "";
    if (!phone.trim()) {
      errorMsg = "请输入手机号";
      return;
    }
    if (phoneMode === "password" && !phonePassword) {
      errorMsg = "请输入密码";
      return;
    }
    if (phoneMode === "captcha" && !phoneCaptcha) {
      errorMsg = "请输入验证码";
      return;
    }

    try {
      loading = true;
      const params = { phone: phone.trim() };
      if (phoneMode === "password") {
        params.password = phonePassword;
      } else {
        params.captcha = phoneCaptcha;
      }

      const res = await ncmFetch("/login/cellphone", params);
      if (res?.code === 200) {
        if (res.cookie) neteaseCookie.set(res.cookie);
        await checkLoginStatus();
        navigate("/user");
      } else {
        errorMsg = res?.message || "登录失败";
      }
    } catch (e) {
      errorMsg = "登录失败：" + (e.message || "网络错误");
    } finally {
      loading = false;
    }
  }

  // ========== 邮箱登录 ==========
  async function emailLogin() {
    errorMsg = "";
    if (!email.trim() || !emailPassword) {
      errorMsg = "请输入邮箱和密码";
      return;
    }

    try {
      loading = true;
      const res = await ncmFetch("/login", {
        email: email.trim(),
        password: emailPassword,
      });
      if (res?.code === 200) {
        if (res.cookie) neteaseCookie.set(res.cookie);
        await checkLoginStatus();
        navigate("/user");
      } else {
        errorMsg = res?.message || "登录失败";
      }
    } catch (e) {
      errorMsg = "登录失败：" + (e.message || "网络错误");
    } finally {
      loading = false;
    }
  }
</script>

<div class="p-6 pb-32 max-w-xl mx-auto">
  <h1 class="text-2xl font-bold mb-6 text-center">☁️ 网易云音乐登录</h1>

  <div class="card bg-base-200 mb-6">
    <div class="card-body p-4">
      {#if editingApi}
        <div class="flex gap-2">
          <input
            type="text"
            class="input input-bordered input-sm flex-1"
            placeholder="http://localhost:3000"
            bind:value={apiInput}
          />
          <button class="btn btn-primary btn-sm" onclick={saveApi}>保存</button>
          <button class="btn btn-ghost btn-sm" onclick={() => (editingApi = false)}>
            取消
          </button>
        </div>
      {:else}
        <div class="flex justify-between items-center">
          <span class="text-sm text-base-content/70">API 地址：{$apiBaseUrl}</span>
          <button class="btn btn-ghost btn-xs" onclick={startEditApi}>修改</button>
        </div>
      {/if}
      <p class="text-xs text-base-content/50 mt-1">
        请确保已部署 NeteaseCloudMusicApi Enhanced 并开启 CORS
      </p>
    </div>
  </div>

  <div class="tabs tabs-boxed justify-center mb-6">
    <button
      class="tab {activeTab === 'qr' ? 'tab-active' : ''}"
      onclick={() => switchTab('qr')}
    >
      📷 二维码
    </button>
    <button
      class="tab {activeTab === 'phone' ? 'tab-active' : ''}"
      onclick={() => switchTab('phone')}
    >
      📱 手机号
    </button>
    <button
      class="tab {activeTab === 'email' ? 'tab-active' : ''}"
      onclick={() => switchTab('email')}
    >
      📧 邮箱
    </button>
  </div>

  {#if errorMsg}
    <div class="alert alert-error mb-4 text-sm">
      <span>{errorMsg}</span>
    </div>
  {/if}

  {#if activeTab === 'qr'}
    <div class="card bg-base-200">
      <div class="card-body items-center text-center">
        {#if qrImg}
          <div class="bg-white p-3 rounded-xl mb-3">
            <img src={qrImg} alt="二维码" class="w-48 h-48" />
          </div>
          <p class="text-base-content/80 mb-2">{qrStatus}</p>
          {#if !qrChecking && qrStatus.includes("过期")}
            <button class="btn btn-primary btn-sm" onclick={refreshQr}>
              刷新二维码
            </button>
          {/if}
        {:else}
          <div class="w-48 h-48 bg-base-300 rounded-xl flex items-center justify-center mb-3">
            <span class="loading loading-spinner loading-lg text-primary"></span>
          </div>
          <p class="text-base-content/60">{qrStatus || "正在加载..."}</p>
        {/if}
      </div>
    </div>
  {/if}

  {#if activeTab === 'phone'}
    <div class="card bg-base-200">
      <div class="card-body gap-4">
        <input
          type="tel"
          class="input input-bordered"
          placeholder="手机号"
          bind:value={phone}
        />

        <div class="flex gap-2">
          <button
            class="btn btn-xs {phoneMode === 'password' ? 'btn-active' : 'btn-ghost'}"
            onclick={() => (phoneMode = 'password')}
          >
            密码登录
          </button>
          <button
            class="btn btn-xs {phoneMode === 'captcha' ? 'btn-active' : 'btn-ghost'}"
            onclick={() => (phoneMode = 'captcha')}
          >
            验证码登录
          </button>
        </div>

        {#if phoneMode === 'password'}
          <input
            type="password"
            class="input input-bordered"
            placeholder="密码"
            bind:value={phonePassword}
          />
        {:else}
          <div class="flex gap-2">
            <input
              type="text"
              class="input input-bordered flex-1"
              placeholder="验证码"
              bind:value={phoneCaptcha}
            />
            <button
              class="btn btn-outline"
              onclick={sendCaptcha}
              disabled={captchaCountdown > 0 || loading}
            >
              {captchaCountdown > 0 ? `${captchaCountdown}s` : "获取验证码"}
            </button>
          </div>
        {/if}

        <button class="btn btn-primary w-full" onclick={phoneLogin} disabled={loading}>
          {#if loading}
            <span class="loading loading-spinner loading-sm"></span>
          {/if}
          登录
        </button>
      </div>
    </div>
  {/if}

  {#if activeTab === 'email'}
    <div class="card bg-base-200">
      <div class="card-body gap-4">
        <input
          type="email"
          class="input input-bordered"
          placeholder="网易邮箱（如 xxx@163.com）"
          bind:value={email}
        />
        <input
          type="password"
          class="input input-bordered"
          placeholder="密码"
          bind:value={emailPassword}
        />
        <button class="btn btn-primary w-full" onclick={emailLogin} disabled={loading}>
          {#if loading}
            <span class="loading loading-spinner loading-sm"></span>
          {/if}
          登录
        </button>
      </div>
    </div>
  {/if}
</div>