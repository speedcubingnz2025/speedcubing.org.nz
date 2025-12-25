<!-- The JS scraper is in src/tasks/update_kinch.js -->
<!-- This svelte table handles rendering -->
<script>
  import kinchData from "$lib/data/kinch.json";

  const events = [
    "333","222","444","555","666","777", "333bf","333fm", "333oh", "clock","minx","pyram","skewb","sq1", "444bf", "555bf", "333mbf"
  ];

  // Generate <i> element HTML for event icons
  function eventToIcon(eventCode) {
    return `<i class="cubing-icon event-${eventCode}"></i>`;
  }
</script>

<h1>COUNTRY RANKINGS</h1>

<p class="kinch-yapping">
  Countries are ranked with a system called "Kinch Ranks", where every National Record is given a score based on how it compares to the World Record in that event, and those scores are averaged to give an overalls score for a country.
</p>

<div class="table-wrapper">
  <table>
    <thead>
      <tr>
        <th>Rank</th>
        <th>Country</th>
        <th>Overall</th>
        {#each events as e}
          <th>{@html eventToIcon(e)}</th>
        {/each}
      </tr>
    </thead>
    <tbody>
      {#each kinchData as c}
        <tr class={c.country.toLowerCase() === "new zealand" ? "highlight-nz" : ""}>
          <td>{c.rank}</td>

          <!-- FLAG + COUNTRY NAME: now unbreakable -->
          <td>
            <span class="country-cell">
              <img
                src={c.flag}
                alt={c.country}
                width="24"
                height="24"
                style="vertical-align:middle; margin-right:6px;"
              >
              {c.country}
            </span>
          </td>

          <td>{c.overall.toFixed(2)}</td>

          {#each events as e}
            <td>{c.scores[e].toFixed(2)}</td>
          {/each}
        </tr>
      {/each}
    </tbody>
  </table>
</div>

<br>

<p class="kinch-yapping">
  More rows can be found <a href="https://jackmaddigan.github.io/kinch/" target="_blank">here</a>.
</p>

<style>
  .kinch-yapping {
    margin: 40px auto 0 auto;
    margin-top: 0px;
    text-align: center;
    max-width: 1200px;
    padding: 0 20px;
    box-sizing: border-box;
  }

  .table-wrapper {
    padding: 0 40px;
    margin-top: 20px;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    background: #1c1c1c;
    box-shadow: 0 2px 8px rgba(0,0,0,0.3);
  }

  th, td { 
    border:1px solid #333; 
    padding:6px 8px; 
    text-align:center; 
    font-size:13px; 
    color:#fff; 
  }

  th { 
    background-color:#46b04c; 
    color:white; 
    position:sticky; 
    top:0; 
  }

  tr:nth-child(even){ 
    background:#262626; 
  }

  td:first-child, th:first-child { 
    text-align:right; 
  }

  td:nth-child(2), th:nth-child(2) { 
    text-align:left; 
  }

  img { 
    vertical-align: middle; 
  }

  tr.highlight-nz { 
    background:#333 !important; 
    font-weight:bold; 
  }

  th:nth-child(-n+3), td:nth-child(-n+3) { 
    font-weight: bold; 
  }

  /* Prevent flag + country name from breaking */
  .country-cell {
    white-space: nowrap;
    display: inline-flex;
    align-items: center;
  }

  /* -------------------------- */
  /*   MOBILE PADDING OVERRIDE  */
  /* -------------------------- */
  @media (max-width: 600px) {
    .table-wrapper {
      padding: 0 10px;
    }

    th, td {
      padding: 4px 6px;
      font-size: 12px;
    }
  }
</style>
