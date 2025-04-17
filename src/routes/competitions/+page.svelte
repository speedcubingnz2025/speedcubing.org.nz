<script>
  import "../../app.css";
  import CompSection from "../../components/competitions/CompSection.svelte";
  import Footer from "../../components/Footer.svelte";
  import Header from "../../components/Header.svelte";
  import PageTitle from "../../components/PageTitle.svelte";
  let imagePath = "/competitions/title_bg.webp";
  let title = `COMPETITIONS`;
  let text = `Competitions are one of the best ways to get involved in speedcubing!\nDon't be fooled by the name - more than anything, these are social events where you can get to know other poeple who share the same amazing hobby. Newcomers consistenty have an amaxing experience, and often make lifelong friends here.\n\nCompetitions are generally open to anyone, regardless of age or level of experience. If you can solve a cube, you're more than welcome to participate!\n\nOur competitions are officially recognised by the <a href="https://www.worldcubeassociation.org/" target="_blank">World Cube Association</a>, the governing body for speedcubing worldwide.`;
</script>

<Header></Header>
<PageTitle {imagePath} {title} {text}></PageTitle>
<CompSection></CompSection>
<Footer></Footer>
