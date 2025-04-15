<script>
  let { text, link } = $props();
</script>

<button aria-label="button" href={link}>
  {text}
</button>

<style>
  button {
    font-family: "Public Sans", sans-serif;
    font-weight: 600;
    border: 0px;
    border-radius: 5px;
    background-color: #93c572;
    color: black;
    padding: 8px 16px;
    cursor: pointer;
    font-size: 16px;
  }

  button:hover {
    transition: color 0.3s ease;
    background-color: #a7d08b;
  }
</style>
