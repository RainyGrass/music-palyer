<script>
    import { currentRoute, navigate } from "../stores/router.js";
  
    const navItems = [
      { path: "/", label: "🏠 主页" },
      { path: "/collection", label: "❤️ 我的收藏" },
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
  
    <div class="navbar-end"></div>
  </div>