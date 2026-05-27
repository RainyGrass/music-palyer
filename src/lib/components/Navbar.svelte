<!-- src/lib/components/Navbar.svelte -->
<script>
  import {
    Music2,
    Home,
    FolderOpen,
    AudioLines,
    Database,
    Cloud,
    User,
  } from "lucide-svelte";

  import { currentRoute, navigate } from "../stores/router.js";
  import { neteaseUser } from "../stores/neteaseStore.js";
  import { theme } from "../stores/themeStore.js";

  const navItems = [
    { path: "/", label: "主页", icon: Home },
    { path: "/collection", label: "本地音乐", icon: FolderOpen },
    { path: "/visualizer", label: "音频可视化", icon: AudioLines },
    { path: "/data-manage", label: "数据管理", icon: Database },
  ];

  $: isDarkTheme = $theme === "dark";
</script>

<div class="navbar glass-panel sticky top-0 z-40 px-4 border-b border-base-content/10">
  <div class="navbar-start">
    <button
      class="btn btn-ghost text-xl font-bold gap-2 rounded-full glass-hover"
      onclick={() => navigate("/")}
    >
      <Music2 size={24} class="text-primary icon-primary-glow" />
      <span>Music Player</span>
    </button>
  </div>

  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1 gap-2">
      {#each navItems as item (item.path)}
        {@const Icon = item.icon}
        <li>
          <button
            class="btn btn-sm gap-2 rounded-full border border-base-content/10
            {$currentRoute === item.path
              ? 'btn-primary shadow-lg shadow-primary/20'
              : 'btn-ghost icon-btn-glass'}"
            onclick={() => navigate(item.path)}
          >
            <Icon size={17} />
            <span>{item.label}</span>
          </button>
        </li>
      {/each}
    </ul>
  </div>

  <div class="navbar-end gap-2">
    <button
      class="btn btn-sm rounded-full icon-btn-glass theme-toggle-pill"
      onclick={() => theme.toggleTheme()}
      title={isDarkTheme ? "切换到明亮主题" : "切换到暗色主题"}
    >
      <span class="text-base leading-none">
        {isDarkTheme ? "☀" : "☾"}
      </span>
      <span class="hidden sm:inline">
        {isDarkTheme ? "明亮" : "暗色"}
      </span>
    </button>

    {#if $neteaseUser}
      <button
        class="btn btn-ghost btn-circle avatar glass-hover"
        onclick={() => navigate("/user")}
        title="用户信息"
      >
        <div class="w-9 rounded-full ring ring-primary/40 ring-offset-base-100 ring-offset-1 overflow-hidden">
          {#if $neteaseUser.avatarUrl}
            <img src={$neteaseUser.avatarUrl} alt="头像" />
          {:else}
            <div class="bg-primary text-primary-content flex items-center justify-center w-full h-full">
              <User size={18} />
            </div>
          {/if}
        </div>
      </button>
    {:else}
      <button
        class="btn btn-sm gap-2 rounded-full icon-btn-glass"
        onclick={() => navigate("/login")}
      >
        <Cloud size={17} />
        <span>登录</span>
      </button>
    {/if}
  </div>
</div>