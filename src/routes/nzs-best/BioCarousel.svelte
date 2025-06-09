<script>
  import { onMount } from "svelte";

  import "bootstrap-icons/font/bootstrap-icons.css";
  import items from "$lib/data/nzs_best_data.json";
  import Card from "./Card.svelte";

  let n = 0;
  $: offset = `translateX(calc(-${n} * 35% + 15%))`;
  let slides;
  let carousel;

  onMount(() => {
    carousel.style.height = `${window.innerHeight*0.8}px`;
  })

  function move(amount){
    const atEndGoForward = n == items.length - 1 && amount == 1;
    const atStartGoBack = n == 0 && amount == -1;
    if(atEndGoForward || atStartGoBack){return;}
    n += amount;
  }
</script>

<section>
  <div class="carousel" bind:this={carousel}>
    <div class="slides" style="transform: {offset}">
      {#each items as person, i}
        <Card {person} shrink={n!=i}></Card>
      {/each}
    </div>
   
  </div>
  {#if n !== 0}
    <button on:click={() => move(-1)} class="left" aria-label="left">
      <i class="bi bi-chevron-left"></i>
    </button>
  {/if}
  {#if n !== items.length - 1}
    <button on:click={() => move(1)} class="right" aria-label="right">
      <i class="bi bi-chevron-right"></i>
    </button>
  {/if}
  
  
  
</section>

<style>
  section {
    background-color: var(--colorBlack2);
    position: relative; 
    padding: 24px 0px;
  }
  
  .carousel{
    width: 100%;
    max-height: 80vh;
    overflow: hidden;
    touch-action: manipulation;
  }

  .slides {
    display: flex;
    flex-direction: row;
    position: relative;
    height: 100%;
    width: 100%;
    align-items: center;
    transition: transform 0.5s ease;
  }

  button {
    position: absolute;
    background-color: transparent;
    border: none;
    color: #fff;
    font-size: 32px;
    top: 50%;
    touch-action: manipulation;
    cursor: pointer;
  }

  .left {
    left: 0;
  }

  .right {
    right: 0;
  }
</style>