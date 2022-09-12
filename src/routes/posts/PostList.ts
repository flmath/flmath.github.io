import { writable, derived } from 'svelte/store';

export const term = writable('');
export const items = writable(['dog', 'cat', 'fish', 'iguana']);
export const filtered = derived(
	[term, items], 
	([$term, $items]) => $items.filter(x => x.includes($term))
);