<script>
  import Video from '$lib/components/Video.svelte';
  import live from "$lib/data/live.json";
  const link = live.link.replace(/\/watch\?v=([^&]+)/, '/embed/$1');
</script>

{#if live.isLive}
  <section>
    <h1>{live.title}</h1>
    <Video src={link} title={live.title} />
  </section>
{/if}

<style>
  section {
    background-color: var(--colorBlack3);
  }
  h1 {
    background-color: var(--colorRed1);
  }
</style>