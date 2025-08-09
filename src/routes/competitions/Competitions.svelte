<!-- Component containing all of the tables for competition statuses -->

<script>
  import { status } from "./comp_table_helpers.js"
  import comps from "$lib/data/competitions.json";
  import Table from "./Table.svelte";
  
  const buckets = comps.reduce((acc, cur) => {
    cur.status = status(cur);
    acc[cur.status.whenStatus].push(cur);
    return acc;
  }, {current: [], upcoming: [], recent: []});
  
  buckets.upcoming.reverse();
</script>

<section class="container">
  {#if buckets.current.length}
    <!-- current competitions table -->
    <h2>CURRENT COMPETITIONS</h2>
    <Table comps={buckets.current}></Table>
  {/if}

  {#if buckets.upcoming.length}
    <!-- upcoming competitions table -->
    <h2>UPCOMING COMPETITIONS</h2>
    <Table comps={buckets.upcoming}></Table>
  {/if}

  {#if buckets.recent.length}
    <!-- recent competitions table -->
    <h2>RECENT COMPETITIONS</h2>
    <Table comps={buckets.recent}></Table>
  {/if}
</section>

<style>
  .container{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 24px 0px;
  }
</style>