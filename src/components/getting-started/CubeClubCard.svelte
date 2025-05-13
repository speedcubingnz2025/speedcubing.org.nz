<script>
  let {title, location, src, link} = $props();
</script>

<a href={link} aria-label="Club" target="_blank">
<div>
    <img alt="Club" {src} loading="lazy">
    <p>{title}</p>
    <i>{location}</i>
</div>
</a>


<style>
  img{
    width: 100%;
    object-fit: cover;
    user-select: none;
  }
  p{
    padding: 10% 0px;
  }
  div{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #4a4a4b;
    border-radius: 8px;
    text-align: center;
    width: 100%;
    height: 100%;
    padding: 5%;
    box-sizing: border-box;
  }
  i{
    color: var(--colorGrey2);
  }
  a{
    text-decoration: none;
  }
</style>