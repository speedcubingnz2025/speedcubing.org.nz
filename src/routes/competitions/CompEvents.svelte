<!--
  This component is the row of event icons for a particular competition in one of the tables
-->

<script>
  import { eventOrder } from "$lib/comp_table_helpers";
  const { events } = $props(); 
</script>

<span class="event-icons">
  <p>
    {#each events.sort((a, b) => eventOrder.indexOf(a) - eventOrder.indexOf(b)) as event}
      <span class="cubing-icon event-{event}"></span>
    {/each}
  </p>
</span>

<style>
  .cubing-icon {
    font-size: clamp(0.7rem, 0.9vw, 0.9rem);
    color: var(--colorGrey1);
    padding: 2px;
  }

  .event-icons{
    padding: 4px 0px;
  }

  @media screen and (max-width: 768px){
    .cubing-icon {
      font-size: clamp(0.7rem, 0.9vw, 0.9rem);
      color: var(--colorGrey1);
    }
  }
</style>