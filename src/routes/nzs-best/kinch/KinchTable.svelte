<script>
  export let kinchData = { headers: [], rows: [] };
  export let error = "";
</script>

<h2>COUNTRY RANKINGS</h2>
<p class="kinch-yapping">Countries are ranked using a system called "Kinch Ranks", where every National Record is given a score based on how it compares to the World Record in that event, and those scores are averaged to give an overall score for that country.</p>

<br>

{#if error}
  <p>Error fetching Kinch ranks: {error}</p>
{:else if kinchData.rows.length === 0}
  <p>Loading Kinch rankings…</p>
{:else}
  <div class="table-wrapper">
    <table>
      <thead>
        <tr>
          {#each kinchData.headers as h}
            <th>{@html h}</th>
          {/each}
        </tr>
      </thead>
      <tbody>
        {#each kinchData.rows as row}
          <tr class={row.class}>
            {#each row.data as cell}
              <td>{@html cell}</td>
            {/each}
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
{/if}

<style>
.kinch-yapping {
  color: #fff;
  text-align: center;
  margin: -10px auto 10px; /* top, horizontal center, bottom */
  padding: 0 3%;            /* space on smaller screens */
  max-width: 800px;          /* prevents text from being too wide */
}

.kinch-yapping p {
  margin: 0; /* remove default paragraph margin */
}


  .table-wrapper {
    overflow-x: auto; /* horizontal scrolling */
    -webkit-overflow-scrolling: touch;
    padding: 0 3%;
    margin: 0 auto;
    max-width: 100%;
  }

  table {
    border-collapse: collapse;
    width: max-content; /* table expands horizontally as needed */
    min-width: 100%;    /* always at least full container width */
    background: #1c1c1c;
    color: #fff;
    table-layout: auto;
  }

  th, td {
    border: 1px solid #333;
    padding: 6px 12px; /* give a little more room for numbers/text */
    text-align: center;
    font-size: 13px;
    white-space: nowrap; /* prevents text from wrapping vertically */
  }

  thead th {
    background-color: #46b04c;
    color: #fff;
  }

  td:first-child, th:first-child { text-align: right; }
  td:nth-child(2), th:nth-child(2) { text-align: left; }

  tr.highlight-nz { background: #333; font-weight: bold; }
  p { color: #aaa; font-style: italic; }

  /* Cubing icons sizing */
  .cubing-icon {
    font-size: 30px;
    line-height: 1;
    vertical-align: middle;
  }
</style>
