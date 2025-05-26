import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

// svelte.config.js

/** @type {import('@sveltejs/kit').Config} */
const config = {

	preprocess: [vitePreprocess(), mdsvex()],
	extensions: ['.svelte', '.svx'],
	kit: {
	  // adapter-auto will be replaced with adapter-static
	appDir: 'internal', // directory to output the built app  
    adapter: adapter({
      // default options are fine for most GitHub Pages setups
      pages: 'build', // directory to output the static files
      assets: 'build', // directory to output the static files
      fallback: 'index.html', // can be '200.html' or '404.html' if using a SPA with client-side routing
      precompress: true,
      strict: true
    }),
    paths: {
      // IMPORTANT: If you are deploying to a subdirectory like <username>.github.io/<repo-name>
      // you need to specify the base path. Otherwise, if deploying to <username>.github.io,
      // you can omit this or set it to ''.
      base: process.env.NODE_ENV === 'production' ? '/your-repo-name' : '',
    },
	prerender: {
	  // You can specify an array of routes to prerender.
	  entries: ['*']
	}
}
};

export default config;