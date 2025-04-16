<script>
  import Button from "../Button.svelte";
</script>

<section>
  <div class="container">
    <h1>SPEEDCUBING NEW ZEALAND</h1>
    <h4>
      Speedcubing New Zealand is a not-for-profit, incorporated society run
      entirely by volunteers.<br /><br />We support the growth of the
      speedcubing community in New Zealand by organising events, providing<br />
      resources, and fostering a positive environment for cubers of all skill levels.
    </h4>
    <Button text="ABOUT US" link="/"></Button>
  </div>
</section>

<style>
  h1 {
    margin: 0;
    font-size: 2.2rem;
    font-weight: 500;
  }
  h4 {
    margin: 0;
    padding: 16px;
    font-size: 0.9rem;
    font-weight: 100;
    color: #dbdbdb;
  }
  section {
    background-color: #1a1a1b;
    color: white;
  }
  .container {
    margin: 0 auto;
    text-align: center;
    padding: 32px;
  }
</style>
