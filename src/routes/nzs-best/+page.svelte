<svelte:head>
  <title>NZ's Best | Speedcubing New Zealand</title>
</svelte:head>

<script>
  import "../../app.css";
  import PageTitle from "$lib/components/PageTitle.svelte";

  import BioCarousel from "./BioCarousel.svelte";

  const title = "NZ'S BEST";
  const imagePath = "/nzs-best/title-bg.webp";
</script>

<PageTitle {title} {imagePath}>
  <p>
    New Zealand punches well above our weight in the world of competitive speedcubing, producing 
    some of the fastest cubers in the world! Despite our small population, we consistently rank 
    in the top 10 countries worldwide in terms of our overall performance.<br/><br/>From World Champions, 
    to World Record holders, to dominant forces within the Oceania cubing scene, find out more 
    about some of New Zealand's top cubers here!
  </p>
</PageTitle>
<h2>CUBER BIOS</h2>
<BioCarousel></BioCarousel>