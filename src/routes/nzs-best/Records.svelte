<script>
  import "bootstrap-icons/font/bootstrap-icons.css";
  import ContentColumn from "$lib/components/ContentColumn.svelte";
  import records from "$lib/data/records.json";
  import RecordTableRow from "./RecordTableRow.svelte";
  import {eventOrder, eventNames} from "$lib/helpers.js";
  const events = Object.entries(records).sort((a, b) => eventOrder.indexOf(a[0]) - eventOrder.indexOf(b[0]))
</script>

<ContentColumn>
  <h2>NATIONAL RECORDS</h2>
  <section class="container">
    {#each events as [eventId, data], i}
      <span class="title">
        <i class="cubing-icon event-{eventId} icon"></i>
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