<!-- src/lib/pages/DataManage.svelte -->
<script>
  import { playlist } from "../stores/playerStore.js";

  /**
   * 清空播放列表
   */
  function clearPlaylist() {
    playlist.set([]);
  }
</script>

<div class="p-6 pb-32">
  <h1 class="text-2xl font-bold mb-6">📁 数据管理</h1>

  <div class="grid gap-4 max-w-2xl">
    <!-- 播放列表信息 -->
    <div class="card bg-base-200">
      <div class="card-body">
        <h2 class="card-title">📋 播放列表</h2>
        <p class="text-base-content/70">
          当前播放列表中有
          <span class="badge badge-primary">{$playlist.length}</span>
          首歌曲
        </p>
        <div class="card-actions justify-end mt-2">
          <button
            class="btn btn-error btn-sm"
            onclick={clearPlaylist}
            disabled={$playlist.length === 0}
          >
            🗑️ 清空列表
          </button>
        </div>
      </div>
    </div>

    <!-- 应用信息 -->
    <div class="card bg-base-200">
      <div class="card-body">
        <h2 class="card-title">ℹ️ 关于</h2>
        <div class="text-sm text-base-content/70 space-y-1">
          <p>🔧 框架：Tauri 2 + Svelte 5</p>
          <p>🎨 UI：TailwindCSS + DaisyUI</p>
          <p>📦 包管理器：Bun</p>
          <p>🏗️ 构建工具：Vite</p>
        </div>
      </div>
    </div>
  </div>
</div>