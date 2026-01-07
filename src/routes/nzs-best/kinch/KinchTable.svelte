<script>
  import ContentColumn from '$lib/components/ContentColumn.svelte';
  import kinchData from '$lib/data/kinch.json';

  const events = [
    '333',
    '222',
    '444',
    '555',
    '666',
    '777',
    '333bf',
    '333fm',
    '333oh',
    'clock',
    'minx',
    'pyram',
    'skewb',
    'sq1',
    '444bf',
    '555bf',
    '333mbf',
  ];

  // Generate <i> element HTML for event icons
  function eventToIcon(eventCode) {
    return `<i class="cubing-icon event-${eventCode}"></i>`;
  }
</script>

<h1>COUNTRY RANKINGS</h1>

<ContentColumn>
  <p class="kinch-text">
    Countries are ranked with a system called "Kinch Ranks", where every
    National Record is given a score based on how it compares to the World
    Record in that event, and those scores are averaged to give an overalls
    score for a country.
  </p>
</ContentColumn>

<div class="table-wrapper">
  <table>
    <thead>
      <tr>
        <th class="col-1">Rank</th>
        <th class="col-2">Country</th>
        <th class="under">Overall</th>
        {#each events as e}
          <th class="under">{@html eventToIcon(e)}</th>
        {/each}
      </tr>
    </thead>
    <tbody>
      {#each kinchData as c}
        <tr
          class={c.country.toLowerCase() === 'new zealand'
            ? 'highlight-nz'
            : ''}
        >
          <td class="col-1">{c.rank}</td>
          <td class="col-2">
            <span class="country-cell">
              <img src={c.flag} alt={c.country} width="24" height="24" />
              {c.country}
            </span>
          </td>

          <td class="overall">{c.overall.toFixed(2)}</td>

          {#each events as e}
            <td>{c.scores[e].toFixed(2)}</td>
          {/each}
        </tr>
      {/each}
    </tbody>
  </table>
</div>

<br />

<p class="kinch-text">
  More rows can be found <a
    href="https://jackmaddigan.github.io/kinch/"
    target="_blank">here</a
  >.
</p>

<style>
  .kinch-text {
    text-align: center;
  }

  .table-wrapper {
    margin: 16px 32px;
    max-width: 100%;
    overflow-x: auto;
    max-height: calc(100svh - 150px);
    -webkit-overflow-scrolling: touch;
  }

  table {
    width: 100%;
    border-spacing: 0;
    border-collapse: separate;
  }

  th,
  td {
    padding: 6px 8px;
    border-right: 1px solid var(--colorBlack1);
    border-bottom: 1px solid var(--colorBlack1);
    text-align: center;
    color: #fff;
    box-sizing: border-box;
  }

  th {
    background-color: #46b04c;
    position: sticky;
    top: 0;
  }

  tbody tr:nth-child(even) td {
    background: var(--colorCompTable2);
  }

  tbody tr:nth-child(odd) td {
    background: var(--colorCompTable1);
  }

  td:first-child,
  th:first-child {
    text-align: right;
  }

  /* Make overall score and header bold */
  .overall {
    font-weight: bold;
  }

  tr.highlight-nz {
    background: #333 !important;
    font-weight: bold;
  }

  /* Prevent flag + country name from breaking */
  .country-cell {
    white-space: nowrap;
    display: inline-flex;
    align-items: center;
    gap: 8px;
  }

  .col-1 {
    position: sticky;
    left: 0;
    min-width: 3em;
    max-width: 3em;
    border-left: 1px solid var(--colorBlack1);
  }

  .col-2 {
    position: sticky;
    text-align: left;
    left: 3em;
  }

  thead th {
    border-top: 1px solid var(--colorBlack1);
  }

  tbody .col-1,
  tbody .col-2 {
    z-index: 30;
  }

  thead .col-1,
  thead .col-2 {
    z-index: 40;
  }

  thead .under {
    z-index: 20;
  }

  @media screen and (max-width: 769px) {
    .table-wrapper {
      margin: 16px;
    }
  }
</style>
