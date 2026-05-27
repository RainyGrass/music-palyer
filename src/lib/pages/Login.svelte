<!-- src/lib/pages/Login.svelte -->
<script>
  import { onMount, onDestroy } from "svelte";
  import {
    Cloud,
    QrCode,
    Smartphone,
    Mail,
    Settings,
    Save,
    X,
    RefreshCw,
    LoaderCircle,
    KeyRound,
    ShieldCheck,
    Link,
  } from "lucide-svelte";

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

  const tabs = [
    { key: "qr", label: "二维码", icon: QrCode },
    { key: "phone", label: "手机号", icon: Smartphone },
    { key: "email", label: "邮箱", icon: Mail },
  ];

  // 只有已保存 cookie 时才自动检查登录状态
  if ($neteaseCookie) {
    checkLoginStatus().then((ok) => {
      if (ok) navigate("/");
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
        navigate("/");
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

      const res = await ncmFetch("/captcha/sent", {
        phone: phone.trim(),
      });

      if (res?.code === 200) {
        captchaCountdown = 60;

        captchaTimer = setInterval(() => {
          captchaCountdown--;

          if (captchaCountdown <= 0) {
            clearInterval(captchaTimer);
          }
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

      const params = {
        phone: phone.trim(),
      };

      if (phoneMode === "password") {
        params.password = phonePassword;
      } else {
        params.captcha = phoneCaptcha;
      }

      const res = await ncmFetch("/login/cellphone", params);

      if (res?.code === 200) {
        if (res.cookie) neteaseCookie.set(res.cookie);

        await checkLoginStatus();
        navigate("/");
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
        navigate("/");
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

<div class="p-6 pb-32 min-h-full soft-gradient-bg">
  <div class="max-w-xl mx-auto">
    <div class="text-center mb-8">
      <div class="inline-flex items-center justify-center w-16 h-16 rounded-3xl glass-card mb-4">
        <Cloud size={34} class="text-primary icon-primary-glow" />
      </div>

      <h1 class="text-3xl font-bold flex items-center justify-center gap-2">
        网易云音乐登录
      </h1>

      <p class="text-sm text-base-content/50 mt-2">
        登录后可同步喜欢的歌曲、收藏歌单和在线搜索
      </p>
    </div>

    <!-- API 设置 -->
    <div class="card glass-card glass-hover mb-6">
      <div class="card-body p-4">
        {#if editingApi}
          <div class="flex gap-2">
            <label class="input input-bordered input-sm flex-1 bg-base-100/60 flex items-center gap-2">
              <Link size={15} class="text-base-content/50" />
              <input
                type="text"
                placeholder="http://localhost:3000"
                bind:value={apiInput}
                class="grow"
              />
            </label>

            <button class="btn btn-primary btn-sm gap-1 rounded-full" onclick={saveApi}>
              <Save size={15} />
              保存
            </button>

            <button
              class="btn btn-ghost btn-sm btn-circle icon-btn-glass"
              onclick={() => (editingApi = false)}
              title="取消"
            >
              <X size={16} />
            </button>
          </div>
        {:else}
          <div class="flex justify-between items-center gap-3">
            <div class="min-w-0">
              <div class="flex items-center gap-2 text-sm text-base-content/70">
                <Settings size={16} class="text-primary" />
                <span class="truncate">API 地址：{$apiBaseUrl}</span>
              </div>
              <p class="text-xs text-base-content/40 mt-1">
                请确保已部署 NeteaseCloudMusicApi 并开启 CORS
              </p>
            </div>

            <button class="btn btn-ghost btn-xs rounded-full glass-hover" onclick={startEditApi}>
              修改
            </button>
          </div>
        {/if}
      </div>
    </div>

    <!-- Tabs -->
    <div class="glass-card rounded-3xl p-2 mb-6">
      <div class="grid grid-cols-3 gap-2">
        {#each tabs as tab (tab.key)}
          {@const Icon = tab.icon}
          <button
            class="btn btn-sm rounded-2xl gap-2
            {activeTab === tab.key ? 'btn-primary shadow-lg shadow-primary/20' : 'btn-ghost glass-hover'}"
            onclick={() => switchTab(tab.key)}
          >
            <Icon size={16} />
            {tab.label}
          </button>
        {/each}
      </div>
    </div>

    {#if errorMsg}
      <div class="alert alert-error mb-4 glass-card">
        <span class="bg-amber-100">{errorMsg}</span>
      </div>
    {/if}

    {#if activeTab === "qr"}
      <div class="card glass-card">
        <div class="card-body items-center text-center">
          <div class="w-56 h-56 rounded-3xl glass-card flex items-center justify-center overflow-hidden">
            {#if qrImg}
              <div class="bg-white p-3 rounded-2xl">
                <img src={qrImg} alt="二维码" class="w-48 h-48" />
              </div>
            {:else}
              <LoaderCircle size={42} class="text-primary animate-spin" />
            {/if}
          </div>

          <p class="text-base-content/80 mt-4 min-h-6">
            {qrStatus || "正在加载二维码..."}
          </p>

          <p class="text-xs text-base-content/40">
            使用网易云音乐 APP 扫码确认登录
          </p>

          <button
            class="btn btn-outline btn-sm gap-2 rounded-full mt-2 glass-hover"
            onclick={refreshQr}
            disabled={isStartingQr}
          >
            {#if isStartingQr}
              <LoaderCircle size={15} class="animate-spin" />
            {:else}
              <RefreshCw size={15} />
            {/if}
            刷新二维码
          </button>
        </div>
      </div>
    {/if}

    {#if activeTab === "phone"}
      <div class="card glass-card">
        <div class="card-body gap-4">
          <label class="input input-bordered bg-base-100/60 flex items-center gap-2">
            <Smartphone size={18} class="text-base-content/50" />
            <input
              type="tel"
              placeholder="手机号"
              bind:value={phone}
              class="grow"
            />
          </label>

          <div class="grid grid-cols-2 gap-2">
            <button
              class="btn btn-sm rounded-2xl gap-2
              {phoneMode === 'password' ? 'btn-primary' : 'btn-ghost glass-hover'}"
              onclick={() => (phoneMode = "password")}
            >
              <KeyRound size={15} />
              密码登录
            </button>

            <button
              class="btn btn-sm rounded-2xl gap-2
              {phoneMode === 'captcha' ? 'btn-primary' : 'btn-ghost glass-hover'}"
              onclick={() => (phoneMode = "captcha")}
            >
              <ShieldCheck size={15} />
              验证码登录
            </button>
          </div>

          {#if phoneMode === "password"}
            <label class="input input-bordered bg-base-100/60 flex items-center gap-2">
              <KeyRound size={18} class="text-base-content/50" />
              <input
                type="password"
                placeholder="密码"
                bind:value={phonePassword}
                class="grow"
              />
            </label>
          {:else}
            <div class="flex gap-2">
              <label class="input input-bordered bg-base-100/60 flex-1 flex items-center gap-2">
                <ShieldCheck size={18} class="text-base-content/50" />
                <input
                  type="text"
                  placeholder="验证码"
                  bind:value={phoneCaptcha}
                  class="grow"
                />
              </label>

              <button
                class="btn btn-outline rounded-full"
                onclick={sendCaptcha}
                disabled={captchaCountdown > 0 || loading}
              >
                {captchaCountdown > 0 ? `${captchaCountdown}s` : "获取验证码"}
              </button>
            </div>
          {/if}

          <button
            class="btn btn-primary w-full rounded-full gap-2 shadow-lg shadow-primary/25"
            onclick={phoneLogin}
            disabled={loading}
          >
            {#if loading}
              <LoaderCircle size={17} class="animate-spin" />
            {:else}
              <Cloud size={17} />
            {/if}
            登录
          </button>
        </div>
      </div>
    {/if}

    {#if activeTab === "email"}
      <div class="card glass-card">
        <div class="card-body gap-4">
          <label class="input input-bordered bg-base-100/60 flex items-center gap-2">
            <Mail size={18} class="text-base-content/50" />
            <input
              type="email"
              placeholder="网易邮箱，例如 xxx@163.com"
              bind:value={email}
              class="grow"
            />
          </label>

          <label class="input input-bordered bg-base-100/60 flex items-center gap-2">
            <KeyRound size={18} class="text-base-content/50" />
            <input
              type="password"
              placeholder="密码"
              bind:value={emailPassword}
              class="grow"
            />
          </label>

          <button
            class="btn btn-primary w-full rounded-full gap-2 shadow-lg shadow-primary/25"
            onclick={emailLogin}
            disabled={loading}
          >
            {#if loading}
              <LoaderCircle size={17} class="animate-spin" />
            {:else}
              <Cloud size={17} />
            {/if}
            登录
          </button>
        </div>
      </div>
    {/if}
  </div>
</div>