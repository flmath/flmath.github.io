import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	assetsInclude: ['**/*.odt'],
	plugins: [sveltekit()],
};


export default config;
