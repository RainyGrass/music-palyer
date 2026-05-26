<!-- src/lib/components/Navbar.svelte -->
<script>
  import { currentRoute, navigate } from "../stores/router.js";
  import { neteaseUser } from "../stores/neteaseStore.js";

const navItems = [
  { path: "/", label: "🏠 主页" },
  { path: "/collection", label: "🦎 本地音乐" },
  { path: "/visualizer", label: "🎵 音频可视化" },
  { path: "/data-manage", label: "📁 数据管理" },
];
</script>

<div class="navbar bg-base-200 shadow-md px-4">
  <div class="navbar-start">
    <button class="btn btn-ghost text-xl font-bold" onclick={() => navigate("/")}>
      🎶 Music Player
    </button>
  </div>

  <div class="navbar-center">
    <ul class="menu menu-horizontal px-1 gap-1">
      {#each navItems as item}
        <li>
          <button
            class="btn btn-ghost btn-sm {$currentRoute === item.path ? 'btn-active' : ''}"
            onclick={() => navigate(item.path)}
          >
            {item.label}
          </button>
        </li>
      {/each}
    </ul>
  </div>

  <div class="navbar-end">
    {#if $neteaseUser}
      <button class="btn btn-ghost btn-circle avatar" onclick={() => navigate("/user")}>
        <div class="w-8 rounded-full">
          {#if $neteaseUser.avatarUrl}
            <img src={$neteaseUser.avatarUrl} alt="头像" />
          {:else}
            <div class="bg-primary text-primary-content flex items-center justify-center w-full h-full text-sm font-bold">
              {$neteaseUser.nickname?.[0] || "?"}
            </div>
          {/if}
        </div>
      </button>
    {:else}
      <button class="btn btn-ghost btn-sm" onclick={() => navigate("/login")}>
        ☁️ 登录
      </button>
    {/if}
  </div>
</div>