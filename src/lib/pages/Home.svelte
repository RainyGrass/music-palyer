<script>
    import { navigate } from "../stores/router.js";
  </script>
  
  <div class="hero min-h-[calc(100vh-64px-120px)]">
    <div class="hero-content text-center">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold">🎶 Music Player</h1>
        <p class="py-6 text-base-content/70">
          一款基于 Tauri 2 + Svelte 5 构建的本地音乐播放器。
          <br />支持本地文件扫描、音频可视化等功能。
        </p>
        <div class="flex gap-3 justify-center flex-wrap">
          <button class="btn btn-primary" onclick={() => navigate("/collection")}>
            ❤️ 我的收藏
          </button>
          <button class="btn btn-secondary" onclick={() => navigate("/visualizer")}>
            🎵 音频可视化
          </button>
          <button class="btn btn-accent" onclick={() => navigate("/data-manage")}>
            📁 数据管理
          </button>
        </div>
      </div>
    </div>
  </div>