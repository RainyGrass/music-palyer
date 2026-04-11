<!-- src/lib/pages/Collection.svelte -->
<script>
  import { open } from "@tauri-apps/plugin-dialog";
  import { readDir, readFile, exists } from "@tauri-apps/plugin-fs";
  import {
    playlist,
    currentIndex,
    isPlaying,
    playOrPauseCurrent,
  } from "../stores/playerStore.js";
  import { readAudioMetadata } from "../utils/metadata.js";

  const AUDIO_EXTS = [".mp3", ".wav", ".flac", ".ogg", ".m4a", ".aac", ".wma"];
  const IMAGE_EXTS = [".jpg", ".jpeg", ".png", ".webp", ".bmp"];

  let songs = [];
  let selectedFolder = "";
  let scanning = false;
  let scanProgress = { current: 0, total: 0 };

  function normalizePath(path) {
    return path.replace(/\\/g, "/");
  }

  /**
   * 查找同名封面图片
   * 例如：歌曲A.flac → 查找 歌曲A.jpg / 歌曲A.png / ...
   */
  async function findCoverImage(dirPath, filenameWithoutExt, allFiles) {
    for (const ext of IMAGE_EXTS) {
      const coverName = filenameWithoutExt + ext;
      // 在当前目录的文件列表中查找
      const found = allFiles.find(
        (f) => f.name && f.name.toLowerCase() === coverName.toLowerCase()
      );
      if (found) {
        const coverPath = normalizePath(dirPath + "/" + found.name);
        try {
          const imgData = await readFile(coverPath);
          const mimeType = ext === ".png" ? "image/png"
            : ext === ".webp" ? "image/webp"
            : ext === ".bmp" ? "image/bmp"
            : "image/jpeg";
          const blob = new Blob([imgData], { type: mimeType });
          return URL.createObjectURL(blob);
        } catch (err) {
          console.warn("读取封面失败:", coverPath, err);
        }
      }
    }
    return null;
  }

  /**
   * 递归扫描文件夹，同时收集每个目录的文件列表
   */
  async function scanFolderRecursive(dirPath) {
    const audioFiles = [];

    try {
      const entries = await readDir(dirPath);

      for (const entry of entries) {
        const fullPath = normalizePath(dirPath + "/" + entry.name);

        if (entry.isDirectory) {
          const subFiles = await scanFolderRecursive(fullPath);
          audioFiles.push(...subFiles);
        } else if (entry.isFile) {
          const name = entry.name.toLowerCase();
          if (AUDIO_EXTS.some((ext) => name.endsWith(ext))) {
            audioFiles.push({
              filename: entry.name,
              dirPath: normalizePath(dirPath),
              relativePath: fullPath.replace(normalizePath(selectedFolder), "").replace(/^\//, ""),
              filePath: fullPath,
              // 把当前目录的所有文件传过去，用于查找封面
              dirEntries: entries,
            });
          }
        }
      }
    } catch (err) {
      console.error("读取目录失败:", dirPath, err);
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

      selectedFolder = normalizePath(folder);
      scanning = true;
      songs = [];

      const audioFiles = await scanFolderRecursive(selectedFolder);
      const total = audioFiles.length;

      for (let i = 0; i < audioFiles.length; i++) {
        scanProgress = { current: i + 1, total };

        const file = audioFiles[i];

        // 文件名（不含扩展名）
        const rawName = file.filename.replace(/\.[^/.]+$/, "");

        // 1. 优先查找同名封面图片
        const localCover = await findCoverImage(file.dirPath, rawName, file.dirEntries);

        // 2. 如果没有本地封面，再尝试从音频元数据中读取
        let metadata = { title: null, artist: null, album: null, year: null, genre: null, cover: null };
        if (!localCover) {
          metadata = await readAudioMetadata(file.filePath);
        }

        const parts = rawName.split(" - ");

        songs.push({
          title: metadata.title || (parts.length > 1 ? parts[1].trim() : rawName),
          artist: metadata.artist || (parts.length > 1 ? parts[0].trim() : "未知艺术家"),
          album: metadata.album || null,
          year: metadata.year || null,
          genre: metadata.genre || null,
          // 优先用本地封面，其次用元数据封面
          cover: localCover || metadata.cover,
          filename: file.filename,
          relativePath: file.relativePath,
          filePath: file.filePath,
        });
      }

      songs = songs;
      playlist.set(songs);
      scanning = false;
      scanProgress = { current: 0, total: 0 };
    } catch (err) {
      console.error("扫描文件夹失败:", err);
      scanning = false;
      scanProgress = { current: 0, total: 0 };
    }
  }

  function playSong(index) {
    playlist.set(songs);
    playOrPauseCurrent(index);
  }
</script>

<div class="p-6 pb-32">
  <div class="flex items-center justify-between mb-6">
    <h1 class="text-2xl font-bold">❤️ 我的收藏</h1>
    <button class="btn btn-primary" onclick={scanFolder} disabled={scanning}>
      {#if scanning}
        <span class="loading loading-spinner loading-sm"></span>
        扫描中 {scanProgress.current}/{scanProgress.total}...
      {:else}
        📂 选择文件夹
      {/if}
    </button>
  </div>

  {#if selectedFolder}
    <div class="alert alert-info mb-4">
      <span>📁 当前文件夹：{selectedFolder}</span>
      <span class="badge badge-neutral">{songs.length} 首歌曲</span>
    </div>
  {/if}

  {#if songs.length === 0 && !scanning}
    <div class="flex flex-col items-center justify-center py-20 text-base-content/50">
      <div class="text-6xl mb-4">📂</div>
      <p class="text-lg">点击上方按钮选择音乐文件夹</p>
      <p class="text-sm mt-2">支持格式：{AUDIO_EXTS.join(", ")}</p>
      <p class="text-sm mt-1 text-base-content/40">
        自动读取同名封面图片和音频元数据
      </p>
    </div>
  {/if}

  {#if songs.length > 0}
    <div class="overflow-x-auto">
      <table class="table w-full">
        <thead>
          <tr>
            <th class="w-12">#</th>
            <th class="w-12">封面</th>
            <th>歌曲名</th>
            <th>艺术家</th>
            <th>专辑</th>
            <th class="w-20">操作</th>
          </tr>
        </thead>
        <tbody>
          {#each songs as song, i}
            <tr
              class="hover cursor-pointer {$currentIndex === i ? 'bg-primary/10' : ''}"
              ondblclick={() => playSong(i)}
            >
              <td>
                {#if $currentIndex === i && $isPlaying}
                  <span class="text-primary animate-pulse">▶</span>
                {:else if $currentIndex === i}
                  <span class="text-primary">⏸</span>
                {:else}
                  {i + 1}
                {/if}
              </td>
              <td>
                <div class="w-10 h-10 rounded bg-base-300 flex items-center justify-center overflow-hidden">
                  {#if song.cover}
                    <img src={song.cover} alt="封面" class="w-full h-full object-cover" />
                  {:else}
                    <span class="text-lg">🎵</span>
                  {/if}
                </div>
              </td>
              <td class="font-medium">{song.title}</td>
              <td class="text-base-content/70">{song.artist}</td>
              <td class="text-base-content/60 text-sm">{song.album || "-"}</td>
              <td>
                <button
                  class="btn btn-ghost btn-sm"
                  onclick={() => playSong(i)}
                >
                  {#if $currentIndex === i && $isPlaying}
                    ⏸ 暂停
                  {:else}
                    ▶ 播放
                  {/if}
                </button>
              </td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  {/if}
</div>