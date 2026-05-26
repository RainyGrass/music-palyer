<!-- src/lib/pages/Home.svelte -->
<script>
  import { onMount } from "svelte";
  import { navigate } from "../stores/router.js";
import {
  neteaseUser,
  neteaseCookie,
  checkLoginStatus,
  likedSongs,
  userPlaylists,
  ncmSearchResults,
  ncmLoading,
  ncmError,
  fetchLikedSongs,
  fetchUserPlaylists,
  searchNcmSongs,
  fetchPlaylistSongs,
  prepareNcmSongForPlay,
} from "../stores/neteaseStore.js";
  import { playlist, playTrack, currentSong, isPlaying } from "../stores/playerStore.js";

  let searchKeyword = "";
let loadingText = "";
let selectedPlaylist = null;
let selectedPlaylistSongs = [];
let localError = "";

const SEARCH_LIMIT = 30;
const PLAYLIST_LIMIT = 50;

let searchOffset = 0;
let searchHasMore = false;
let searchTimer = null;
let searchRequestId = 0;

let playlistOffset = 0;
let playlistHasMore = false;

  onMount(async () => {
    if ($neteaseCookie) {
      const ok = await checkLoginStatus();
      if (ok) {
        await loadHomeData();
      }
    }
  });

  async function loadHomeData() {
    localError = "";
    loadingText = "正在加载网易云数据...";

    try {
      await Promise.all([
        fetchLikedSongs(50),
        fetchUserPlaylists(30),
      ]);
    } catch (e) {
      localError = e.message || "加载失败";
    } finally {
      loadingText = "";
    }
  }

  async function handleSearch() {
  const keyword = searchKeyword.trim();

  if (!keyword) {
    localError = "请输入搜索关键词";
    return;
  }

  const currentRequestId = ++searchRequestId;

  localError = "";
  selectedPlaylist = null;
  selectedPlaylistSongs = [];
  searchOffset = 0;
  searchHasMore = false;

  const songs = await searchNcmSongs(keyword, SEARCH_LIMIT, 0, false);

  // 防止旧请求覆盖新结果
  if (currentRequestId !== searchRequestId) return;

  searchHasMore = songs.length >= SEARCH_LIMIT;
}

function handleSearchInput() {
  clearTimeout(searchTimer);

  searchTimer = setTimeout(() => {
    if (searchKeyword.trim()) {
      handleSearch();
    }
  }, 500);
}

async function loadMoreSearchResults() {
  const keyword = searchKeyword.trim();
  if (!keyword || !searchHasMore || $ncmLoading) return;

  searchOffset += SEARCH_LIMIT;

  const songs = await searchNcmSongs(
    keyword,
    SEARCH_LIMIT,
    searchOffset,
    true
  );

  if (songs.length < SEARCH_LIMIT) {
    searchHasMore = false;
  }
}

async function playNcmSong(song, sourceSongs) {
  if (!song?.id) return;

  localError = "";
  loadingText = "正在获取播放地址...";

  try {
    const targetIndex = sourceSongs.findIndex((s) => s.id === song.id);

    if (targetIndex === -1) {
      throw new Error("没有找到要播放的歌曲");
    }

    const playableSongs = [...sourceSongs];

    // 只获取当前点击歌曲的播放地址
    const preparedSong = await prepareNcmSongForPlay(playableSongs[targetIndex]);
    playableSongs[targetIndex] = preparedSong;

    if (!preparedSong.url) {
      throw new Error("该歌曲暂无可用播放地址，可能是 VIP、版权或地区限制");
    }

    playlist.set(playableSongs);
    playTrack(targetIndex);
  } catch (e) {
    console.error("播放网易云歌曲失败", e);
    localError = e.message || "播放失败";
  } finally {
    loadingText = "";
  }
}

async function openPlaylist(list) {
  if (!list?.id) return;

  selectedPlaylist = list;
  selectedPlaylistSongs = [];
  localError = "";
  playlistOffset = 0;
  playlistHasMore = false;
  loadingText = "正在加载歌单歌曲...";

  try {
    const songs = await fetchPlaylistSongs(list.id, PLAYLIST_LIMIT, 0);
    selectedPlaylistSongs = songs;
    playlistHasMore = songs.length >= PLAYLIST_LIMIT;
  } catch (e) {
    localError = e.message || "加载歌单失败";
  } finally {
    loadingText = "";
  }
}

async function loadMorePlaylistSongs() {
  if (!selectedPlaylist?.id || !playlistHasMore || $ncmLoading) return;

  playlistOffset += PLAYLIST_LIMIT;

  try {
    loadingText = "正在加载更多歌单歌曲...";

    const songs = await fetchPlaylistSongs(
      selectedPlaylist.id,
      PLAYLIST_LIMIT,
      playlistOffset
    );

    const ids = new Set(selectedPlaylistSongs.map((s) => s.id));
    const merged = [...selectedPlaylistSongs];

    for (const song of songs) {
      if (!ids.has(song.id)) {
        merged.push(song);
      }
    }

    selectedPlaylistSongs = merged;

    if (songs.length < PLAYLIST_LIMIT) {
      playlistHasMore = false;
    }
  } catch (e) {
    localError = e.message || "加载更多失败";
  } finally {
    loadingText = "";
  }
}

  function formatCount(count) {
    if (!count && count !== 0) return "0";
    if (count >= 10000) return `${(count / 10000).toFixed(1)}万`;
    return String(count);
  }

  function formatDuration(ms) {
    if (!ms) return "--:--";
    const total = Math.floor(ms / 1000);
    const m = Math.floor(total / 60);
    const s = total % 60;
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  }
</script>

<div class="p-6 pb-32 max-w-7xl mx-auto">
  {#if $neteaseUser}
    <!-- 已登录首页 -->
    <div class="mb-6">
      <div class="card bg-gradient-to-r from-primary/20 via-secondary/10 to-base-200 shadow">
        <div class="card-body">
          <div class="flex items-center justify-between gap-4 flex-wrap">
            <div class="flex items-center gap-4">
              <div class="avatar">
                <div class="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  {#if $neteaseUser.avatarUrl}
                    <img src={$neteaseUser.avatarUrl} alt="头像" />
                  {:else}
                    <div class="bg-primary text-primary-content flex items-center justify-center w-full h-full text-3xl font-bold">
                      {$neteaseUser.nickname?.[0] || "?"}
                    </div>
                  {/if}
                </div>
              </div>

              <div>
                <h1 class="text-3xl font-bold">
                  欢迎回来，{$neteaseUser.nickname}
                </h1>
                <p class="text-base-content/60 mt-1">
                  UID：{$neteaseUser.userId}
                </p>
                {#if $neteaseUser.signature}
                  <p class="text-base-content/50 text-sm mt-1 max-w-xl">
                    {$neteaseUser.signature}
                  </p>
                {/if}
              </div>
            </div>

            <div class="flex gap-2">
              <button class="btn btn-outline btn-sm" onclick={loadHomeData}>
                🔄 刷新
              </button>
              <button class="btn btn-primary btn-sm" onclick={() => navigate("/user")}>
                👤 用户信息
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 搜索区域 -->
    <div class="card bg-base-200 mb-6">
      <div class="card-body">
        <h2 class="card-title">🔍 搜索网易云歌曲</h2>

        <div class="flex gap-2 flex-wrap">
          <input
          class="input input-bordered flex-1 min-w-64"
          placeholder="输入歌曲名、歌手或专辑名..."
          bind:value={searchKeyword}
          oninput={handleSearchInput}
          onkeydown={(e) => {
            if (e.key === "Enter") handleSearch();
          }}
        />

          <button
            class="btn btn-primary"
            onclick={handleSearch}
            disabled={$ncmLoading}
          >
            {#if $ncmLoading}
              <span class="loading loading-spinner loading-sm"></span>
            {/if}
            搜索
          </button>
        </div>
      </div>
    </div>

    <!-- 状态提示 -->
    {#if loadingText}
      <div class="alert alert-info mb-4">
        <span class="loading loading-spinner loading-sm"></span>
        <span>{loadingText}</span>
      </div>
    {/if}

    {#if localError || $ncmError}
      <div class="alert alert-error mb-4">
        <span>{localError || $ncmError}</span>
      </div>
    {/if}

    <!-- 搜索结果 -->
    {#if $ncmSearchResults.length > 0}
      <section class="mb-8">
        <div class="flex items-center justify-between mb-3">
          <h2 class="text-2xl font-bold">🔍 搜索结果</h2>
          <span class="badge badge-neutral">{$ncmSearchResults.length} 首</span>
        </div>

        <div class="overflow-x-auto bg-base-200 rounded-box">
          <table class="table table-zebra">
            <thead>
              <tr>
                <th class="w-12">#</th>
                <th>歌曲</th>
                <th>歌手</th>
                <th>专辑</th>
                <th class="w-24">时长</th>
                <th class="w-24">操作</th>
              </tr>
            </thead>
            <tbody>
              {#each $ncmSearchResults as song, i (song.id)}
                <tr class="hover {$currentSong?.id === song.id ? 'bg-primary/10' : ''}">
                  <td>
                    {#if $currentSong?.id === song.id && $isPlaying}
                      <span class="text-primary">▶</span>
                    {:else}
                      {i + 1}
                    {/if}
                  </td>

                  <td>
                    <div class="flex items-center gap-3">
                      <div class="w-10 h-10 rounded bg-base-300 overflow-hidden flex items-center justify-center">
                        {#if song.cover}
                        <img
                        src={song.cover}
                        alt="封面"
                        loading="lazy"
                        class="w-full h-full object-cover"
                      />
                        {:else}
                          🎵
                        {/if}
                      </div>
                      <span class="font-medium">{song.title}</span>
                    </div>
                  </td>

                  <td class="text-base-content/70">{song.artist}</td>
                  <td class="text-base-content/50">{song.album || "-"}</td>
                  <td class="text-base-content/50">{formatDuration(song.duration)}</td>
                  <td>
                    <button
                      class="btn btn-ghost btn-xs"
                      onclick={() => playNcmSong(song, $ncmSearchResults)}
                    >
                      ▶ 播放
                    </button>
                  </td>
                </tr>
              {/each}
            </tbody>
          </table>
          {#if searchHasMore}
          <div class="p-4 flex justify-center">
            <button
              class="btn btn-outline btn-sm"
              onclick={loadMoreSearchResults}
              disabled={$ncmLoading}
            >
              {#if $ncmLoading}
                <span class="loading loading-spinner loading-sm"></span>
              {/if}
              加载更多搜索结果
            </button>
          </div>
        {/if}
        </div>
      </section>
    {/if}

    <div class="grid grid-cols-1 xl:grid-cols-2 gap-6">
      <!-- 喜欢的歌曲 -->
      <section>
        <div class="flex items-center justify-between mb-3">
          <h2 class="text-2xl font-bold">❤️ 我喜欢的音乐</h2>
          <span class="badge badge-neutral">{$likedSongs.length} 首</span>
        </div>

        <div class="card bg-base-200">
          <div class="card-body p-0">
            {#if $likedSongs.length > 0}
              <div class="overflow-x-auto">
                <table class="table table-zebra">
                  <thead>
                    <tr>
                      <th class="w-12">#</th>
                      <th>歌曲</th>
                      <th>歌手</th>
                      <th class="w-20">操作</th>
                    </tr>
                  </thead>
                  <tbody>
                    {#each $likedSongs as song, i (song.id)}
                      <tr class="hover {$currentSong?.id === song.id ? 'bg-primary/10' : ''}">
                        <td>
                          {#if $currentSong?.id === song.id && $isPlaying}
                            <span class="text-primary">▶</span>
                          {:else}
                            {i + 1}
                          {/if}
                        </td>

                        <td>
                          <div class="flex items-center gap-3">
                            <div class="w-10 h-10 rounded bg-base-300 overflow-hidden flex items-center justify-center">
                              {#if song.cover}
                              <img
                              src={song.cover}
                              alt="封面"
                              loading="lazy"
                              class="w-full h-full object-cover"
                            />
                              {:else}
                                🎵
                              {/if}
                            </div>
                            <div class="min-w-0">
                              <p class="font-medium truncate">{song.title}</p>
                              <p class="text-xs text-base-content/50 truncate">
                                {song.album || "未知专辑"}
                              </p>
                            </div>
                          </div>
                        </td>

                        <td class="text-base-content/70">{song.artist}</td>

                        <td>
                          <button
                            class="btn btn-ghost btn-xs"
                            onclick={() => playNcmSong(song, $likedSongs)}
                          >
                            ▶ 播放
                          </button>
                        </td>
                      </tr>
                    {/each}
                  </tbody>
                </table>
              </div>
            {:else}
              <div class="p-10 text-center text-base-content/50">
                <p class="text-lg">暂无喜欢的歌曲</p>
                <button class="btn btn-ghost btn-sm mt-3" onclick={loadHomeData}>
                  重新加载
                </button>
              </div>
            {/if}
          </div>
        </div>
      </section>

      <!-- 收藏/创建的歌单 -->
      <section>
        <div class="flex items-center justify-between mb-3">
          <h2 class="text-2xl font-bold">📀 我的歌单</h2>
          <span class="badge badge-neutral">{$userPlaylists.length} 个</span>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {#if $userPlaylists.length > 0}
          {#each $userPlaylists as list (list.id)}
              <button
                class="card bg-base-200 hover:bg-base-300 transition text-left"
                onclick={() => openPlaylist(list)}
              >
                <div class="card-body p-4">
                  <div class="flex gap-3">
                    <div class="w-16 h-16 rounded-lg bg-base-300 overflow-hidden flex items-center justify-center flex-shrink-0">
                      {#if list.coverImgUrl}
                      <img
                      src={list.coverImgUrl}
                      alt="歌单封面"
                      loading="lazy"
                      class="w-full h-full object-cover"
                    />
                      {:else}
                        📀
                      {/if}
                    </div>

                    <div class="min-w-0">
                      <h3 class="font-bold truncate">{list.name}</h3>
                      <p class="text-xs text-base-content/50 mt-1">
                        {list.trackCount || 0} 首歌曲
                      </p>
                      <p class="text-xs text-base-content/40 mt-1">
                        播放 {formatCount(list.playCount || 0)}
                      </p>
                    </div>
                  </div>
                </div>
              </button>
            {/each}
          {:else}
            <div class="col-span-full p-10 text-center text-base-content/50 bg-base-200 rounded-box">
              <p class="text-lg">暂无歌单数据</p>
              <button class="btn btn-ghost btn-sm mt-3" onclick={loadHomeData}>
                重新加载
              </button>
            </div>
          {/if}
        </div>
      </section>
    </div>

    <!-- 歌单歌曲弹窗 -->
    {#if selectedPlaylist}
    <div class="fixed inset-0 z-[90] bg-black/60 flex items-center justify-center p-4" onclick={() => (selectedPlaylist = null)}>
      <div
      class="bg-base-100 rounded-2xl max-w-4xl w-full max-h-[85vh] flex flex-col"
      onclick={(e) => e.stopPropagation()}
    >
          <div class="p-5 border-b border-base-content/10 flex justify-between items-center gap-4">
            <div class="flex items-center gap-3 min-w-0">
              <div class="w-14 h-14 rounded-lg overflow-hidden bg-base-300 flex-shrink-0">
                {#if selectedPlaylist.coverImgUrl}
                <img
                src={selectedPlaylist.coverImgUrl}
                alt="歌单封面"
                loading="lazy"
                class="w-full h-full object-cover"
              />
                {/if}
              </div>

              <div class="min-w-0">
                <h2 class="text-xl font-bold truncate">{selectedPlaylist.name}</h2>
                <p class="text-sm text-base-content/50">
                  {selectedPlaylistSongs.length} 首歌曲
                </p>
              </div>
            </div>

            <button class="btn btn-ghost btn-sm" onclick={() => (selectedPlaylist = null)}>
              关闭
            </button>
          </div>

          <div class="overflow-y-auto flex-1">
            {#if selectedPlaylistSongs.length > 0}
              <table class="table table-zebra">
                <thead>
                  <tr>
                    <th class="w-12">#</th>
                    <th>歌曲</th>
                    <th>歌手</th>
                    <th>专辑</th>
                    <th class="w-20">操作</th>
                  </tr>
                </thead>
                <tbody>
                  {#each selectedPlaylistSongs as song, i (song.id)}
                    <tr class="hover {$currentSong?.id === song.id ? 'bg-primary/10' : ''}">
                      <td>
                        {#if $currentSong?.id === song.id && $isPlaying}
                          <span class="text-primary">▶</span>
                        {:else}
                          {i + 1}
                        {/if}
                      </td>
                      <td class="font-medium">{song.title}</td>
                      <td class="text-base-content/70">{song.artist}</td>
                      <td class="text-base-content/50">{song.album || "-"}</td>
                      <td>
                        <button
                          class="btn btn-ghost btn-xs"
                          onclick={() => playNcmSong(song, selectedPlaylistSongs)}
                        >
                          ▶ 播放
                        </button>
                      </td>
                    </tr>
                  {/each}
                </tbody>
              </table>
              {#if playlistHasMore}
              <div class="p-4 flex justify-center">
                <button
                  class="btn btn-outline btn-sm"
                  onclick={loadMorePlaylistSongs}
                  disabled={$ncmLoading}
                >
                  {#if $ncmLoading}
                    <span class="loading loading-spinner loading-sm"></span>
                  {/if}
                  加载更多歌单歌曲
                </button>
              </div>
            {/if}
            {:else}
              <div class="p-10 text-center text-base-content/50">
                正在加载或歌单为空
              </div>
            {/if}
          </div>
        </div>
      </div>
    {/if}
  {:else}
    <!-- 未登录首页 -->
    <div class="hero min-h-[calc(100vh-64px-120px)]">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <h1 class="text-5xl font-bold">🎶 Music Player</h1>
          <p class="py-6 text-base-content/70">
            一款基于 Tauri 2 + Svelte 5 构建的本地音乐播放器。
            <br />
            登录网易云音乐后，可以查看喜欢的歌曲、收藏歌单，并搜索在线音乐。
          </p>

          <div class="flex gap-3 justify-center flex-wrap">
            <button class="btn btn-primary" onclick={() => navigate("/login")}>
              ☁️ 登录网易云
            </button>
            <button class="btn btn-secondary" onclick={() => navigate("/collection")}>
              ❤️ 本地收藏
            </button>
            <button class="btn btn-accent" onclick={() => navigate("/visualizer")}>
              🎵 音频可视化
            </button>
          </div>
        </div>
      </div>
    </div>
  {/if}
</div>