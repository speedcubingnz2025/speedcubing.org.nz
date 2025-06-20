<script>
  const { rowData, type } = $props();
</script>

<tr>
  <td>{type}</td>
  <td>{rowData.name}</td>
  <td>
    <span class="result">
      {rowData.best}
      {#if rowData.link}
        <a href={rowData.link} aria-label="Record Video" target="_blank"><i class="bi bi-youtube video-icon"></i></a>
      {/if}
    </span>
  </td>
</tr>

<style>
  td {
    color: #fff;
    border: 1px solid var(--colorBlack1);
    padding: 4px;
    font-size: clamp(1rem, 1.2vw, 1.3rem);
  }
  .result {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .video-icon {
    color: var(--colorRed1);
  }
  tr:nth-child(even){
    background-color: var(--colorCompTable2);
  }
  tr:nth-child(odd){
    background-color: var(--colorCompTable1);
  }
</style>