<!-- 
  Creates a wrapper around all other pages from its directory and below, so only need to add footer and css once
-->

<script>
  import Footer from "$lib/components/Footer.svelte";
  import Header from "$lib/components/Header.svelte";
	let { children } = $props();
  import "../app.css";
</script>

<Header></Header>
{@render children()}
<Footer></Footer>