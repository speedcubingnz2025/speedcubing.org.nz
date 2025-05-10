<script>
  import { slide } from 'svelte/transition';
  let {title, children, isBottom=false} = $props();
  let expanded = $state(false);
</script>

<div class="container" class:bottom={isBottom}>
  <button onclick={() => expanded =! expanded}>
    <div class="label">
      <h3>{@html title}</h3>
      <p>{expanded ? "-" : "+"}</p>
    </div>
  </button>
    {#if expanded}
      <div class="content" transition:slide={{duration: 150}}>
        {@render children()}
      </div>
    {/if}
</div>

<style>
  button {
    all: unset;
    cursor: pointer;
    width: 100%;
    text-align: left;
  }
  .container{
    border-top: 1px solid var(--colorGrey2);
    padding: 8px;
  }
  .bottom{
    border-bottom: 1px solid var(--colorGrey2);
  }
  .label{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    user-select: none;
  }
  .content{
    color: var(--colorGrey1);
    padding: 8px 0px;
  }
</style>