export const manifest = {
	appDir: "internal",
	assets: new Set([".nojekyll","favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"internal/immutable/start-41c445cc.js","imports":["internal/immutable/start-41c445cc.js","internal/immutable/chunks/index-8d6a4a51.js","internal/immutable/chunks/singletons-fc042695.js"],"stylesheets":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				errors: [1],
				layouts: [0],
				leaf: 2
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
