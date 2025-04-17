<script>
  let { imagePath, title, text } = $props();
</script>

<section>
  <img src={imagePath} alt="competition" class="bgImg" />
  <div class="box">
    <h1>{title}</h1>
    <h4>{@html text}</h4>
  </div>
</section>

<style>
  h1,
  h4 {
    margin: 0;
    color: white;
    white-space: pre-line;
    line-height: 1.2rem;
  }
  h1 {
    font-size: 2.8rem;
    font-weight: 600;
  }
  h4 {
    padding: 16px;
    font-size: 0.9rem;
    font-weight: 100;
    color: #dbdbdb;
  }
  :global(.box a) {
    color: #1e90ff;
    text-decoration: underline;
  }
  section {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    min-height: calc(100vh - 300px);
    position: relative;
  }
  .bgImg {
    object-fit: cover;
    object-position: 50% 40%;
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
  }
  .box {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 1;
    top: 0;
    height: 100%;
    background-color: rgba(26, 26, 27, 0.8);
    max-width: 600px;
    padding: 16px;
    box-sizing: border-box;
  }

  @media screen and (max-width: 768px) {
    h1 {
      font-size: 2.1rem;
    }
  }
</style>
