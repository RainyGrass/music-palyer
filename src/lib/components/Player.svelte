<!-- src/lib/components/Player.svelte -->
<script>
  import { tick } from "svelte";
  import {
    Music,
    SkipBack,
    SkipForward,
    Play,
    Pause,
    Repeat,
    Repeat1,
    Shuffle,
    Volume2,
    X,
  } from "lucide-svelte";

  import {
    currentSong,
    isPlaying,
    isTrackLoading,
    playbackError,
    volume,
    playbackRate,
    currentTime,
    duration,
    playMode,
    lyricOffset,
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
  let lyricsContainer;
  let lastScrolledLyricIndex = -1;

  const modeLabels = {
    all: "列表循环",
    loop: "单曲循环",
    random: "随机播放",
  };

  $: currentLyricIndex = (() => {
    if (!$currentSong?.lyrics || $currentSong.lyrics.length === 0) return -1;

    const time = $currentTime + $lyricOffset;
    let idx = 0;

    for (let i = 0; i < $currentSong.lyrics.length; i++) {
      if ($currentSong.lyrics[i].time <= time) {
        idx = i;
      } else {
        break;
      }
    }

    return idx;
  })();

  async function scrollToCurrentLyric(force = false) {
    if (!showLyrics) return;
    if (!lyricsContainer) return;
    if (currentLyricIndex < 0) return;

    if (!force && currentLyricIndex === lastScrolledLyricIndex) return;

    lastScrolledLyricIndex = currentLyricIndex;

    await tick();

    const activeLine = lyricsContainer.querySelector(
      `[data-lyric-index="${currentLyricIndex}"]`
    );

    if (!activeLine) return;

    activeLine.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    });
  }

  async function openLyrics() {
    showLyrics = true;
    lastScrolledLyricIndex = -1;

    await tick();
    scrollToCurrentLyric(true);
  }

  $: if (showLyrics && lyricsContainer && currentLyricIndex >= 0) {
    scrollToCurrentLyric();
  }

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

  function handleOffset(e) {
    lyricOffset.set(parseFloat(e.target.value));
  }

  function seekToLyric(time) {
    seekTo(Math.max(0, time - $lyricOffset));
    scrollToCurrentLyric(true);
  }
</script>

<!-- 底部固定播放器 -->
<div class="fixed bottom-0 left-0 right-0 z-50 glass-panel border-t border-base-content/10">
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
        class="w-12 h-12 rounded-xl overflow-hidden cursor-pointer flex-shrink-0 glass-card flex items-center justify-center hover:scale-105 transition-transform"
        onclick={openLyrics}
        title="点击查看歌词"
      >
        {#if $currentSong?.cover}
          <img src={$currentSong.cover} alt="封面" class="w-full h-full object-cover" />
        {:else}
          <Music size={26} class="text-primary/80" />
        {/if}
      </div>

      <div class="min-w-0">
        <p class="text-sm font-semibold truncate">
          {$currentSong?.title || "未选择歌曲"}
        </p>
        <p class="text-xs text-base-content/60 truncate">
          {#if $playbackError}
            <span class="text-error">{$playbackError}</span>
          {:else if $isTrackLoading}
            <span class="text-primary">正在获取播放地址...</span>
          {:else}
            {$currentSong?.artist || "未知艺术家"}
          {/if}
        </p>
      </div>
    </div>

    <!-- 中间：播放控制 -->
    <div class="flex items-center gap-2">
      <button
        class="btn btn-ghost btn-sm btn-circle icon-btn-glass"
        onclick={prevTrack}
        disabled={$isTrackLoading}
        title="上一首"
      >
        <SkipBack size={18} />
      </button>

      <button
        class="btn btn-ghost btn-xs btn-circle icon-btn-glass"
        onclick={togglePlayMode}
        title={modeLabels[$playMode]}
      >
        {#if $playMode === "all"}
          <Repeat size={15} />
        {:else if $playMode === "loop"}
          <Repeat1 size={15} />
        {:else}
          <Shuffle size={15} />
        {/if}
      </button>

      <button
        class="btn btn-primary btn-sm btn-circle shadow-lg shadow-primary/30"
        onclick={togglePlay}
        disabled={$isTrackLoading}
        title={$isPlaying ? "暂停" : "播放"}
      >
        {#if $isTrackLoading}
          <span class="loading loading-spinner loading-xs"></span>
        {:else if $isPlaying}
          <Pause size={18} fill="currentColor" />
        {:else}
          <Play size={18} fill="currentColor" />
        {/if}
      </button>

      <button
        class="btn btn-ghost btn-sm btn-circle icon-btn-glass"
        onclick={nextTrack}
        disabled={$isTrackLoading}
        title="下一首"
      >
        <SkipForward size={18} />
      </button>
    </div>

    <!-- 右侧：倍速 + 音量 -->
    <div class="flex items-center gap-3 w-1/4 justify-end">
      <select
        class="select select-bordered select-xs w-20 bg-base-100/60"
        value={$playbackRate}
        onchange={handleRate}
      >
        {#each rateOptions as rate}
          <option value={rate}>{rate}x</option>
        {/each}
      </select>

      <div class="flex items-center gap-1">
        <Volume2 size={17} class="text-base-content/70" />
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

<!-- 歌词沉浸式弹窗 -->
{#if showLyrics}
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div
    class="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
    onclick={() => (showLyrics = false)}
  >
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div
      class="relative glass-panel soft-gradient-bg rounded-3xl shadow-2xl w-full max-w-6xl h-[85vh] overflow-hidden flex flex-col md:flex-row"
      onclick={(e) => e.stopPropagation()}
    >
      <!-- 关闭按钮 -->
      <button
        class="btn btn-ghost btn-circle btn-sm absolute top-4 right-4 z-20 icon-btn-glass"
        onclick={() => (showLyrics = false)}
        title="关闭"
      >
        <X size={18} />
      </button>

      <!-- 左侧：封面 + 歌曲信息 -->
      <div
        class="md:w-[38%] w-full md:h-full h-auto p-6 md:p-8 flex flex-col items-center justify-center border-r border-base-content/10"
      >
        <div
          class="w-44 h-44 md:w-72 md:h-72 rounded-3xl overflow-hidden glass-card shadow-2xl flex items-center justify-center mb-6"
        >
          {#if $currentSong?.cover}
            <img
              src={$currentSong.cover}
              alt="封面"
              class="w-full h-full object-cover"
            />
          {:else}
            <Music size={88} class="text-primary/70 icon-primary-glow" />
          {/if}
        </div>

        <div class="text-center max-w-full">
          <h2 class="text-2xl md:text-3xl font-bold truncate max-w-sm mx-auto">
            {$currentSong?.title || "未选择歌曲"}
          </h2>

          <p class="text-base md:text-lg text-base-content/60 mt-2 truncate max-w-sm mx-auto">
            {$currentSong?.artist || "未知艺术家"}
          </p>

          {#if $currentSong?.album}
            <p class="text-sm text-base-content/40 mt-1 truncate max-w-sm mx-auto">
              {$currentSong.album}
            </p>
          {/if}
        </div>

        <div class="mt-6 w-full max-w-sm">
          <div class="flex justify-between text-xs text-base-content/50 mb-1">
            <span>{formatTime($currentTime)}</span>
            <span>{formatTime($duration)}</span>
          </div>

          <input
            type="range"
            min="0"
            max={$duration || 0}
            step="0.1"
            value={$currentTime}
            oninput={handleSeek}
            class="range range-primary range-xs w-full"
          />
        </div>

        {#if $currentSong?.lyrics && $currentSong.lyrics.length > 0}
          <div class="mt-6 w-full max-w-sm">
            <div class="flex items-center justify-between mb-2">
              <span class="text-xs text-base-content/50">歌词延迟</span>
              <span class="text-xs text-primary">
                {$lyricOffset > 0 ? "+" : ""}{$lyricOffset.toFixed(1)}s
              </span>
            </div>

            <div class="flex items-center gap-3">
              <span class="text-xs text-base-content/50">-</span>
              <input
                type="range"
                min="-5"
                max="5"
                step="0.1"
                value={$lyricOffset}
                oninput={handleOffset}
                class="range range-primary range-xs flex-1"
              />
              <span class="text-xs text-base-content/50">+</span>
            </div>

            <p class="text-xs text-base-content/40 text-center mt-2">
              点击歌词行可跳转播放位置
            </p>
          </div>
        {/if}
      </div>

      <!-- 右侧：歌词区域 -->
      <div class="md:w-[62%] flex-1 min-h-0 flex flex-col bg-base-100/30">
        <div class="px-6 md:px-10 pt-8 pb-4 border-b border-base-content/10 flex-shrink-0">
          <h3 class="text-xl md:text-2xl font-bold">歌词</h3>
          <p class="text-sm text-base-content/50 mt-1">
            {$currentSong?.title || "未选择歌曲"}
          </p>
        </div>

        <div
          bind:this={lyricsContainer}
          class="flex-1 min-h-0 overflow-y-auto px-6 md:px-12 py-8 scroll-smooth"
        >
          {#if $currentSong?.lyrics && $currentSong.lyrics.length > 0}
            <div class="space-y-5 md:space-y-6 pb-32">
              {#each $currentSong.lyrics as line, i (line.time)}
                <!-- svelte-ignore a11y_click_events_have_key_events -->
                <!-- svelte-ignore a11y_no_static_element_interactions -->
                <p
                  data-lyric-index={i}
                  class="text-center whitespace-pre-line cursor-pointer rounded-2xl px-4 py-2 transition-all duration-300 leading-relaxed hover:bg-base-200/50
                  {i === currentLyricIndex
                    ? 'text-primary font-bold text-2xl md:text-3xl scale-105 bg-primary/10 shadow-sm'
                    : i === currentLyricIndex - 1 || i === currentLyricIndex + 1
                      ? 'text-base-content/70 text-lg md:text-xl'
                      : 'text-base-content/35 text-base md:text-lg'}"
                  onclick={() => seekToLyric(line.time)}
                  title="点击跳转到此句"
                >
                  {line.text}
                </p>
              {/each}
            </div>
          {:else}
            <div class="h-full flex flex-col items-center justify-center text-center text-base-content/40">
              <Music size={64} class="mb-4 text-primary/40" />

              {#if $currentSong?.source === "netease"}
                <p class="text-lg">暂无歌词</p>
                <p class="text-sm mt-2">
                  可能是纯音乐、接口未返回，或歌词暂不可用
                </p>
              {:else}
                <p class="text-lg">暂无歌词</p>
                <p class="text-sm mt-2">
                  本地歌曲需要同名 .lrc 文件
                </p>
              {/if}
            </div>
          {/if}
        </div>
      </div>
    </div>
  </div>
{/if}