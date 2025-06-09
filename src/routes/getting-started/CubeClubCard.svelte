<script>
  let {title, location, src, link} = $props();
</script>

<a href={link} aria-label="Club" target="_blank">
  <section>
      <img alt="Club" {src} loading="lazy">
      <div class="textbox">
        <p>{title}</p>
        <i>{location}</i>
      </div>
  </section>
</a>


<style>
  img{
    width: 80%;
    object-fit: cover;
    user-select: none;
  }
  p{
    font-weight: 500;
    font-family: "Spartan MB", sans-serif;
  }
  section{
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #4a4a4b;
    border-radius: 8px;
    text-align: center;
    height: 100%;
    padding: 12px 4px 12px 4px;
    box-sizing: border-box;
  }
  .textbox{
    padding-top: 16px;
  }
  i{
    color: var(--colorGrey2);
  }
</style>