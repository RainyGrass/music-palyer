<!-- src/lib/pages/UserProfile.svelte -->
<script>
  import { confirm } from "@tauri-apps/plugin-dialog";
  import { navigate } from "../stores/router.js";
  import {
    neteaseUser,
    neteaseCookie,
    logoutNcm,
    checkLoginStatus,
  } from "../stores/neteaseStore.js";

  // 只在有 cookie 时才检查状态，避免退出后无意义请求
  if ($neteaseCookie) {
    checkLoginStatus();
  }

  async function handleLogout() {
    const confirmed = await confirm("确定退出网易云音乐登录吗？", {
      title: "退出登录",
      type: "warning",
    });
    if (confirmed) {
      await logoutNcm();
      navigate("/login");
    }
  }
</script>

<div class="p-6 pb-32 max-w-xl mx-auto">
  <h1 class="text-2xl font-bold mb-6">👤 用户信息</h1>

  {#if $neteaseUser}
    <div class="card bg-base-200">
      <div class="card-body items-center text-center">
        <div class="avatar mb-4">
          <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            {#if $neteaseUser.avatarUrl}
              <img src={$neteaseUser.avatarUrl} alt="头像" />
            {:else}
              <div class="bg-neutral text-neutral-content flex items-center justify-center w-full h-full text-3xl">
                {$neteaseUser.nickname?.[0] || "?"}
              </div>
            {/if}
          </div>
        </div>

        <h2 class="text-xl font-bold">{$neteaseUser.nickname}</h2>
        <p class="text-base-content/60 text-sm">UID: {$neteaseUser.userId}</p>
        {#if $neteaseUser.signature}
          <p class="text-base-content/50 text-sm mt-1 max-w-xs">
            {$neteaseUser.signature}
          </p>
        {/if}

        <div class="card-actions mt-4">
          <button class="btn btn-error btn-sm" onclick={handleLogout}>
            退出登录
          </button>
        </div>
      </div>
    </div>
  {:else}
    <div class="text-center py-20 text-base-content/50">
      <p class="text-lg mb-4">未登录网易云音乐</p>
      <button class="btn btn-primary" onclick={() => navigate("/login")}>
        前往登录
      </button>
    </div>
  {/if}
</div>