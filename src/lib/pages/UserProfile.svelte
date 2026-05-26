<!-- src/lib/pages/UserProfile.svelte -->
<script>
  import { confirm } from "@tauri-apps/plugin-dialog";
  import {
    User,
    LogOut,
    Cloud,
    Music2,
    Fingerprint,
    Quote,
  } from "lucide-svelte";

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

<div class="p-6 pb-32 min-h-full soft-gradient-bg">
  <div class="max-w-2xl mx-auto">
    <div class="mb-6">
      <h1 class="text-3xl font-bold flex items-center gap-2">
        <User size={30} class="text-primary icon-primary-glow" />
        用户信息
      </h1>
      <p class="text-sm text-base-content/50 mt-2">
        查看当前网易云音乐登录状态
      </p>
    </div>

    {#if $neteaseUser}
      <div class="card glass-card glass-hover overflow-hidden">
        <div class="h-32 bg-gradient-to-r from-primary/30 via-secondary/20 to-accent/20"></div>

        <div class="card-body items-center text-center -mt-16">
          <div class="avatar mb-4">
            <div class="w-28 rounded-full ring ring-primary ring-offset-base-100 ring-offset-4 overflow-hidden glass-card">
              {#if $neteaseUser.avatarUrl}
                <img src={$neteaseUser.avatarUrl} alt="头像" />
              {:else}
                <div class="bg-primary text-primary-content flex items-center justify-center w-full h-full">
                  <User size={42} />
                </div>
              {/if}
            </div>
          </div>

          <h2 class="text-2xl font-bold">{$neteaseUser.nickname}</h2>

          <div class="flex items-center gap-2 text-base-content/60 text-sm mt-2">
            <Fingerprint size={15} />
            <span>UID：{$neteaseUser.userId}</span>
          </div>

          {#if $neteaseUser.signature}
            <div class="mt-4 max-w-md glass-card rounded-2xl p-4">
              <div class="flex justify-center mb-2">
                <Quote size={18} class="text-primary/70" />
              </div>
              <p class="text-base-content/70 text-sm">
                {$neteaseUser.signature}
              </p>
            </div>
          {:else}
            <p class="text-base-content/40 text-sm mt-4">
              这个用户暂时没有填写个性签名
            </p>
          {/if}

          <div class="card-actions mt-6 flex justify-center gap-3">
            <button
              class="btn btn-primary gap-2 rounded-full shadow-lg shadow-primary/25"
              onclick={() => navigate("/")}
            >
              <Music2 size={17} />
              返回主页
            </button>

            <button
              class="btn btn-error btn-outline gap-2 rounded-full glass-hover"
              onclick={handleLogout}
            >
              <LogOut size={17} />
              退出登录
            </button>
          </div>
        </div>
      </div>
    {:else}
      <div class="glass-card rounded-3xl p-10 text-center">
        <div class="inline-flex items-center justify-center w-16 h-16 rounded-3xl glass-card mb-4">
          <Cloud size={34} class="text-primary icon-primary-glow" />
        </div>

        <p class="text-lg mb-2">未登录网易云音乐</p>
        <p class="text-sm text-base-content/50 mb-6">
          登录后可以查看喜欢的歌曲、收藏歌单，并搜索在线音乐
        </p>

        <button
          class="btn btn-primary gap-2 rounded-full shadow-lg shadow-primary/25"
          onclick={() => navigate("/login")}
        >
          <Cloud size={17} />
          前往登录
        </button>
      </div>
    {/if}
  </div>
</div>