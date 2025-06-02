<svelte:head>
  <title>NZ's Best | Speedcubing New Zealand</title>
</svelte:head>

<script>
  import "../../app.css";
  import Footer from "../../components/Footer.svelte";
  import Header from "../../components/Header.svelte";
  import BioCarousel from "../../components/nzs-best/bio_carousel/BioCarousel.svelte";
  import PageTitle from "../../components/PageTitle.svelte";
  let title = "NZ'S BEST";
  let imagePath = "/nzs_best/flags.webp";
</script>
<Header></Header>
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
<Footer></Footer>