<script>
  let { src, title } = $props();
</script>

<div class="video-container">
  <iframe
    {title}
    width="100%"
    height="100%"
    {src}
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen
    frameborder="0"
  >
  </iframe>
</div>


<style>
  .video-container {
    width: auto;
    margin: auto;
    max-width: 100%;
    max-height: 50vh;
    aspect-ratio: 16/9;
    box-sizing: border-box;
    padding: 32px;
  }
  iframe {
    border-radius: 16px;
  }
</style>
