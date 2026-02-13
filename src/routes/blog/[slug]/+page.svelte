<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<article>
	<h1>{data.meta.title}</h1>
	<p>Published on {data.meta.date}</p>

	<svelte:component this={data.content} />
</article>

<style>
	article {
		max-width: 800px;
		margin: 0 auto;
    }



</style>