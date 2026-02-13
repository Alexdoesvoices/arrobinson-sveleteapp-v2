import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.svx', '.md'],
	smartypants: {
		dashes: 'oldschool'
	},
	remarkPlugins: [],
	rehypePlugins: []
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// This tells Svelte to handle .svelte, .svx, and .md files
	extensions: ['.svelte', '.svx', '.md'],

	preprocess: [
		vitePreprocess(),
		mdsvex(mdsvexOptions)
	],

	kit: {
		adapter: adapter()
	}
};

export default config;