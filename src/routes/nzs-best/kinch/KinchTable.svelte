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

<h1>KINCH RANKS</h1>

<p class="kinch-yapping">Countries are ranked with a system called "Kinch ranks"</p>

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
          <td>
            <img src={c.flag} alt={c.country} width="24" height="24" style="vertical-align:middle; margin-right:6px;">
            {c.country}
          </td>
          <td>{c.overall}</td>
          {#each events as e}
            <td>{c.scores[e]}</td>
          {/each}
        </tr>
      {/each}
    </tbody>
  </table>
</div>

<br>

<p class="kinch-yapping">More rows can be found <a href="https://wca.cuber.pro/" target="_blank">here</a>.</p>

<style>
  body { 
    font-family: Arial, sans-serif; 
    margin:20px; 
    background:#121212; 
    color:#fff; 
  }

  .kinch-yapping {
    margin-top: 40px;
    text-align: center;

  }

  .table-wrapper {
  padding: 0 40px;          /* desktop side padding */
  margin-top: 20px;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

table {
  width: 100%;              /* fill full available width */
  border-collapse: collapse;
  background: #1c1c1c;
  box-shadow: 0 2px 8px rgba(0,0,0,0.3);
}


  th, td { 
    border:1px solid #333; 
    padding:6px 8px; 
    text-align:center; 
    font-size:13px; 
    color:#fff; }

  th { 
    background-color:#46b04c; 
    color:white; 
    position:sticky; 
    top:0; }

  tr:nth-child(even){ 
    background:#262626; 
  }

  td:first-child, th:first-child{ 
    text-align:right; 
  }

  td:nth-child(2), th:nth-child(2){ 
    text-align:left; 
  }

  img { 
    vertical-align: middle; 
  }

  tr.highlight-nz { 
    background:#333 !important; font-weight:bold; 
  }

  th:nth-child(-n+3), td:nth-child(-n+3) { 
    font-weight: bold; 
  }

  /* Cubing icon styles */
  .cubing-icon {
    display: inline-block;
    width: 32px;
    height: 32px;
    background-size: contain;
    background-repeat: no-repeat;
    vertical-align: middle;
  }
</style>
