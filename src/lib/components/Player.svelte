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

  const modeLabels = {
    all: "列表循环",
    loop: "单曲循环",
    random: "随机播放",
  };

  /**
   * 计算当前应高亮的歌词行索引
   */
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

  // 当前行变化时自动滚动到视口中央
  $: if (lyricsContainer && currentLyricIndex >= 0) {
    const activeLine = lyricsContainer.children[currentLyricIndex];
    if (activeLine) {
      activeLine.scrollIntoView({ behavior: "smooth", block: "center" });
    }
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

  /**
   * 点击某行歌词，跳转到对应时间
   */
  function seekToLyric(time) {
    seekTo(Math.max(0, time - $lyricOffset));
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
      class="bg-base-100 rounded-2xl p-6 max-w-lg w-full mx-4 max-h-[85vh] flex flex-col"
      onclick={(e) => e.stopPropagation()}
    >
      <!-- 封面大图 -->
      <div class="flex justify-center mb-4 flex-shrink-0">
        <div class="w-40 h-40 rounded-xl overflow-hidden bg-base-200 flex items-center justify-center">
          {#if $currentSong?.cover}
            <img src={$currentSong.cover} alt="封面" class="w-full h-full object-cover" />
          {:else}
            <span class="text-6xl">🎵</span>
          {/if}
        </div>
      </div>

      <!-- 歌曲信息 -->
      <h2 class="text-xl font-bold text-center flex-shrink-0">
        {$currentSong?.title || "未选择歌曲"}
      </h2>
      <p class="text-center text-base-content/60 mb-3 flex-shrink-0">
        {$currentSong?.artist || "未知艺术家"}
      </p>

      <!-- 歌词区域 -->
      <div class="divider my-1 flex-shrink-0">歌词</div>

      <div
        bind:this={lyricsContainer}
        class="flex-1 overflow-y-auto min-h-0 space-y-2 pr-1 my-2"
      >
        {#if $currentSong?.lyrics && $currentSong.lyrics.length > 0}
          {#each $currentSong.lyrics as line, i}
            <!-- svelte-ignore a11y_click_events_have_key_events -->
            <!-- svelte-ignore a11y_no_static_element_interactions -->
            <p
              class="text-center transition-all duration-300 py-1 cursor-pointer rounded-lg hover:bg-base-200 {i === currentLyricIndex ? 'text-primary font-bold scale-105' : 'text-base-content/60'}"
              onclick={() => seekToLyric(line.time)}
              title="点击跳转到此句"
            >
              {line.text}
            </p>
          {/each}
        {:else}
          <p class="text-center text-base-content/40 py-10">暂无歌词</p>
        {/if}
      </div>

      <!-- 延迟调整 -->
      {#if $currentSong?.lyrics && $currentSong.lyrics.length > 0}
        <div class="divider my-1 flex-shrink-0">歌词延迟</div>
        <div class="flex items-center justify-center gap-3 flex-shrink-0 pb-1">
          <span class="text-xs">⏪ 提前</span>
          <input
            type="range"
            min="-5"
            max="5"
            step="0.1"
            value={$lyricOffset}
            oninput={handleOffset}
            class="range range-primary range-xs w-40"
          />
          <span class="text-xs">延后 ⏩</span>
        </div>
        <p class="text-center text-xs text-base-content/50 flex-shrink-0">
          偏移：{$lyricOffset > 0 ? "+" : ""}{$lyricOffset.toFixed(1)}s
          <span class="text-base-content/30 ml-2">（点击歌词行可跳转）</span>
        </p>
      {/if}

      <!-- 关闭按钮 -->
      <div class="flex justify-center mt-3 flex-shrink-0">
        <button class="btn btn-ghost btn-sm" onclick={() => (showLyrics = false)}>
          关闭
        </button>
      </div>
    </div>
  </div>
{/if}