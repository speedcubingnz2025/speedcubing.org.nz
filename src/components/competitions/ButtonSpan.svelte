<script>
  let { compId, liveResults, groups } = $props();
</script>

<span>
  {#if liveResults}
    <a
      href="https://live.worldcubeassociation.org/link/competitions/{compId}"
      target="_blank"
    >
      LIVE RESULTS
    </a>
  {/if}
  {#if groups}
    <a
      href="https://www.competitiongroups.com/competitions/{compId}"
      target="_blank"
    >
      GROUPS
    </a>
  {/if}
</span>

<style>
  span {
    display: flex;
    gap: 16px;
  }
  a {
    background-color: #384aa7;
    color: white;
    padding: 8px;
    border-radius: 5px;
    text-decoration: none;
    font-size: 16px;
  }
  @media screen and (max-width: 768px) {
    span {
      flex-direction: column;
      gap: 8px;
    }
  }
</style>
