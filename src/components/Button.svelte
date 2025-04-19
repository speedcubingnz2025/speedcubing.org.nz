<script>
  let { text, link } = $props();
</script>

<button aria-label="button" href={link}>
  {text}
</button>

<style>
  button {
    font-weight: 300;
    font-size: clamp(1rem, 1.4vw, 1.2rem);
    border: 1px solid var(--colorGrey1);
    border-radius: 5px;
    background: none;
    color: var(--colorGrey1);
    padding: 8px;
    cursor: pointer;
    min-width: 130px;
  }

  button:hover {
    transition: color 0.3s ease;
    transition: background-color 0.3s ease;
    background-color: var(--colorGrey1);
    color: var(--colorBlack3);
  }
</style>
