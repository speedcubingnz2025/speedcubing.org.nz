<script>
  import "bootstrap-icons/font/bootstrap-icons.css";
  const { person, shrink } = $props();
  const { name, bio, file, wcaid, instagram, youtube } = person;
</script>


<section class="card" class:shrink={shrink}>
  <div class="img-box">
    <img src="/nzs-best/bio-photos/{file}" alt="person" class="img">
    <div class="name-box"><p>{name}</p></div>
  </div>
  <div class="bio-box">

    <div class="bio-box-inner">
      <p class="bio-text">{@html bio}</p>
      <span class="icons">
        <a href="https://www.worldcubeassociation.org/persons/{wcaid}" aria-label="WCA icon" target="_blank">
          <img src="/icons/wca.png" class="icon" alt="WCA Icon">
        </a>
        {#if instagram}
          <a href={instagram} aria-label="instagram" target="_blank">
            <i class="bi bi-instagram icon"></i>
          </a>
        {/if}
        {#if youtube}
          <a href={youtube} aria-label="youtube" target="_blank">
            <i class="bi bi-youtube icon"></i>
          </a>
        {/if}
      </span>
    </div>

  </div>
</section>

<style>

  .card {
    display: flex;
    flex-direction: row;
    position: relative;
    width: 70%;
    flex-shrink: 0;
    flex-grow: 0;
    height: 100%;
    transition: opacity 0.5s ease, transform 0.5s ease, width 0.5s ease, scale 0.5s ease;
  }

  .bio-box {
    width: 50%;
    background-color: var(--colorBlack3);
    box-sizing: border-box;

    /* Flex column with overflow */
    overflow-y: auto;
    overflow-x: hidden;

    transition: width 0.5s ease, padding 0.5s ease;
  }

  .shrink {
    opacity: 0.2;
    width: 35%;
    transform: scale(0.6, 0.6);
  }

  .shrink .img-box {
    width: 100%;
  }

  .shrink .bio-box {
    width: 0%;
  }

  .img-box {
    transition: width 0.5s ease;
    width: 50%;
    position: relative;
  }

  .bio-box-inner{
    padding: 16px;
    box-sizing: border-box;
    width: 35vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .name-box{
    position: absolute;
    bottom: 5%;
    left: 50%;
    width: max-content;
    transform: translate(-50%, 0%);
    background-color: var(--colorBlack3);
    padding: 12px 32px;
    text-align: center;
  }

  .name-box p {
    font-family: "Spartan MB", sans-serif;
  }

  .icons {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .icon{
    display: inline-block;
    width: 1em;
    font-size: 2em;
    padding: 16px 16px;
    color: white;
  }

  .img {
    object-fit: cover;
    object-position: center;
    display: block;
    width: 100%;
    height: 100%;
    transition: transform 0.5s ease;
  }

  @media screen and (max-width: 992px){
    .card {
      flex-direction: column;
    }
    .img-box, .bio-box {
      width: 100%;
    }
    .bio-box-inner{
      width: 70vw;
    }
    .bio-box{
      transition: height 0.5s ease, padding 0.5s ease;
    }
  }
</style>