<script>
  import Button from "./Button.svelte";
</script>

<section>
  <h1>Interested in competing?</h1>
  <h3>
    Our competitions cater for Lorem ipsum dolor sit amet consectetur
    adipisicing elit. Sit eius tempora neque voluptatibus, impedit consequatur
    unde ea numquam amet veniam.<br /><br />Check out all of our upcoming
    competitions!
  </h3>
  <Button text="Competitions" link="/"></Button>
</section>

<style>
  h3,
  h1 {
    font-family: "Public Sans", sans-serif;
    font-weight: 600;
  }

  section {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    box-sizing: border-box;
    padding: 32px 24px;
    background-color: #1c3144;
    color: white;
  }

  @media screen and (max-width: 991px) {
    section {
      padding: 24px 8px;
    }
  }
</style>
