<script>
  let { text, link } = $props();
</script>

<button aria-label="button" href={link}>
  {text}
</button>

<style>
  button {
    font-weight: 300;
    font-size: clamp(0.9rem, 1.8vw, 3rem);
    border: 1px solid var(--colorGrey1);
    border-radius: 5px;
    background: none;
    color: var(--colorGrey1);
    padding: clamp(8px, 1.5vw, 12px) clamp(16px, 3vw, 32px);
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
