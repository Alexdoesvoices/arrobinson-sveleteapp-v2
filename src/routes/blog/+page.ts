import type { PageLoad } from './$types';

// Define what your Markdown frontmatter looks like
interface Post {
	title: string;
	date: string;
	description?: string;
}

export const load: PageLoad = async () => {
	// 1. Fetch all .svx files in the current directory
	const allPostFiles = import.meta.glob('./*.svx');
	const iterablePosts = Object.entries(allPostFiles);

	const allPosts = await Promise.all(
		iterablePosts.map(async ([path, resolver]) => {
			// 2. Resolve the file and extract metadata
			// We cast the result so TS knows 'metadata' exists
			const { metadata } = await (resolver() as Promise<{ metadata: Post }>);
			
			// 3. Clean the path: './my-post.svx' -> 'my-post'
			const slug = path.split('/').pop()?.replace('.svx', '') ?? '';

			return {
				meta: metadata,
				slug: slug
			};
		})
	);

	// 4. Sort by date (newest first)
	return {
		posts: allPosts.sort((a, b) => {
			return new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime();
		})
	};
};