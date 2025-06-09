<svelte:head>
  <title>About Us | Speedcubing New Zealand</title>
</svelte:head>

<script>
  import History from "./History.svelte";
  import SiteInfo from "./SiteInfo.svelte";
  import TeamGrid from "./TeamGrid.svelte";
  import ContentColumn from "$lib/components/ContentColumn.svelte";
  import PageTitle from "$lib/components/PageTitle.svelte";

  const title = "ABOUT US";
  const imagePath = "/about-us/title-bg.jpg";
</script>

<PageTitle {title} {imagePath}>
  <p>The New Zealand speedcubing community has a rich history, dating back over 
    15 years! Learn more about it and the team behind Speedcubing New Zealand here.</p>
</PageTitle>
<ContentColumn>
  <TeamGrid></TeamGrid>
  <History></History>
  <SiteInfo></SiteInfo>
</ContentColumn>