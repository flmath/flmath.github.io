import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: vitePreprocess(),

    kit: {
        // Use adapter-static
        adapter: adapter({
            // Default options:
            pages: 'build', // Directory for built files
            assets: 'build', // Directory for assets
            fallback: '404.html', // Use 404.html as a fallback for SPAs
            precompress: false, // Don't precompress (GitHub Pages handles compression)
            strict: true
        }),
        // --- IMPORTANT for GitHub Pages ---
        // If your site will be at https://<username>.github.io/<repo-name>/
        // You need to set the base path. We'll use an environment variable
        // so the GitHub Action can set it.
        paths: {
            base: process.env.VITE_BASE_PATH || '',
        }
        // --- End Important ---
    }
};

export default config;