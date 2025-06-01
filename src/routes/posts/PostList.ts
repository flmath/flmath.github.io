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
export const items = writable([
    new Item("Asymetric Cryptography with Openssl", "openssl mathematics crypto ecies rsa elliptic curves", "jupyter/asymetric_crypto"),  
    new Item("Breaking RSA Certs with Openssl", "openssl rsa crypto", "jupyter/asymetric_break_certs"),
    new Item("Erlang dbg use scenarios", "erlang otp dbg debugger programming tracing trace", "ErlangDBG"),
    new Item("Every answer is right if the question is wrong.", "overfitting interpolation puzzle solutions bias mathematics", "jupyter/interpolation"),
    new Item("Matrices in Erlang: Growth Projections ", "growth projections erlang efficiency jupyter mathematics", "jupyter/growth_projections"),
    new Item("Matrices in Erlang: Implementation", "erlang efficiency jupyter mathematics", "jupyter/matrix_implementations_pt1"),
    new Item("Empirical Growth Testing", "growth projections efficiency jupyter mathematics", "jupyter/Empirical_growth_testing")      
]);

export const filtered = derived(
    [term, items],
    ([$term, $items]) => $items.filter(x => x.Tags.includes($term) || x.Name.includes($term))
);
