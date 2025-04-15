<script>
  import Button from "./Button.svelte";
</script>

<section>
  <h2>
    <span class="blue">Speedcubing New Zealand</span> is a not-for-profit,
    incorporated society run entirely by volunteers.<br /><br />We support the
    growth of the speedcubing community in New Zealand by organising events,
    providing resources, and fostering a positive environment for cubers of all
    skill levels.
    <br /><br />
    <Button text="About Us" link="/"></Button>
  </h2>
</section>

<style>
  h2 {
    font-family: "Public Sans", sans-serif;
    font-weight: 600;
  }

  section {
    display: flex;
    width: 50%;
    box-sizing: border-box;
    padding-right: 24px;
  }

  .blue {
    color: #3777ff;
  }

  @media screen and (max-width: 991px) {
    section {
      width: 100%;
      padding: 0px 8px;
      text-align: center;
    }
  }
</style>
