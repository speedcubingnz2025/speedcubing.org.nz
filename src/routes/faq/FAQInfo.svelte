<script>
  import { slide, fade } from "svelte/transition";
  import { questions } from "./faq_questions_data.js";
  let active = $state(-1);
</script>

<section>
  <div class="expandable-line"></div>
  {#each questions as {component: Component, title}, i}
    <div>
      <button type="button" class="expandable-title_btn" onclick={() => active = active === i ? -1 : i}>
        <h3 class="expandable-title">{title}</h3>
        <h3>{active === i ? "-" : "+"}</h3>
      </button>
      {#if active === i}
        <div transition:slide={{duration: 200}}>
          <div class="expandable-inner">
            <Component></Component>
          </div>
        </div>
      {/if}
    </div>
    <div class="expandable-line"></div>
  {/each}
</section>

<style>
  section{
    padding: 32px 0px;
  }
  .expandable-inner {
    padding: 8px 0px 24px 0px;
  }
  .expandable-title_btn {
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
  .expandable-title {
    font-weight: 400;
  }
  .expandable-line {
    height: 1px;
    background-color: var(--colorGrey2);
    width: 100%;
  }
</style>