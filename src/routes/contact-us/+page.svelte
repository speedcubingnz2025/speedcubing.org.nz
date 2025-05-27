<svelte:head>
  <title>Contact | Speedcubing New Zealand</title>
</svelte:head>

<script>
  import "../../app.css";
  import GeneralContact from "../../components/contact/GeneralContact.svelte";
  import Links from "../../components/contact/Links.svelte";
  import SpecificComp from "../../components/contact/SpecificComp.svelte";
  import WantToOrganise from "../../components/contact/WantToOrganise.svelte";
  import ContentColumn from "../../components/ContentColumn.svelte";
  import Expandable from "../../components/Expandable.svelte";
  import Footer from "../../components/Footer.svelte";
  import Header from "../../components/Header.svelte";
  import PageTitle from "../../components/PageTitle.svelte";
  let title = "CONTACT US";
  let imagePath = "/getting_started/getting_started.webp";
</script>
<Header></Header>
<SpecificComp></SpecificComp>

<ContentColumn>
  <div class="row">
    <Links></Links>
    <GeneralContact></GeneralContact>
  </div>
</ContentColumn>
<Footer></Footer>

<style>
  .row{
    display: flex;
    flex-direction: row;
    min-height: calc(100vh - 320px);
  }
  @media screen and (max-width: 768px){
    .row{
      flex-direction: column;
    }
  }
</style>