<script>
	export let error;
	export let status;

   import Header from '$lib/components/Header.svelte';
   import Footer from '$lib/components/Footer.svelte';
</script>


<div class="error-text">
<h1>{status}</h1>

<h2>
    {#if status === 404}
        Page not found.
    {:else}
        {error?.message ?? 'Something went wrong.'}
    {/if}
</h2>

<a href="/">Go home</a>
</div>


<style>
    .error-text {
        text-align: center;
        margin-bottom: 10%
    }
</style>