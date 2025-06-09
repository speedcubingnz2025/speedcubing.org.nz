<script>
  let {name, roles, src} = $props();
</script>

  <section>
      <img alt="Person" {src}>
      <div class="textbox">
        <p>{name}</p>
        <i>{roles}</i>
      </div>
  </section>


<style>
  img{
    width: 100%;
    aspect-ratio: 1;
    object-fit: cover;
    user-select: none;
  }
  p{
    font-weight: 500;
    font-family: "Spartan MB", sans-serif;
  }
  section{
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  .textbox{
    padding-top: 16px;
  }
  i{
    color: var(--colorGrey2);
  }
  p, i {
    padding: 2px;
  }
</style>