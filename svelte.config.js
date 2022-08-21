import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

const dev = process.env.APP_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config =  {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  
  preprocess: preprocess(),	
 
  kit: {
	paths: { base: dev ? '' : '/flmath.github.io',
	},
	appDir: 'internal',
    adapter: adapter({
      // default options are shown. On some platforms
      // these options are set automatically — see below
      pages: 'build',
      assets: 'build',
      fallback: '200.html',
      precompress: false
    }),

    prerender: {
      // This can be false if you're using a fallback (i.e. SPA mode)
      default: true
    }
  }
};

export default config;
