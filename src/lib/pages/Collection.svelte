<!-- src/lib/pages/Collection.svelte -->
<script>
  import { open } from "@tauri-apps/plugin-dialog";
  import { readDir, readTextFile } from "@tauri-apps/plugin-fs";
  import { convertFileSrc } from "@tauri-apps/api/core";
import {
  FolderOpen,
  Search,
  Play,
  Music,
  FileAudio,
  LoaderCircle,
  Image,
  ScrollText,
} from "lucide-svelte";

  import {
    playlist,
    playTrack,
    currentSong,
    isPlaying,
    restoreState,
  } from "../stores/playerStore.js";

  const AUDIO_EXTS = [".mp3", ".wav", ".flac", ".ogg", ".m4a", ".aac", ".wma"];
  const IMAGE_EXTS = [".jpg", ".jpeg", ".png", ".webp", ".bmp", ".gif"];
  const LRC_EXTS = [".lrc"];
  const COVER_NAMES = ["cover", "folder", "front", "album", "art"];

  let songs = [];
  let selectedFolder = "";
  let scanning = false;
  let searchQuery = "";

  function normalizePath(path) {
    return path.replace(/\\/g, "/").replace(/\/+$/, "");
  }

  /**
   * 解析 LRC 歌词文本
   * 支持多时间标签 [00:00.00][00:05.00]歌词
   */
  function parseLrc(lrcText) {
    if (!lrcText) return null;

    const lines = lrcText.split("\n");
    const result = [];
    const timeRegex = /\[(\d{2}):(\d{2})(?:\.(\d{2,3}))?\]/g;

    for (const line of lines) {
      const times = [];
      let match;

      while ((match = timeRegex.exec(line)) !== null) {
        const min = parseInt(match[1], 10);
        const sec = parseInt(match[2], 10);
        const msStr = match[3] || "00";
        const ms = parseInt(msStr.padEnd(3, "0"), 10);

        times.push(min * 60 + sec + ms / 1000);
      }

      if (times.length > 0) {
        const text = line.replace(timeRegex, "").trim();

        if (text) {
          for (const time of times) {
            result.push({ time, text });
          }
        }
      }
    }

    return result.sort((a, b) => a.time - b.time);
  }

  async function scanDirectoryRecursive(dirPath) {
    const entries = await readDir(dirPath);
    let currentDirAudios = [];
    let currentDirImages = [];
    let currentDirLyrics = new Map(); // rawName -> parsed lyrics
    let subDirAudios = [];

    for (const entry of entries) {
      const normalizedDir = normalizePath(dirPath);
      const entryPath = normalizedDir + "/" + entry.name;
      const lowerName = entry.name.toLowerCase();

      if (entry.isDirectory) {
        const sub = await scanDirectoryRecursive(entryPath);
        subDirAudios = subDirAudios.concat(sub);
      } else if (entry.isFile) {
        // 收集音频
        if (AUDIO_EXTS.some((ext) => lowerName.endsWith(ext))) {
          const rawName = entry.name.replace(/\.[^/.]+$/, "");
          const parts = rawName.split(" - ");

          currentDirAudios.push({
            title: parts.length > 1 ? parts[1].trim() : rawName,
            artist: parts.length > 1 ? parts[0].trim() : "未知艺术家",
            filename: entry.name,
            url: convertFileSrc(entryPath),
            cover: null,
            lyrics: null,
            source: "local",
            _rawName: rawName.toLowerCase(),
          });
        }
        // 收集图片
        else if (IMAGE_EXTS.some((ext) => lowerName.endsWith(ext))) {
          currentDirImages.push({
            path: convertFileSrc(entryPath),
            rawName: entry.name.replace(/\.[^/.]+$/, "").toLowerCase(),
          });
        }
        // 收集歌词
        else if (LRC_EXTS.some((ext) => lowerName.endsWith(ext))) {
          try {
            const rawName = entry.name.replace(/\.[^/.]+$/, "").toLowerCase();
            const content = await readTextFile(entryPath);
            const parsed = parseLrc(content);

            if (parsed && parsed.length > 0) {
              currentDirLyrics.set(rawName, parsed);
            }
          } catch (e) {
            console.warn("读取歌词失败:", entry.name, e);
          }
        }
      }
    }

    // 匹配通用封面
    let genericCover = null;

    for (const img of currentDirImages) {
      if (COVER_NAMES.includes(img.rawName)) {
        genericCover = img.path;
        break;
      }
    }

    // 给音频匹配封面和歌词
    for (const song of currentDirAudios) {
      const namedCover = currentDirImages.find((img) => img.rawName === song._rawName);
      song.cover = namedCover ? namedCover.path : genericCover;

      const songLyrics = currentDirLyrics.get(song._rawName);

      if (songLyrics) {
        song.lyrics = songLyrics;
      }

      delete song._rawName;
    }

    return [...currentDirAudios, ...subDirAudios];
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

<div class="p-6 pb-32 min-h-full soft-gradient-bg">
  <div class="max-w-7xl mx-auto">
    <!-- 标题栏 -->
    <div class="flex items-center justify-between mb-6 flex-wrap gap-3">
      <div>
        <h1 class="text-3xl font-bold flex items-center gap-2">
          <FolderOpen size={30} class="text-primary icon-primary-glow" />
          本地音乐
        </h1>
        <p class="text-sm text-base-content/50 mt-2">
          扫描本地文件夹，自动匹配同名封面和 LRC 歌词
        </p>
      </div>

      <button
        class="btn btn-primary gap-2 rounded-full shadow-lg shadow-primary/25"
        onclick={scanFolder}
        disabled={scanning}
      >
        {#if scanning}
          <LoaderCircle size={18} class="animate-spin" />
          扫描中...
        {:else}
          <FolderOpen size={18} />
          选择文件夹
        {/if}
      </button>
    </div>

    <!-- 说明卡片 -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <div class="glass-card rounded-3xl p-4 flex items-center gap-3">
        <div class="w-11 h-11 rounded-2xl glass-card flex items-center justify-center">
          <FileAudio size={22} class="text-primary" />
        </div>
        <div>
          <p class="font-semibold">音频格式</p>
          <p class="text-xs text-base-content/50">{AUDIO_EXTS.join(", ")}</p>
        </div>
      </div>

      <div class="glass-card rounded-3xl p-4 flex items-center gap-3">
        <div class="w-11 h-11 rounded-2xl glass-card flex items-center justify-center">
          <Image size={22} class="text-secondary" />
        </div>
        <div>
          <p class="font-semibold">自动封面</p>
          <p class="text-xs text-base-content/50">同名图片或 cover/folder</p>
        </div>
      </div>

      <div class="glass-card rounded-3xl p-4 flex items-center gap-3">
        <div class="w-11 h-11 rounded-2xl glass-card flex items-center justify-center">
          <ScrollText size={22} class="text-accent" />
        </div>
        <div>
          <p class="font-semibold">歌词匹配</p>
          <p class="text-xs text-base-content/50">同名 .lrc 文件</p>
        </div>
      </div>
    </div>

    {#if selectedFolder}
      <div class="alert glass-card mb-4 flex justify-between items-center flex-wrap gap-2">
        <div class="flex items-center gap-2 min-w-0">
          <FolderOpen size={18} class="text-primary flex-shrink-0" />
          <span class="truncate">{selectedFolder}</span>
        </div>

        <span class="badge badge-primary">{songs.length} 首歌曲</span>
      </div>
    {/if}

    {#if songs.length > 0}
      <div class="mb-4">
        <label class="input input-bordered w-full max-w-md bg-base-100/60 flex items-center gap-2">
          <Search size={18} class="text-base-content/50" />
          <input
            type="text"
            placeholder="搜索歌曲、艺术家、文件名..."
            bind:value={searchQuery}
            class="grow"
          />
        </label>
      </div>
    {/if}

    {#if songs.length === 0 && !scanning}
      <div class="glass-card rounded-3xl flex flex-col items-center justify-center py-20 text-base-content/50">
        <div class="w-20 h-20 rounded-3xl glass-card flex items-center justify-center mb-5">
          <FolderOpen size={42} class="text-primary/70" />
        </div>

        <p class="text-lg font-semibold">还没有扫描本地音乐</p>
        <p class="text-sm mt-2">点击右上角按钮选择音乐文件夹</p>
        <p class="text-sm mt-1 text-base-content/40">
          文件名格式建议：「艺术家 - 歌曲名.mp3」
        </p>
        <p class="text-xs mt-4 text-base-content/30">
          自动匹配同名封面和歌词
        </p>
      </div>
    {/if}

    {#if filteredSongs.length === 0 && songs.length > 0}
      <div class="glass-card rounded-3xl text-center py-10 text-base-content/50">
        <Search size={44} class="mx-auto mb-3 text-base-content/30" />
        <p class="text-lg">没有找到匹配的歌曲</p>

        <button
          class="btn btn-ghost btn-sm rounded-full glass-hover mt-3"
          onclick={() => (searchQuery = "")}
        >
          清除搜索
        </button>
      </div>
    {/if}

    {#if filteredSongs.length > 0}
      <div class="overflow-x-auto glass-card rounded-box">
        <table class="table table-zebra w-full">
          <thead>
            <tr>
              <th class="w-12">#</th>
              <th>歌曲名</th>
              <th>艺术家</th>
              <th>文件名</th>
              <th class="w-24">状态</th>
              <th class="w-20">操作</th>
            </tr>
          </thead>

          <tbody>
            {#each filteredSongs as song, i (song.url)}
              <tr
                class="hover cursor-pointer {$currentSong?.url === song.url ? 'bg-primary/10' : ''}"
                ondblclick={() => playSongById(song)}
              >
                <td>
                  {#if $currentSong?.url === song.url && $isPlaying}
                    <Play size={15} class="text-primary" fill="currentColor" />
                  {:else}
                    {i + 1}
                  {/if}
                </td>

                <td>
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-xl glass-card overflow-hidden flex items-center justify-center">
                      {#if song.cover}
                        <img
                          src={song.cover}
                          alt="封面"
                          loading="lazy"
                          class="w-full h-full object-cover"
                        />
                      {:else}
                        <Music size={20} class="text-primary/60" />
                      {/if}
                    </div>

                    <div class="min-w-0">
                      <p class="font-medium truncate">{song.title}</p>
                      {#if song.lyrics}
                        <p class="text-xs text-accent/70 flex items-center gap-1 mt-0.5">
                          <ScrollText size={12} />
                          已匹配歌词
                        </p>
                      {/if}
                    </div>
                  </div>
                </td>

                <td class="text-base-content/70">{song.artist}</td>

                <td class="text-xs text-base-content/50 max-w-xs truncate">
                  {song.filename}
                </td>

                <td>
                  {#if $currentSong?.url === song.url && $isPlaying}
                    <span class="badge badge-primary badge-sm">播放中</span>
                  {:else}
                    <span class="badge badge-ghost badge-sm">本地</span>
                  {/if}
                </td>

                <td>
                  <button
                    class="btn btn-ghost btn-xs gap-1 rounded-full glass-hover"
                    onclick={() => playSongById(song)}
                  >
                    <Play size={13} fill="currentColor" />
                    播放
                  </button>
                </td>
              </tr>
            {/each}
          </tbody>
        </table>
      </div>
    {/if}
  </div>
</div>