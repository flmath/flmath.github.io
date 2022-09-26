import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

// const dev = process.env.APP_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config =  {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  
  preprocess: preprocess(),	
 
  kit: {
	paths: { base: '',
    // dev ? '' : '/flmath.github.io',
	},
	appDir: 'internal',
    adapter: adapter({
      // default options are shown. On some platforms
      // these options are set automatically — see below
      pages: 'build',
      assets: 'build',
      fallback: 'index.html',
      precompress: false
    }),
    prerender: { entries: ['*', '/curriculum_vitae', '/posts/ErlangDBG'] }
 
  }
};

export default config;
