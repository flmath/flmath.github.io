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
    new Item("Asymetric Cryptography with Openssl", "openssl mathematics crypto ecies rsa elliptic curves", "jupyter/AsymetricCrypto"),  
    new Item("Breaking RSA Certs with Openssl", "openssl rsa crypto", "jupyter/AsymetricBreakCerts"),
    new Item("Erlang dbg use scenarios", "erlang otp dbg debugger programming tracing trace", "ErlangDBG"),
    new Item("Every answer is right if the question is wrong.", "overfitting interpolation puzzle solutions bias mathematics", "jupyter/Interpolation"),
    new Item("Matrices in Erlang: Growth Projections ", "growth projections erlang efficiency jupyter mathematics", "jupyter/GrowthProjections"),
    new Item("Empirical Growth Testing", "growth projections efficiency jupyter mathematics", "jupyter/MatricesInErlang")      
]);

export const filtered = derived(
    [term, items],
    ([$term, $items]) => $items.filter(x => x.Tags.includes($term) || x.Name.includes($term))
);
