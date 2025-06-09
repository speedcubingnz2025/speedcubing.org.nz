<script>
  import ImageCard from "./ImageCard.svelte";
</script>

<section>
  <div>
    <ImageCard
      img="home/image-links/getting-started.webp"
      title="GETTING STARTED"
      text="Learn to solve the Rubik's Cube, and get started with the hobby!"
      link="/getting-started"
    ></ImageCard>
  </div>
  <div>
    <ImageCard
      img="home/image-links/comps.webp"
      title="COMPETITIONS"
      text="Learn more about WCA competitions, and find one near you!"
      link="/competitions"
    ></ImageCard>
  </div>
  <div>
    <ImageCard
      img="home/image-links/nzs-best.webp"
      title="NZ'S BEST"
      text="New Zealand has some of the best speedcubers in the world!"
      link="/nzs-best"
    ></ImageCard>
  </div>
</section>

<style>
  section {
    display: flex;
    flex-direction: row;
    background-color: var(--colorBlack2);
    overflow: hidden;
  }
  div{
    width: calc(100vw / 3);
  }
  @media screen and (max-width: 768px) {
    section {
      flex-direction: column;
    }
    div {
      width: 100vw;
    }
  }
</style>
