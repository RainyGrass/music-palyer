<!-- src/lib/pages/Collection.svelte -->
<script>
  import { open } from "@tauri-apps/plugin-dialog";
  import { readDir } from "@tauri-apps/plugin-fs";
  import { convertFileSrc } from "@tauri-apps/api/core";
  import {
    playlist,
    playTrack,
    currentSong,
    isPlaying,
    restoreState,
  } from "../stores/playerStore.js";

  const AUDIO_EXTS = [".mp3", ".wav", ".flac", ".ogg", ".m4a", ".aac", ".wma"];

  let songs = [];
  let selectedFolder = "";
  let scanning = false;
  let searchQuery = "";

  /**
   * 路径规范化：把 Windows 反斜杠全部换成正斜杠
   * 避免 D:\xxx/xxx 这种混合路径导致 Tauri asset 协议 500
   */
  function normalizePath(path) {
    return path.replace(/\\/g, "/").replace(/\/+$/, "");
  }

  async function scanDirectoryRecursive(dirPath) {
    const entries = await readDir(dirPath);
    let audioFiles = [];

    for (const entry of entries) {
      const normalizedDir = normalizePath(dirPath);
      const entryPath = normalizedDir + "/" + entry.name;

      if (entry.isDirectory) {
        const subFiles = await scanDirectoryRecursive(entryPath);
        audioFiles = audioFiles.concat(subFiles);
      } else if (entry.isFile) {
        const name = entry.name.toLowerCase();
        if (AUDIO_EXTS.some((ext) => name.endsWith(ext))) {
          const rawName = entry.name.replace(/\.[^/.]+$/, "");
          const parts = rawName.split(" - ");

          audioFiles.push({
            title: parts.length > 1 ? parts[1].trim() : rawName,
            artist: parts.length > 1 ? parts[0].trim() : "未知艺术家",
            filename: entry.name,
            url: convertFileSrc(entryPath),
            cover: null,
            lyrics: null,
          });
        }
      }
    }
    return audioFiles;
  }

  async function scanFolder() {
    try {
      const folder = await open({
        directory: true,
        multiple: false,
        title: "选择音乐文件夹",
      });
      if (!folder) return;

      selectedFolder = folder;
      scanning = true;
      songs = [];

      const allFiles = await scanDirectoryRecursive(folder);
      songs = allFiles;
      playlist.set(songs);
      scanning = false;

      localStorage.setItem("lastFolder", folder);
      localStorage.setItem("savedPlaylist", JSON.stringify(songs));
    } catch (err) {
      console.error("扫描文件夹失败:", err);
      scanning = false;
    }
  }

  function restoreLastScan() {
    const folder = localStorage.getItem("lastFolder");
    const raw = localStorage.getItem("savedPlaylist");
    if (raw) {
      try {
        songs = JSON.parse(raw);
        playlist.set(songs);
        selectedFolder = folder || "已恢复的列表";
      } catch (e) {
        console.error("恢复失败", e);
      }
    }
  }

  restoreState();
  restoreLastScan();

  function playSongById(song) {
    const realIndex = songs.findIndex((s) => s.url === song.url);
    if (realIndex !== -1) {
      playlist.set(songs);
      playTrack(realIndex);
    }
  }

  $: filteredSongs = searchQuery.trim()
    ? songs.filter(
        (s) =>
          s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          s.artist.toLowerCase().includes(searchQuery.toLowerCase()) ||
          s.filename.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : songs;
</script>

<div class="p-6 pb-32">
  <div class="flex items-center justify-between mb-6 flex-wrap gap-3">
    <h1 class="text-2xl font-bold">❤️ 我的收藏</h1>
    <button class="btn btn-primary" onclick={scanFolder} disabled={scanning}>
      {#if scanning}
        <span class="loading loading-spinner loading-sm"></span>
        扫描中...
      {:else}
        📂 选择文件夹
      {/if}
    </button>
  </div>

  {#if selectedFolder}
    <div class="alert alert-info mb-4 flex justify-between items-center flex-wrap gap-2">
      <span class="truncate">📁 {selectedFolder}</span>
      <span class="badge badge-neutral">{songs.length} 首歌曲</span>
    </div>
  {/if}

  {#if songs.length > 0}
    <div class="mb-4">
      <input
        type="text"
        placeholder="🔍 搜索歌曲、艺术家、文件名..."
        class="input input-bordered w-full max-w-md"
        bind:value={searchQuery}
      />
    </div>
  {/if}

  {#if songs.length === 0 && !scanning}
    <div class="flex flex-col items-center justify-center py-20 text-base-content/50">
      <div class="text-6xl mb-4">📂</div>
      <p class="text-lg">点击上方按钮选择音乐文件夹</p>
      <p class="text-sm mt-2">支持格式：{AUDIO_EXTS.join(", ")}</p>
      <p class="text-sm mt-1 text-base-content/40">文件名格式建议：「艺术家 - 歌曲名.mp3」</p>
      <p class="text-xs mt-4 text-base-content/30">支持递归扫描子文件夹</p>
    </div>
  {/if}

  {#if filteredSongs.length === 0 && songs.length > 0}
    <div class="text-center py-10 text-base-content/50">
      <p class="text-lg">😕 没有找到匹配的歌曲</p>
      <button class="btn btn-ghost btn-sm mt-2" onclick={() => (searchQuery = "")}>清除搜索</button>
    </div>
  {/if}

  {#if filteredSongs.length > 0}
    <div class="overflow-x-auto">
      <table class="table table-zebra w-full">
        <thead>
          <tr>
            <th class="w-12">#</th>
            <th>歌曲名</th>
            <th>艺术家</th>
            <th>文件名</th>
            <th class="w-20">操作</th>
          </tr>
        </thead>
        <tbody>
          {#each filteredSongs as song, i}
            <tr
              class="hover cursor-pointer {$currentSong?.url === song.url ? 'bg-primary/10' : ''}"
              ondblclick={() => playSongById(song)}
            >
              <td>
                {#if $currentSong?.url === song.url && $isPlaying}
                  <span class="text-primary">▶</span>
                {:else}
                  {i + 1}
                {/if}
              </td>
              <td class="font-medium">{song.title}</td>
              <td class="text-base-content/70">{song.artist}</td>
              <td class="text-xs text-base-content/50 max-w-xs truncate">{song.filename}</td>
              <td>
                <button class="btn btn-ghost btn-xs" onclick={() => playSongById(song)}>
                  ▶ 播放
                </button>
              </td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  {/if}
</div>