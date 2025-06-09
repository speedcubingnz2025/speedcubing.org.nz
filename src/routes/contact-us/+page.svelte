<svelte:head>
  <title>Contact Us | Speedcubing New Zealand</title>
</svelte:head>

<script>
  import ContentColumn from "$lib/components/ContentColumn.svelte";
  import PageTitle from "$lib/components/PageTitle.svelte";

  import Form from "./Form.svelte";
  import ContactInfo from "./ContactInfo.svelte";

</script>

<ContentColumn>
  <h2>CONTACT US</h2>
  <div class="row">
    <ContactInfo></ContactInfo>
    <Form></Form>
  </div>
</ContentColumn>

<style>
  .row{
    display: flex;
    flex-direction: row;
    min-height: calc(100vh - 320px);
    gap: 60px;
  }
  @media screen and (max-width: 768px){
    .row{
      flex-direction: column;
    }
  }
</style>