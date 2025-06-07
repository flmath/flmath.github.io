import type { PageLoad, EntryGenerator } from './$types';
import { error } from '@sveltejs/kit';

const mdpaths = import.meta.glob('/src/routes/posts/mdarticles/[slug]/*.md', { eager: true });

export const entries: EntryGenerator = () => {

    let slugList: string[] = [];
    for (const path in mdpaths) {
        const slugVal: string = path.split('/').pop()?.replace('.md', '') ?? 'error-noname';
//      console.log(`Found markdown file: ${path}, slug: ${slugVal}`);
        slugList.push(slugVal);
    }
    return slugList.map(slugVal => ({ slug: slugVal }));
};

export const prerender = true;
export const load: PageLoad = async ({ params }) => {
    try {
        // The `params.slug` will be "some" for the URL /posts/mdarticles/some
        // This dynamically imports the Svelte component compiled from the .md file.
        // The path '../${params.slug}.md' is relative to this +page.ts file,
        // correctly pointing to /src/routes/posts/mdarticles/${params.slug}.md
       // console.log(`Loading post from: ../[slug]${params.slug}.md`);
        const post = await import(`../[slug]/${params.slug}.md`);

        return {
            PostContent: post.default, // The Svelte component itself
            metadata: post.metadata,    // The metadata from the markdown frontmatter
            slug: params.slug           // The slug for the post, useful for links or titles
        };
    } catch (e) {
        // If the markdown file doesn't exist, this will throw a 404 error.
        console.error(`Failed to load post /src/routes/posts/mdarticles/${params.slug}.md:`, e);
        throw error(404, 'Not found');
    }
};