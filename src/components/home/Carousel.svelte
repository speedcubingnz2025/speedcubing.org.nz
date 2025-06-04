<script>
  import "bootstrap-icons/font/bootstrap-icons.css";
  import { tick } from "svelte";

  const imgSrcs = [
    "gallery/Carousel 1.webp",
    "gallery/Carousel 4.webp",
    "gallery/Carousel 5.webp",
    "gallery/Carousel 8.webp",
    "gallery/Carousel 6.webp",
    "gallery/Carousel 2.webp",
    "gallery/Carousel 3.webp",
    "gallery/Carousel 7.webp",
    "gallery/Carousel 9.webp",
  ];

  let interval = setInterval(next, 5000);
  function resetInterval(){
    clearInterval(interval);
    interval = setInterval(next, 5000);
  }

  // If slide is prev or active, do the 0.5s transition, else transition instantly
  let lastActive = $state(0);
  let active = $state(0);

  // initialise transforms for each image to 0
  // except last, which needs to be to the left of the first slide
  let transforms = $state(imgSrcs.map((_, i) =>  i === imgSrcs.length - 1 ? -100*imgSrcs.length : 0));

  async function handleClick(goal){
    let diff = goal - active;
    for(let i=0; i<Math.abs(diff); i++){
      if(diff < 0){ prev(); }
      else { next(); }
    }
  }

  /* Move the carousel forwards */
  function next(){
    if(active === imgSrcs.length - 2){
      // arriving to the last slide
      // move all but the first to the left by 1
      for(let i=1; i<imgSrcs.length; i++){ transforms[i] -= 100; }
      // move first to its original position + 100%
      transforms[0] = 100;
    }else if(active === imgSrcs.length - 1) {
      // arriving to the first slide from last
      // move all but the last to their correct positions. 
      for(let i=0; i<imgSrcs.length-1; i++){ transforms[i] = 0; }
      // move the last one off to the left again
      transforms[imgSrcs.length - 1] -= 100;
    }else if(active === 0){
      // arriving to second slide from first
      // ensure that all transitions are -100%
      transforms = transforms.map(_ => -100);
    }else{
      // somewhere in the middle, move all to the left by 100%
      transforms = transforms.map(e => e -=100);
    }
    lastActive = active;
    active = (active+1) % imgSrcs.length;
    resetInterval();
  }

  /* Move the carousel backwards */
  function prev(){
    if(active === imgSrcs.length - 1){
      // arriving to the second to last slide from the last
      transforms = transforms.map((_, i) => (imgSrcs.length - 2)*-100);
    }else if(active === 0){
      // arriving to the last slide from the first
      // move last and first right by 100%
      transforms[0] += 100;
      transforms[imgSrcs.length - 1] += 100;
      // move the rest to off the left
      for(let i=1; i<imgSrcs.length - 1; i++){ transforms[i] = -(i+1)*100; }
    }else if(active === 1){
      // moving from the second to the first
      // ensure last slide is to the left
      transforms[imgSrcs.length - 1] = imgSrcs.length * -100;
      for(let i=0; i<imgSrcs.length - 1; i++){ transforms[i] += 100; }
    }else{
      // somewhere in the middle, move all to the left by 100%
      transforms = transforms.map(e => e +=100);
    }
    lastActive = active;
    active --;
    if(active < 0){ active = imgSrcs.length - 1; }
    resetInterval();
  }

</script>

<section class="carousel">
  <div class="carousel_items">
    {#each imgSrcs as src, i}
      <div class="carousel_item" 
        style="transform: translateX({transforms[i]}%);"
        class:smooth_transform={(i==active || i==lastActive)}
      >
        <img src={src} alt="{i} of {imgSrcs.length}">
      </div>
    {/each}
  </div>
  <div class="nav_dots">
    {#each imgSrcs as _, i}
      <button class="nav_dot" aria-label="nav dot" class:active_dot={i === active} onclick={() => handleClick(i)}></button>
    {/each}
  </div>
  <button onclick={prev} aria-label="next" class="left"><i class="bi bi-chevron-left"></i></button>
  <button onclick={next} aria-label="next" class="right"><i class="bi bi-chevron-right"></i></button>
</section>

<style>
  .nav_dots {
    position: absolute;
    bottom: 12px;
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 12px;
  }
  .nav_dot {
    width: 12px;
    height: 12px;
    display: inline;
    background-color: #9d9d9d;
    border-radius: 50%;
    border: none;
    opacity: 0.4;
    transition: color 0.5s ease;
    cursor: pointer;
  }
  .nav_dot:hover{
    background-color: #fff;
  }
  .active_dot{
    background-color: #fff;
    opacity: 1;
  }
  .carousel {
    width: 100%;
    height: calc(100vh - 100px);
    overflow: hidden;
    position: relative;
  }
  .carousel_items {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
  }
  .carousel_item {
    width: 100%;
    height: 100%;
    flex: 0 0 auto;
  }
  .carousel_item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
  .smooth_transform {
    transition: transform 0.5s ease;
  }
  .left, .right {
    padding: 0px;
    border: none;
    background-color: transparent;
    color: #fff;
    font-size: clamp(2.3rem, 2vw, 3rem);
    cursor: pointer;
    position: absolute;
    top: 50%;
    touch-action: manipulation;
  }
  .left {
    left: 5px;
  }
  .right{ 
    right: 5px;
  }

  @media screen and (max-width: 768px){
    .carousel {
      height: 100vw;
      max-height: 70vh;
    }
  }
</style>
