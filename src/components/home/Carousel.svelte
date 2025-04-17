<script>
  import "bootstrap-icons/font/bootstrap-icons.css";
  import { fade } from "svelte/transition";

  let current = 0;
  const slides = [
    "gallery/gallery1.jpg",
    "gallery/gallery2.jpg",
    "gallery/gallery3.jpg",
    "gallery/gallery5.webp",
    "gallery/gallery6.webp",
    "gallery/gallery7.webp",
    "gallery/gallery9.webp",
  ];
  // let interval = setInterval(next, 4000);

  function next() {
    resetInterval();
    current = (current + 1) % slides.length;
  }

  function prev() {
    resetInterval();
    current = (current - 1 + slides.length) % slides.length;
  }

  function resetInterval() {
    // clearInterval(interval);
    // interval = setInterval(next, 4000);
  }
</script>

<div class="carousel">
  {#key slides[current]}
    <img
      src={slides[current]}
      alt="Slide"
      transition:fade={{ duration: 500 }}
    />
  {/key}

  <button on:click={next} class="left" aria-label="left"
    ><i class="bi bi-chevron-left"></i></button
  >
  <button on:click={prev} class="right" aria-label="right"
    ><i class="bi bi-chevron-right"></i></button
  >
</div>

<style>
  .carousel {
    height: calc(100vh - 180px);
    background-color: #1a1a1b;
    overflow: hidden;
    position: relative;
  }
  img {
    object-fit: cover;
    object-position: center;
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
  }

  button {
    background: none;
    border: none;
    color: white;
    position: absolute;
    top: 50%;
    font-size: 32px;
    cursor: pointer;
  }

  .left {
    left: 2%;
  }
  .right {
    right: 2%;
  }

  button:hover {
    transition: color 0.3s ease;
    color: #aaaaaa;
  }
  @media screen and (max-width: 768px) {
    .carousel {
      height: calc(100vh - 250px);
    }
  }
</style>
