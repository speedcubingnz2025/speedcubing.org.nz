<script>
  import ImageCard from "./ImageCard.svelte";
</script>

<section>
  <ImageCard
    img="gallery4.jpg"
    title="GETTING STARTED"
    text="Learn to solve the Rubik's Cube, and get started with the hobby!"
    link="/"
  ></ImageCard>
  <ImageCard
    img="gallery2.jpg"
    title="COMPETITIONS"
    text="Learn more about WCA competitions, and find one near you!"
    link="/"
  ></ImageCard>
  <ImageCard
    img="gallery3.jpg"
    title="TOP CUBERS"
    text="New Zealand has some of the best speedcubers in the world!"
    link="/"
  ></ImageCard>
</section>

<style>
  section {
    display: flex;
    flex-direction: row;
  }
  @media screen and (max-width: 768px) {
    section {
      flex-direction: column;
    }
  }
</style>
