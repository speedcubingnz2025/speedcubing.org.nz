<script>
  import ContentColumn from "../../lib/components/ContentColumn.svelte";
</script>

<section>
    <ContentColumn>
      <div class="content">
        <h1 class="title">SPEEDCUBING NEW ZEALAND</h1>
        <p>
          Speedcubing New Zealand is a not-for-profit, incorporated society run
          entirely by volunteers.<br /><br />We support the growth of the
          speedcubing community in New Zealand by organising events, providing
          resources, and fostering a positive environment for cubers of all skill
          levels.
        </p>
        <button onclick={() => window.location.href="./about-us"} class="btn">ABOUT US</button>
      </div>
    </ContentColumn>
</section>

<style>
  .content{
    text-align: center;
  }
  p{
    margin-bottom: 32px;
  }
  button {
    margin-bottom: 24px;
  }
</style>
