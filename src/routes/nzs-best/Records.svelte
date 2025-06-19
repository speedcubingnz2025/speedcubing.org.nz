<script>
  import "$lib/css/font-icons.css";
  import "bootstrap-icons/font/bootstrap-icons.css";
  import ContentColumn from "$lib/components/ContentColumn.svelte";
  import records from "$lib/data/records.json";
  import RecordTableRow from "./RecordTableRow.svelte";
   const eventOrder = ["333","222","444","555","666","777","333bf","333fm","333oh",
   "clock","minx","pyram","skewb","sq1","444bf","555bf","333mbf"];
   const eventNames = ["3x3 CUBE", "2x2 CUBE", "4x4 CUBE", "5x5 CUBE", "6x6 CUBE", "7x7 CUBE", 
   "3x3 BLINDFOLDED", "3x3 FEWEST MOVES", "3x3 ONE-HANDED", "CLOCK", "MEGAMINX", "PYRAMINX", "SKEWB", 
   "SQUARE-1", "4x4 BLINDFOLDED", "5x5 BLINDFOLDED", "3x3 MULTI-BLIND"];
  const events = Object.entries(records).sort((a, b) => eventOrder.indexOf(a[0]) - eventOrder.indexOf(b[0]))
</script>

<ContentColumn>
  <h2>NATIONAL RECORDS</h2>
  <section class="container">
    {#each events as [eventId, data], i}
      <span class="title">
        <i class="icon-{eventId} icon"></i>
        <p class="event-name">{eventNames[i]}</p>
      </span>
      <table>
        <thead>
          <tr>
            <th class="col1"></th>
            <th class="col2"></th>
            <th class="col3"></th>
          </tr>
        </thead>
        <tbody>
          {#each data.single as d}
            <RecordTableRow rowData={d} type="Single"></RecordTableRow>
          {/each}
          {#each data.average as d}
            <RecordTableRow rowData={d} type="Average"></RecordTableRow>
          {/each}
        </tbody>
      </table>
    {/each}
  </section>
</ContentColumn>


<style>
  
  table {
    border-collapse: collapse;
    width: 100%;
    margin-bottom: 32px;
  }
  .container {
    display: flex;
    flex-wrap: wrap;
  }
  .icon {
    color: #fff;
  }
  .title {
    display: flex;
    flex-direction: row;
    gap: 4px;
    padding: 2px 0px;
  }
  .event-name {
    font-family: "Spartan MB", sans-serif;
    font-weight: 100;
  }
  .col1, .col3 {
    width: 25%;
  }
  .col2 {
    width: 50%;
  }
</style>