<script>
  import Instagram from '$lib/components/posts/Instagram.svelte';
  import PostContainer from '$lib/components/posts/PostContainer.svelte';
  import Carousel from './home/Carousel.svelte';
  import Event from './home/Event.svelte';
  import Hero from './home/Hero.svelte';
  import ImageLinks from './home/ImageLinks.svelte';
  import Subscribe from './home/Subscribe.svelte';
</script>

<svelte:head>
  <title>Home | Speedcubing New Zealand</title>
</svelte:head>

<Event />
<Carousel />
<Hero />
<ImageLinks />
<Instagram />
<Subscribe />
