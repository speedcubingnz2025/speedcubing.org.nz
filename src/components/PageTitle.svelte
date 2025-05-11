<script>
  let { imagePath, title, children } = $props();
</script>

<section>
  <img src={imagePath} alt="competition" class="bgImg" loading="eager" />
  <div class="box">
    <h1>{title}</h1>
    {@render children?.()}
  </div>
</section>

<style>
  section {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .bgImg {
    position: absolute;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  .box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 64px 32px;
    box-sizing: border-box;
    z-index: 1;
    background-color: rgb(27, 27, 28, 0.8);
    width: 50vw;
    min-height: 50vh;
  }

  @media screen and (max-width: 1007px){
    .box{
      width: 100vw;
    }
  }

</style>
