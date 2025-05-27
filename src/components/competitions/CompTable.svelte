<script>
  import { eventOrder, dateToShort, getRegDate } from "$lib/comp_table_helpers";
  import ActionRow from "./ActionRow.svelte";
  import EventIconsRow  from "./EventIconsRow.svelte"
  let { type, comps } = $props();
  for(let i=0; i<comps.length; i++){
    comps[i].regText = type === "upcoming" ? getRegDate(comps[i]) : "recent" ? "Competition has finished" : null;
    comps[i].regClosed = comps[i].regText === "Registration is closed";
  }
 
  let width = $state(window.innerWidth);

  const updateWidth = () => {
    width = window.innerWidth;
  };

  // Listen to window resize
  window.addEventListener('resize', updateWidth);

  // Clean up when component is destroyed
  import { onDestroy } from 'svelte';
  onDestroy(() => {
    window.removeEventListener('resize', updateWidth);
  });
</script>

<table>
  <tbody>
    {#each comps as comp}
      <tr>
        <td 
          class:red={type==="recent"} 
          class:orange={comp.regClosed} 
          class:green={!comp.regClosed && type==="upcoming"}
          class:blue={type==="current"}
        >
          <!-- Comp name and events -->
          <div class="col1">
            <!-- Comp name -->
            <a 
              href="https://www.worldcubeassociation.org/competitions/{comp.id}"
              target="blank"
              class="comp_name"
            >
              {comp.name}
            </a>

            <!-- Event icons and action row if desktop only (else they go in row below)-->
            {#if (width > 768)}
              <EventIconsRow events={comp.events}></EventIconsRow>
              {#if (comp.regClosed)}
                  <ActionRow {comp}></ActionRow>
              {/if}
            {/if}
          </div>
          <!-- End comp name and events -->

          <!-- City and venue -->
          <div class="col2">
            <span class="city_name">{comp.city}</span>
            <a
              href="https://www.google.com/maps?q={comp.venue.coordinates
                .latitude},{comp.venue.coordinates.longitude}"
              target="_blank"
              class="venue_name"
            >
              <i>{comp.venue.name}</i>
            </a>
          </div>
          <!-- End city and venue -->

          <!-- Date and reg -->
          <div class="col3">
            <span class="comp_date">
              {dateToShort(comp.date.from)}{comp.date.from === comp.date.till
              ? ""
              : `-${dateToShort(comp.date.till)}`}
            </span>
            {#if type !== "current"}
              <a href={comp.externalWebsite || `https://www.worldcubeassociation.org/competitions/${comp.id}/register`}
                target="_blank" class="reg_date">
                <i>{comp.regText}</i>
              </a>
            {/if}
          </div>
          <!-- End date and reg -->

          <!-- Events list and action row for mobile -->
          {#if (width <= 768)}
            <div class="col4">
              <EventIconsRow events={comp.events}></EventIconsRow>
            </div>
            {#if comp.regClosed}
              <div class="col4">
                <ActionRow {comp}></ActionRow>
              </div>
            {/if}
          {/if}
          <!-- End events list and action row for mobile -->
        </td>
      </tr>
    {/each}
  </tbody>
</table>

<style>
  table{
    width: 100%;
    table-layout: fixed;
    max-width: 900px;
    border-collapse: collapse;
  }
  td{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  tr{
    border: 1px solid var(--colorBlack1);
  }
  tbody tr {
    background-color: var(--colorCompTable1);
  }
  tbody tr:nth-child(even) {
    background-color: var(--colorCompTable2);
  }
  .col1, .col2, .col3, .col4 {
    display: flex;
    flex-direction: column;
    padding: 4px 8px;
    box-sizing: border-box;
    justify-content: center;
  }
  .col1 {
    width: 40%;
  }
  .col2, .col3 {
    width: 30%;
  }
  .col4{
    width: 100%;
  }
  .comp_name, .city_name, .comp_date{
    font-size: clamp(1rem, 1.2vw, 1.3rem);
    color: white;
  }
  .venue_name, .reg_date {
    font-size: clamp(0.7rem, 0.9vw, 0.9rem);
  }
  .venue_name{
    color: var(--colorGrey1);
  }

  /* RED */
  .red .reg_date{
    color: var(--colorRed1);
  }
  .red{
    border-left: 2px solid var(--colorRed1);
  }

  /* ORANGE */
  .orange .reg_date{
    color: orange;
  }
  .orange{
    border-left: 2px solid orange;
  }

  /* GREEN */
  .green .reg_date{
    color: var(--colorGreen1);
  }
  .green{
    border-left: 2px solid  var(--colorGreen1);
  }

  /* BLUE */
  .blue{
    border-left: 2px solid  var(--colorBlue2);
  }

  @media screen and (max-width: 768px){
    .comp_name, .comp_date{
      font-size: clamp(1rem, 1.2vw, 1.3rem);
      font-weight: 500;
      color: white;
    }

    .city_name{
      font-size: clamp(0.8rem, 1.05vw, 1.1rem);
      color: white;
    }

    .venue_name, .reg_date {
      font-size: clamp(0.7rem, 0.9vw, 0.9rem);
    }
    .venue_name{
      color: var(--colorGrey1);
    }
    .reg_date{
      color: var(--colorGreen1);
    }
  }
</style>