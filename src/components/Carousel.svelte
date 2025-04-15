<script>
  let current = 0;
  const slides = [
    "gallery1.jpg",
    "gallery2.jpg",
    "gallery3.jpg",
    "gallery4.jpg",
  ];

  let interval = setInterval(() => {
    next();
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
      next();
    }, 4000);
  }
</script>

<div class="wrapper">
  <div class="swiper">
    <button on:click={prev} class="left">&larr;</button>

    <div class="slide">
      <img src={slides[current]} alt="Slide" />
    </div>

    <button on:click={next} class="right">&rarr;</button>
  </div>
</div>

<style>
  .swiper {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 24px;
  }

  .wrapper {
    width: 50%;
    height: auto;
    position: relative;
  }

  img {
    width: 100%;
    height: auto; /* Keep the aspect ratio intact */
    border-radius: 4px;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.3);
  }

  button {
    font-size: 2rem;
    position: absolute;
    top: 50;
    background: none;
    color: white;
    border: none;
    cursor: pointer;
  }

  .left {
    left: 0;
    margin-left: 32px;
  }
  .right {
    right: 0;
    margin-right: 32px;
  }

  @media screen and (max-width: 991px) {
    .wrapper {
      width: 100%;
    }
    .swiper {
      padding: 0;
    }
    img {
      border-radius: 0px;
      box-shadow: none;
    }

    .left {
      margin-left: 6px;
    }
    .right {
      margin-right: 6px;
    }
  }
</style>
