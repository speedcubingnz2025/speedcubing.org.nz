<script>
  import ContentColumn from "$lib/components/ContentColumn.svelte";
  import { eventOrder, eventNames } from "$lib/helpers.js";

  import nationalChampions from "$lib/data/champions/champions.json";
  import northIslandChampions from "$lib/data/champions/ni_champions.json";
  import southIslandChampions from "$lib/data/champions/si_champions.json";

  let currentEvent = $state("333");
  let currentChampionship = $state("national");

  const championshipData = {
    national: nationalChampions,
    north: northIslandChampions,
    south: southIslandChampions
  };

  const championshipNames = {
    national: "National",
    north: "North Island",
    south: "South Island"
  };
</script>

<ContentColumn>
  <!-- Static page heading -->
  <h1 class="main-heading">CHAMPIONS</h1>

  <p class="blurb">
    Ever since our first competition in 2009, we've held annual championships, where New Zealand's best are crowned for each event. Explore the history of our champions here:
  </p>

  <br>
  <!-- Championship toggle -->
  <div class="championship-toggle">
    <button class:active={currentChampionship === "national"} onclick={() => currentChampionship = "national"}>
      National
    </button>
    <button class:active={currentChampionship === "north"} onclick={() => currentChampionship = "north"}>
      North Island
    </button>
    <button class:active={currentChampionship === "south"} onclick={() => currentChampionship = "south"}>
      South Island
    </button>
  </div>

  <!-- Event icons -->
  <div class="event-icons">
    {#each eventOrder as eventId}
      <button type="button" aria-label="{eventId} icon" class="icon-button" onclick={() => currentEvent=eventId}>
        <i class="cubing-icon event-{eventId} icon" class:active={currentEvent === eventId}></i>
      </button>
    {/each}
  </div>

  <!-- Dynamic table heading (fully uppercase) -->
  <h2 class="event-heading">
    {eventNames[eventOrder.indexOf(currentEvent)].toUpperCase()} - {championshipNames[currentChampionship].toUpperCase()} CHAMPIONS
  </h2>

  <!-- Event champions table -->
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
      {#each championshipData[currentChampionship].filter(c => c.eventId === currentEvent) as {year, champion, result, detail}}
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
  .main-heading {
    text-align: center;
    margin: 24px 0 12px;
    font-size: 2rem;
    color: #fff;
  }

  .blurb {
    color: var(--colorGrey1);
    text-align: center;
  }

  .championship-toggle {
    display: flex;
    justify-content: center;
    gap: 12px;
    margin: 16px 0 8px;
  }

  .championship-toggle button {
    background-color: #888383; /* inactive gray */
    border: 1px solid #444;
    padding: 8px 16px; /* comfortable height and width */
    min-width: 110px; /* uniform width */
    color: #fff;
    cursor: pointer;
    font-size: 1rem;
    border-radius: 8px; /* rounded corners */
    text-align: center;
  }

  .championship-toggle button.active {
    background-color: #46b04c; /* active green */
    border-color: #46b04c;
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

  .event-heading {
    text-align: center;
    margin: 8px 0; /* closer to table and icons */
    font-size: 1.5rem;
    color: #fff;
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

  tbody tr:nth-child(even) {
    background-color: var(--colorCompTable2);
  }

  tbody tr:nth-child(odd) {
    background-color: var(--colorCompTable1);
  }
</style>
