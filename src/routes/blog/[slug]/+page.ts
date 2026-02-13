import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	try {
		// Import the specific markdown file based on the URL slug
		// Make sure the path points back to where your .svx files live
		const post = await import(`../${params.slug}.svx`);

		return {
			content: post.default,
			meta: post.metadata
		};
	} catch (e) {
		throw error(404, `Could not find ${params.slug}`);
	}
};