<script>
  let { img, title, text, link } = $props();
</script>

<section>
  <a href={link}
    ><img alt="cuber" src={img} />
    <div class="title">{title}</div>
    <div class="text">{text}</div></a
  >
</section>

<style>
  section {
    position: relative;
    transition: transform 0.3s ease;
  }
  .title,
  .text {
    position: absolute;
    background-color: #101010;
    color: white;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
  }
  .title {
    font-weight: 400;
    bottom: 50px;
    width: 50%;
    padding: 8px;
  }
  .text {
    font-size: 0.8rem;
    font-weight: 100;
    width: 80%;
    bottom: 10px;
    padding: 4px;
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
