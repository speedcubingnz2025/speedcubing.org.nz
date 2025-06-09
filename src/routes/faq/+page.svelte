<svelte:head>
  <title>FAQ | Speedcubing New Zealand</title>
</svelte:head>

<script>
  import ContentColumn from "$lib/components/ContentColumn.svelte";
  import PageTitle from "$lib/components/PageTitle.svelte";

  import FaqInfo from "./FAQInfo.svelte";


  const title = "FREQUENTLY ASKED QUESTIONS";
  const imagePath = "/faq/title-bg.webp";
</script>

  <PageTitle {title} {imagePath}>
      <p>Find out more about speedcubing, competitions, our organisation and more!</p>
  </PageTitle>
  <ContentColumn>
    <FaqInfo></FaqInfo>
  </ContentColumn>