<script>
  let { img, title, text, link } = $props();
</script>

<section>
  <a href={link}>
    <img alt="cuber" src={img}/>
    <div class="box">
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  </a>
</section>

<style>
  section {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  h3{
    padding: 12px 32px;
  }

  p{
    padding: 8px 16px;
  }

  .box {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    transform: translate(-50%, 0%);
    position: absolute;
    bottom: 5%;
    width: 95%;
    gap: 8px 0px;
    left: 50%;
  }

  h3, p {
    background-color: var(--colorBlack3);
    color: white;
    border-radius: 4px;
  }

  img {
    object-fit: cover;
    object-position: center;
    display: block;
    transition: transform 0.5s ease;
    width: 100%;
    height: 100%;
  }

  img:hover {
    transform: scale(1.1);
  }
</style>
