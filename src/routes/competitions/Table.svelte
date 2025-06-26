<!-- Table of competitions with a certain status -->

<script>
  import { extractMarkdownLink, makeRegText } from "./comp_table_helpers.js"
  import Events from "./Events.svelte";

 const { comps } = $props();
</script>

<table>
  <tbody>
    {#each comps as comp, i}
      <tr>
        <td>
          <div class="container {comp.status}">

            <div class="col col-a">
              <a href={comp.url} target="_blank">
                <p class="comp-name">{comp.name}</p>
              </a>
              <Events events={comp.event_ids}></Events>
            </div>

            <div class="col col-b">
              <p class="city-name">{comp.city}</p>
              <a href="https://www.google.com/maps?q={comp.latitude_degrees},{comp.longitude_degrees}" target="_blank">
                <i>
                  <h4 class="venue-name">{extractMarkdownLink(comp.venue)}</h4>
                </i>
              </a>
            </div>
            <div class="col col-c">
              <p class="comp-date">{comp.date_range.split(",")[0]}</p>
                <a href="{comp.website}/register" target="_blank">
                  <i>
                    <h4 class="reg-text {comp.reg_status}">{makeRegText(comp)}</h4>
                  </i>
                </a>
            </div>

            {#if ["current", "soon"].includes(comp.status)}
              <div class="actions">
                <button class="action" onclick={() => 
                window.open(`https://live.worldcubeassociation.org/link/competitions/${comp.id}`,'_blank')}>
                  <h4>LIVE RESULTS</h4>
                </button>
                <button class="action" onclick={() => 
                window.open(`https://www.competitiongroups.com/competitions/${comp.id}`,'_blank')}>
                  <h4>GROUPS</h4>
                </button>
                <button class="action" onclick={() => 
                window.open(`https://www.worldcubeassociation.org/competitions/${comp.id}#competition-schedule`,'_blank')}>
                  <h4>SCHEDULE</h4>
                </button>
              </div>
            {/if}
          </div>
        </td>
      </tr>
    {/each}
  </tbody>
</table>

<style>
  table {
    border-collapse: collapse;
    table-layout: fixed;
    width: 70%;
    max-width: 1600px;
    margin-bottom: 24px;
  }
  td{
    border: 1px solid var(--colorBlack1);
    padding: 0;
  }
  /* Alternating background colors */
  tbody tr:nth-child(even) {
    background-color: var(--colorCompTable2);
  }
  tbody tr:nth-child(odd) {
    background-color: var(--colorCompTable1);
  }

  /* container in td containing all the cols */
  .container{
    display: flex;
    flex-wrap: wrap;
  }
  .col{
    padding: 8px;
    flex-wrap: wrap;
  }
  .col-a{
    flex: 0.4;
  }
  .col-b, .col-c{
    flex: 0.3;
  }
  .actions {
    flex: 1 1 100%;
    display: flex;
    flex-direction: row;
    gap: 8px;
    padding: 2px 8px 8px 8px;
  }

  .comp-name, .venue-name, .reg-text {
    text-decoration: underline;
  }
  .venue-name {
    color: var(--colorGrey1);
  }
  .reg-text, .venue-name {
    font-weight: 100;
  }
  .comp-name, .venue-name, .city-name, .comp-date, .reg-text{
    width: fit-content;
  }
  p {
    padding-bottom: 4px;
  }

  /* Comp status classes for the colors */
  .soon {
    border-left: 3px solid orange;
  }
  .upcoming {
    border-left: 3px solid var(--colorGreen1);
  }
  .current {
    border-left: 3px solid var(--colorBlue2);
  }
  .recent {
    border-left: 3px solid var(--colorRed1);
  }

  .open, .future {
    color: var(--colorGreen1);
  }
  .closed, .full, .ots {
    color: orange;
  }
  .recent .reg-text{
    color: var(--colorRed1);
  }

  /* the action buttons */
  .action{
    all: unset;
    background-color: var(--colorBlack1);
    color: var(--colorGrey1);
    font-family: "Spartan MB", sans-serif;
    border-radius: 3px;
    padding: 4px 8px;
    cursor: pointer;
    display: inline-block;
  }
  .action h4{
    display: inline-block;
    font-weight: 100;
  }

 
 @media screen and (max-width: 768px){
  table{ 
    width: 100%;
  }
 }
</style>
