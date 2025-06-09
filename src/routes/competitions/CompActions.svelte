<!-- 
  This component is the row of buttons that appears for a comp in a table once 
  registration has closed and/or the competition is current
-->

<script>
  const { comp } = $props();
</script>

<span class="comp-actions">
  <a href="https://live.worldcubeassociation.org/link/competitions/{comp.id}" target="_blank"><p>LIVE RESULTS</p></a>
  <a href="https://www.competitiongroups.com/competitions/{comp.id}" target="_blank"><p>GROUPS</p></a>
</span>

<style>
  .comp-actions a{
    text-decoration: none;
    padding: 4px 8px;
    background-color: var(--colorBlack1);
    color: #fff;
    display: inline-block;
  }
</style>