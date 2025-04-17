<script>
  import CompTable from "./CompTable.svelte";
  import { loadCompetitions } from "$lib/load_competitions";
  let { comps } = $props();
  let data = loadCompetitions();
</script>

{#await data}
  <p>Loading...</p>
{:then { current, upcoming, recent }}
  <section class="compSection">
    <section class="current">
      {#if upcoming.length}
        <h1>CURRENT COMPETITIONS</h1>
        <CompTable tableType="blue" comps={upcoming}></CompTable>
      {/if}
    </section>
    <section class="upcoming">
      <h1>UPCOMING COMPETITIONS</h1>
      <CompTable tableType="green" comps={upcoming}></CompTable>
    </section>
    <section class="recent">
      <h1>RECENT COMPETITIONS</h1>
      <CompTable tableType="red" comps={recent}></CompTable>
    </section>
  </section>
{/await}

<style>
  .compSection {
    background-color: #1a1a1b;
    color: white;
  }

  .upcoming,
  .current,
  .recent {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    max-width: 800px;
    margin: auto;
  }
  h1 {
    font-size: 2.2rem;
    font-weight: 500;
  }
</style>
