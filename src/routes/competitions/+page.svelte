<svelte:head>
  <title>Competitions | Speedcubing New Zealand</title>
</svelte:head>

<script>
  import PageTitle from "$lib/components/PageTitle.svelte";
  import Video from "$lib/components/Video.svelte";

  import CompSection from "./CompSection.svelte";
  import Tutorial from "./Tutorial.svelte";
  import ImageRow from "./ImageRow.svelte";
  
  const imagePath = "/competitions/title-bg.webp";
  const title = `COMPETITIONS`;
</script>

<PageTitle {imagePath} {title}>
  <p>
    Competitions are one of the best ways to get involved in speedcubing! Don't
    be fooled by the name - more than anything, these are social events where
    you can get to know other people who share the same awesome hobby. Newcomers
    consistenty have an amazing experience, and often make lifelong friends
    here.<br /><br />Competitions are generally open to anyone, regardless of
    age or level of experience. If you can solve a cube, you're more than
    welcome to participate!<br /><br />Our competitions are officially
    recognised by the
    <a
      href="https://www.worldcubeassociation.org/"
      target="_blank"
      class="blueLink">World Cube Association</a
    >, the governing body for speedcubing worldwide.
  </p>
</PageTitle>
<CompSection></CompSection>
<ImageRow></ImageRow>
<Tutorial></Tutorial>
