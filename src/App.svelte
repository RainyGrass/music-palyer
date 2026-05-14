<!-- src/App.svelte -->
<script>
  import { currentRoute } from "./lib/stores/router.js";
  import Navbar from "./lib/components/Navbar.svelte";
  import Player from "./lib/components/Player.svelte";

  import Home from "./lib/pages/Home.svelte";
  import Collection from "./lib/pages/Collection.svelte";
  import Visualizer from "./lib/pages/Visualizer.svelte";
  import DataManage from "./lib/pages/DataManage.svelte";
  import Login from "./lib/pages/Login.svelte";
  import UserProfile from "./lib/pages/UserProfile.svelte";
</script>

<div class="min-h-screen bg-base-100 flex flex-col" data-theme="dark">
  <Navbar />

  <main class="flex-1 overflow-y-auto pb-28">
    {#if $currentRoute === "/"}
      <Home />
    {:else if $currentRoute === "/collection"}
      <Collection />
    {:else if $currentRoute === "/visualizer"}
      <Visualizer />
    {:else if $currentRoute === "/data-manage"}
      <DataManage />
    {:else if $currentRoute === "/login"}
      <Login />
    {:else if $currentRoute === "/user"}
      <UserProfile />
    {/if}
  </main>

  <Player />
</div>