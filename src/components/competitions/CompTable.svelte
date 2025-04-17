<script>
  import { dateToShort, formatRegText } from "$lib/load_competitions";
  import ButtonSpan from "./ButtonSpan.svelte";
  import RegSpan from "./RegSpan.svelte";
  const eventOrder = [
    "333",
    "222",
    "444",
    "555",
    "666",
    "777",
    "333bf",
    "333fm",
    "333oh",
    "clock",
    "minx",
    "pyram",
    "skewb",
    "sq1",
    "444bf",
    "555bf",
    "333mbf",
  ];
  let { tableType, comps } = $props();
</script>

<table>
  <thead class={tableType}>
    <tr>
      <th>Date</th>
      <th>Competition</th>
      <th>Location</th>
    </tr>
  </thead>
  <tbody>
    {#each comps as comp}
      <tr>
        <td>
          <span class="compDate">
            {dateToShort(comp.date.from)}{comp.date.from === comp.date.till
              ? ""
              : `-${dateToShort(comp.date.till)}`}
          </span>
        </td>
        <td>
          <a
            href="https://www.worldcubeassociation.org/competitions/{comp.id}"
            target="blank"
            class="compName"
            >{comp.name}
          </a>
          <span class="eventIconsRow">
            {#each comp.events.sort((a, b) => eventOrder.indexOf(a) - eventOrder.indexOf(b)) as event}
              <span class="cubing-icon event-{event}"></span>
            {/each}
          </span>
          {#if tableType === "green"}
            <RegSpan {comp}></RegSpan>
          {/if}
          {#if tableType === "blue"}
            <ButtonSpan compId={comp.id} groups={true} liveResults={true}
            ></ButtonSpan>
          {/if}
        </td>
        <td>
          <a
            href="https://www.google.com/maps?q={comp.venue.coordinates
              .latitude},{comp.venue.coordinates.longitude}"
            class="venueName"
          >
            {comp.venue.name}
          </a>
          <br />
          <span class="cityName"><i>{comp.city}</i></span>
        </td>
      </tr>
    {/each}
  </tbody>
</table>

<style>
  table {
    border-collapse: collapse;
    width: 100%;
    margin-bottom: 32px;
  }
  th {
    padding: 10px;
    text-align: left;
    font-weight: bold;
    border: 1px solid #3a3a3a;
  }
  td {
    padding: 10px;
    text-align: left;
    border: 1px solid #3a3a3a;
  }
  td,
  tr {
    font-family: "Public Sans", serif;
  }
  .green {
    background-color: #4caf50;
  }
  .red {
    background-color: #d95c4f;
  }
  .blue {
    background-color: #384aa7;
  }
  tbody tr {
    background-color: #1e1e1f;
  }
  tbody tr:nth-child(even) {
    background-color: #272728;
  }
  .cityName {
    font-weight: 200;
    font-size: 0.8em;
    color: #c5c5c5;
  }
  .venueName,
  .compName,
  .compDate {
    font-weight: 400;
    text-decoration: none;
    color: #c5c5c5;
  }
  .cubing-icon {
    padding: 2px;
  }
  .eventIconsRow {
    display: flex;
    flex-wrap: wrap;
    margin: 8px 0px;
  }
</style>
