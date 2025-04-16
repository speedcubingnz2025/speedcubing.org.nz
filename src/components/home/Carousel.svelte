<script>
  import "bootstrap-icons/font/bootstrap-icons.css";

  let current = 0;
  const slides = [
    "gallery1.jpg",
    "gallery2.jpg",
    "gallery3.jpg",
    "gallery4.jpg",
  ];

  let interval = setInterval(() => {
    // next();
  }, 4000);

  function next() {
    current = (current + 1) % slides.length;
    resetTransition();
  }

  function prev() {
    current = (current - 1 + slides.length) % slides.length;
    resetTransition();
  }

  function resetTransition() {
    clearInterval(interval);
    interval = setInterval(() => {
      // next();
    }, 4000);
  }
</script>

<div class="carousel">
  <img src={slides[current]} alt="Slide" />

  <button on:click={prev} class="left" aria-label="left"
    ><i class="bi bi-chevron-left"></i></button
  >
  <button on:click={next} class="right" aria-label="right"
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
    color: #101010;
  }
  @media screen and (max-width: 768px) {
    .carousel {
      height: calc(100vh - 250px);
    }
  }
</style>
