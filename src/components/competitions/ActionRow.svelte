<script>
  const { comp } = $props();
</script>

<span class="action_row">
  <a href="https://live.worldcubeassociation.org/link/competitions/{comp.id}" target="_blank"><p>LIVE RESULTS</p></a>
  <a href="https://www.competitiongroups.com/competitions/{comp.id}" target="_blank"><p>GROUPS</p></a>
</span>

<style>
  .action_row a{
    text-decoration: none;
    padding: 4px 8px;
    background-color: var(--colorBlack1);
    color: #fff;
    display: inline-block;
  }
</style>