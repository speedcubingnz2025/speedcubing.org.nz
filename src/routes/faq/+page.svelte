<svelte:head>
  <title>FAQ | Speedcubing New Zealand</title>
</svelte:head>

<script>
  import "../../app.css";
  import ContentColumn from "../../components/ContentColumn.svelte";
  import FaqInfo from "../../components/faq/FAQInfo.svelte";
  import Footer from "../../components/Footer.svelte";
  import Header from "../../components/Header.svelte";
  import PageTitle from "../../components/PageTitle.svelte";
  let title = "FREQUENTLY ASKED QUESTIONS";
  let imagePath = "/faq/IMG_6029.webp";
</script>

<Header></Header>
  <PageTitle {title} {imagePath}>
      <p>Find out more about speedcubing, competitions, our organisation and more!</p>
  </PageTitle>
  <ContentColumn>
    <FaqInfo></FaqInfo>
  </ContentColumn>
<Footer></Footer>