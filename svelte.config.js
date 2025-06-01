import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';
import path from 'path';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { fileURLToPath } from 'url'; // To get the current directory in ES modules

import rehypeUnwrapImages from 'rehype-unwrap-images';

import remarkToc from 'remark-toc';
import rehypeSlug from 'rehype-slug';
// Get the directory name of the current module (svelte.config.js)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const mdsvexOptions = {
  // Options for mdsvex can be specified here
  // For example, you can enable syntax highlighting or specify extensions
  extensions: ['.svx', '.md'],
  layout: {
    // Resolve paths from the project root (__dirname is the directory of svelte.config.js)
    erldbg: path.resolve(__dirname, 'src/lib/assets/mdlayouts/erldbg.svelte'),
    article: path.resolve(__dirname, 'src/lib/assets/mdlayouts/article.svelte'),
    _: path.resolve(__dirname, 'src/lib/assets/mdlayouts/fallback.svelte')
  },
  remarkPlugins: [[remarkToc, { tight: true, maxDepth: 3 }]],
  rehypePlugins: [rehypeSlug, rehypeUnwrapImages]
};

// svelte.config.js

/** @type {import('@sveltejs/kit').Config} */
const config = {

  preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],
  extensions: ['.svelte', '.svx', '.md'],
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
      //base: process.env.NODE_ENV === 'production' ? '/your-repo-name' : '',
      base: ''
    },
    prerender: {
      // You can specify an array of routes to prerender.
      entries: ['*', '/curriculum_vitae', '/posts/ErlangDBG']
    }
  }
};

export default config;