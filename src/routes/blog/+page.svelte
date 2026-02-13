<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1>Blog</h1>

<section>
	<ul>
		{#each data.posts as post}
			<li>
				<span class="date">{post.meta.date}</span>
				<a href="/blog/{post.slug}">
					{post.meta.title}
				</a>
			</li>
		{/each}
	</ul>
</section>

<style>
	.date {
		font-family: monospace;
		margin-right: 1rem;
		color: #666;
	}
</style>