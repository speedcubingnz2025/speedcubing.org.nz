<script>
  import "../app.css";
  import Button from "../components/Button.svelte";
  import Carousel from "../components/Carousel.svelte";
  import Footer from "../components/Footer.svelte";
  import Header from "../components/Header.svelte";
  import HomeAbout from "../components/HomeAbout.svelte";
  import HomeCompRow from "../components/HomeCompRow.svelte";
</script>

<Header></Header>
<section class="top">
  <Carousel></Carousel>
  <HomeAbout></HomeAbout>
</section>
<HomeCompRow></HomeCompRow>

<Footer></Footer>

<style>
  .top {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0px 20px;
    background-color: #f5f5f5;
    padding-bottom: 24px;
  }

  @media screen and (max-width: 991px) {
    .top {
      flex-direction: column;
      gap: 0;
    }
  }
</style>
