<!-- src/lib/pages/DataManage.svelte -->
<script>
  import { playlist } from "../stores/playerStore.js";

  function clearPlaylist() {
    if (confirm("确定要清空播放列表吗？此操作不可恢复。")) {
      playlist.set([]);
      localStorage.removeItem("savedPlaylist");
      localStorage.removeItem("lastFolder");
    }
  }

  function exportPlaylist() {
    const data = JSON.stringify($playlist, null, 2);
    const blob = new Blob([data], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "playlist.json";
    a.click();
    URL.revokeObjectURL(url);
  }

  function importPlaylist() {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".json";
    input.onchange = async (e) => {
      const file = e.target.files[0];
      if (!file) return;
      try {
        const text = await file.text();
        const data = JSON.parse(text);
        if (Array.isArray(data)) {
          playlist.set(data);
          localStorage.setItem("savedPlaylist", JSON.stringify(data));
          alert(`成功导入 ${data.length} 首歌曲`);
        } else {
          alert("文件格式不正确");
        }
      } catch (err) {
        alert("导入失败：" + err.message);
      }
    };
    input.click();
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
        <div class="card-actions justify-end mt-2 gap-2">
          <button class="btn btn-outline btn-sm" onclick={exportPlaylist}>
            📤 导出 JSON
          </button>
          <button class="btn btn-outline btn-sm" onclick={importPlaylist}>
            📥 导入 JSON
          </button>
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
          <p>💾 持久化：localStorage（自动保存）</p>
        </div>
      </div>
    </div>
  </div>
</div>