<script>
  import { slide, fade } from "svelte/transition";
  import { events } from "./events_resources_data.js";
  let active = $state(-1);
</script>

<section>
  <div class="line"></div>
  {#each events as {id, component: Component, title}, i}
    <div class="item">
      <button type="button" class="dropdown-title-btn" onclick={() => active = active === i ? -1 : i}>
        <h3 class="title"><span class='cubing-icon event-{id}'></span>{@html title}</h3>
        <h3>{active === i ? "-" : "+"}</h3>
      </button>
      {#if active === i}
        <div class="outer" transition:slide={{duration: 200}}>
          <div class="inner">
            <Component></Component>
          </div>
        </div>
      {/if}
    </div>
    <div class="line"></div>
  {/each}
</section>

<style>
  section{
    padding: 32px 0px;
  }
  .inner {
    padding: 8px 0px 24px 0px;
  }
  .dropdown-title-btn {
    all: unset;
    cursor: pointer;
    box-sizing: border-box;
    touch-action: manipulation;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    padding: 12px 0px;
  }
  .title {
    font-weight: 400;
  }
  .cubing-icon {
    padding-right: 12px;
  }
  .line {
    height: 1px;
    background-color: var(--colorGrey2);
    width: 100%;
  }
</style>