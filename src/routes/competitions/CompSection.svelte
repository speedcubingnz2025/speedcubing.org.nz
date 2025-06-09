<!-- 
  This component is the section on the page that contains current, upcoming and recent 
  competition tables, and the titles for them
-->

<script>
  import CompTable from "./CompTable.svelte";
  import { loadCompetitions } from "$lib/load_competitions";
  import { onMount } from "svelte";

  let data;

  onMount(async () => {
    data = await loadCompetitions();
  })
</script>

<section id="competitions">
  {#if !data}
    <div class="loading">Loading Competitions...</div>
  {:else}
    <section>
      {#if data.current.length}
      <section class="current">
        <h2>CURRENT COMPETITIONS</h2>
        <CompTable type="current" comps={data.current}></CompTable>
      </section>
      {/if}
      <section class="upcoming">
        <h2 class="title">UPCOMING COMPETITIONS</h2>
        <CompTable type="upcoming" comps={data.upcoming}></CompTable>
      </section>
      <section class="recent">
        <h2 class="title">RECENT COMPETITIONS</h2>
        <CompTable type="recent" comps={data.recent}></CompTable>
      </section>
      <p>
        To see all past competitions, click <a
          class="blueLink"
          href="https://www.worldcubeassociation.org/competitions?region=NZ&state=past"
          target="_blank">here</a
        >.
      </p>
    </section>
  {/if}
</section>

<style>
  .loading {
    height: 500px;
    text-align: center;
    background-color: var(--colorBlack2);
    color: var(--colorWhite);
  }

  section{
    background-color: var(--colorBlack2);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 24px;
  }

  p{
    text-align: center;
  }

</style>
