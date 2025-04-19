<script>
  let { img, title, text, link } = $props();
</script>

<section>
  <a href={link}>
    <img alt="cuber" src={img} />
    <div class="textBoxes">
      <div><h5 class="title">{title}</h5></div>
      <div><h6 class="text">{text}</h6></div>
    </div>
  </a>
</section>

<style>
  section {
    position: relative;
    transition: transform 0.3s ease;
  }
  .title,
  .text {
    margin: auto;
    background-color: var(--colorBlack3);
    color: white;
  }
  .title {
    font-weight: 400;
    width: 70%;
  }
  .text {
    font-weight: 100;
    width: 50%;
  }
  .textBoxes {
    position: absolute;
    transform: translateX(-50%);
    transform: translateY(-120%);
    display: flex;
    flex-direction: column;
    gap: 20px 0px;
    width: 100%;
  }
  img {
    object-fit: cover;
    object-position: center;
    display: block;
    width: 100%;
    height: 100%;
  }
  section:hover {
    transform: scale(1.1);
    z-index: 99;
  }
</style>
