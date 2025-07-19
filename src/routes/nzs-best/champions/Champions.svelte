<script>
  import ContentColumn from "$lib/components/ContentColumn.svelte";
  import {eventOrder, eventNames} from "$lib/helpers.js";
  import champions from "$lib/data/champions.json";
  let currentEvent = $state("333");
</script>
<ContentColumn>
  <h2>NATIONAL CHAMPIONS</h2>
  <p class="blurb">
    Ever since our first competition in 2009, we've held an annual National Championship, where 
    New Zealand's best are crowned for each event. Explore the history of our champions here:
  </p>
  <div class="event-icons">
    {#each eventOrder as eventId}
      <button type="button" aria-label="{eventId} icon" class="icon-button" onclick={() => currentEvent=eventId}>
        <i class="icon-{eventId} icon" class:active={currentEvent === eventId}></i>
      </button>
    {/each}
  </div>
  <h3 class="event-champions-title">{eventNames[eventOrder.indexOf(currentEvent)]} CHAMPIONS</h3>
  <table>
    <thead>
      <tr>
        <th>Year</th>
        <th>Champion</th>
        <th>Result</th>
        <th>Attempts</th>
      </tr>
    </thead>
    <tbody>
      {#each champions.filter(c => c.eventId === currentEvent) as {year, champion, result, detail}}
        <tr>
          <td>{year}</td>
          <td>{champion}</td>
          <td>{result}</td>
          <td><i>{detail}</i></td>
        </tr>
      {/each}
    </tbody>
  </table>
</ContentColumn>

<style>
  .blurb {
    color: var(--colorGrey1);
    text-align: center;
  }
  .event-icons {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 4px;
    padding: 24px 0px;
  }
  .icon-button {
    all: unset;
  }
  .icon {
    color: var(--colorGrey2);
    font-size: clamp(2rem, 2vw, 2.4rem);
    cursor: pointer;
  }
  .active {
    color: #fff;
  }
  .event-champions-title {
    text-align: center;
    padding: 16px 0px;
  }
  table {
    width: 100%;
    border-collapse: collapse;
  }
  th {
    background-color: var(--colorGreen1);
  }
  th, td {
    padding: 8px;
    color: #fff;
    text-align: left;
    border: 1px solid var(--colorBlack1);
    font-size: clamp(1rem, 1.2vw, 1.3rem);
  }
   /* Alternating background colors */
  tbody tr:nth-child(even) {
    background-color: var(--colorCompTable2);
  }
  tbody tr:nth-child(odd) {
    background-color: var(--colorCompTable1);
  }
</style>
