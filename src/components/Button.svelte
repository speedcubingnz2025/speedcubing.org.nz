<script>
  let { text, link } = $props();
</script>

<button aria-label="button" href={link}>
  {text}
</button>

<style>
  button {
    font-weight: 300;
    font-size: 1rem;
    border: 1px solid #dbdbdb;
    border-radius: 5px;
    background: none;
    color: #dbdbdb;
    padding: 10px 24px;
    cursor: pointer;
    font-size: 16px;
    margin: 8px;
  }

  button:hover {
    transition: color 0.3s ease;
    transition: background-color 0.3s ease;
    background-color: #dbdbdb;
    color: #101010;
  }
</style>
