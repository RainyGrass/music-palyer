<!-- src/lib/components/Player.svelte -->
<script>
  import {
    currentSong,
    isPlaying,
    volume,
    playbackRate,
    currentTime,
    duration,
    playMode,
    togglePlay,
    nextTrack,
    prevTrack,
    setVolume,
    setPlaybackRate,
    seekTo,
    togglePlayMode,
  } from "../stores/playerStore.js";

  const rateOptions = [0.5, 0.75, 1, 1.25, 1.5, 2];
  let showLyrics = false;

  const modeLabels = {
    all: "列表循环",
    loop: "单曲循环",
    random: "随机播放",
  };

  function formatTime(seconds) {
    if (isNaN(seconds) || seconds < 0) return "00:00";
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  }

  function handleSeek(e) {
    seekTo(parseFloat(e.target.value));
  }

  function handleVolume(e) {
    setVolume(parseFloat(e.target.value));
  }

  function handleRate(e) {
    setPlaybackRate(parseFloat(e.target.value));
  }
</script>

<!-- 底部固定播放器 -->
<div class="fixed bottom-0 left-0 right-0 z-50 bg-base-300 border-t border-base-content/10 shadow-lg">
  <!-- 进度条 -->
  <div class="w-full px-4 pt-2">
    <input
      type="range"
      min="0"
      max={$duration || 0}
      step="0.1"
      value={$currentTime}
      oninput={handleSeek}
      class="range range-primary range-xs w-full"
    />
    <div class="flex justify-between text-xs text-base-content/60 mt-0.5">
      <span>{formatTime($currentTime)}</span>
      <span>{formatTime($duration)}</span>
    </div>
  </div>

  <!-- 主体 -->
  <div class="flex items-center justify-between px-4 pb-3 pt-1">
    <!-- 左侧：封面 + 信息 -->
    <div class="flex items-center gap-3 w-1/4 min-w-0">
      <!-- svelte-ignore a11y_click_events_have_key_events -->
      <!-- svelte-ignore a11y_no_static_element_interactions -->
      <div
        class="w-12 h-12 rounded-lg overflow-hidden cursor-pointer flex-shrink-0 bg-base-100 flex items-center justify-center hover:scale-105 transition-transform"
        onclick={() => (showLyrics = true)}
        title="点击查看歌词"
      >
        {#if $currentSong?.cover}
          <img src={$currentSong.cover} alt="封面" class="w-full h-full object-cover" />
        {:else}
          <span class="text-2xl">🎵</span>
        {/if}
      </div>
      <div class="min-w-0">
        <p class="text-sm font-semibold truncate">
          {$currentSong?.title || "未选择歌曲"}
        </p>
        <p class="text-xs text-base-content/60 truncate">
          {$currentSong?.artist || "未知艺术家"}
        </p>
      </div>
    </div>

    <!-- 中间：播放控制 -->
    <div class="flex items-center gap-2">
      <button class="btn btn-ghost btn-sm btn-circle" onclick={prevTrack} title="上一首">
        ⏮
      </button>

      <button
        class="btn btn-ghost btn-xs btn-circle"
        onclick={togglePlayMode}
        title={modeLabels[$playMode]}
      >
        {#if $playMode === "all"}🔁
        {:else if $playMode === "loop"}🔂
        {:else}🔀{/if}
      </button>

      <button
        class="btn btn-primary btn-sm btn-circle"
        onclick={togglePlay}
        title={$isPlaying ? "暂停" : "播放"}
      >
        {$isPlaying ? "⏸" : "▶"}
      </button>

      <button class="btn btn-ghost btn-sm btn-circle" onclick={nextTrack} title="下一首">
        ⏭
      </button>
    </div>

    <!-- 右侧：倍速 + 音量 -->
    <div class="flex items-center gap-3 w-1/4 justify-end">
      <select
        class="select select-bordered select-xs w-20"
        value={$playbackRate}
        onchange={handleRate}
      >
        {#each rateOptions as rate}
          <option value={rate}>{rate}x</option>
        {/each}
      </select>

      <div class="flex items-center gap-1">
        <span class="text-sm">🔊</span>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={$volume}
          oninput={handleVolume}
          class="range range-xs w-20"
        />
      </div>
    </div>
  </div>
</div>

<!-- 歌词弹窗 -->
{#if showLyrics}
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div
    class="fixed inset-0 z-[100] bg-black/70 flex items-center justify-center"
    onclick={() => (showLyrics = false)}
  >
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div
      class="bg-base-100 rounded-2xl p-8 max-w-lg w-full mx-4 max-h-[80vh] overflow-y-auto"
      onclick={(e) => e.stopPropagation()}
    >
      <div class="flex justify-center mb-6">
        <div class="w-48 h-48 rounded-xl overflow-hidden bg-base-200 flex items-center justify-center">
          {#if $currentSong?.cover}
            <img src={$currentSong.cover} alt="封面" class="w-full h-full object-cover" />
          {:else}
            <span class="text-6xl">🎵</span>
          {/if}
        </div>
      </div>

      <h2 class="text-xl font-bold text-center">
        {$currentSong?.title || "未选择歌曲"}
      </h2>
      <p class="text-center text-base-content/60 mb-4">
        {$currentSong?.artist || "未知艺术家"}
      </p>

      <div class="divider">歌词</div>
      <div class="text-center text-base-content/80 whitespace-pre-line leading-8">
        {#if $currentSong?.lyrics}
          {$currentSong.lyrics}
        {:else}
          <p class="text-base-content/40">暂无歌词</p>
        {/if}
      </div>

      <div class="flex justify-center mt-6">
        <button class="btn btn-ghost" onclick={() => (showLyrics = false)}>关闭</button>
      </div>
    </div>
  </div>
{/if}