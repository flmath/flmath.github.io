import { writable, derived } from 'svelte/store';

class Item {
    constructor(Name: string, Tags: string, Route: string) {
        this.Name = Name;
        this.Tags = Tags;
        this.Route = Route;
    }
    Name: string;
    Tags: string;
    Route: string;
}

export const term = writable('');
export const legacy = [
    new Item("Asymetric Cryptography with Openssl", "openssl mathematics crypto ecies rsa elliptic curves", "jupyter/asymetric_crypto"),
    new Item("Breaking RSA Certs with Openssl", "openssl rsa crypto", "jupyter/asymetric_break_certs"),
    new Item("Erlang dbg use scenarios", "erlang otp dbg debugger programming tracing trace", "ErlangDBG"),
    new Item("Every answer is right if the question is wrong.", "overfitting interpolation puzzle solutions bias mathematics", "jupyter/interpolation"),
    new Item("Matrices in Erlang: Growth Projections ", "growth projections erlang efficiency jupyter mathematics", "jupyter/growth_projections"),
    new Item("Matrices in Erlang: Implementation", "erlang efficiency jupyter mathematics", "jupyter/matrix_implementations_pt1"),
    new Item("Empirical Growth Testing", "growth projections efficiency jupyter mathematics", "jupyter/Empirical_growth_testing")
];
let mdarticles: Item[] = [];

const mdpaths = import.meta.glob('/src/routes/posts/mdarticles/[slug]/*.md', { eager: true });
//console.log(`mdpaths: ${Object.keys(mdpaths).length} files found.`);
for (const path in mdpaths) {
    const tfile : any = mdpaths[path];
    const slug : string = path.split('/').pop()?.replace('.md', '') ?? 'error-noname';
    // Construct the route that SvelteKit will use, e.g., "mdarticles/my-post-slug"
    const itemRoute = `mdarticles/${slug}`;

    if (tfile && typeof tfile === 'object' && 'metadata' in tfile) {
        const metadata : any = tfile.metadata;
        const itemName = (metadata.title as string) || slug; // Use title from metadata or fallback to slug
        mdarticles.push(new Item(itemName, metadata.tags.join(' '), itemRoute));
    }
    // console.log(`Processed markdown article: ${path}, slug: ${slug}, route: ${itemRoute}`);
}
export const items  = writable(legacy.concat(mdarticles));
export const filtered = derived(
    [term, items],
    ([$term, $items]) => $items.filter(x => x.Tags.toLowerCase().includes($term.toLowerCase()) || x.Name.toLowerCase().includes($term.toLowerCase()))
);
