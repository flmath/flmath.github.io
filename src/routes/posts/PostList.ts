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
    new Item("Erlang dbg use scenarios", "erlang otp dbg debugger programming tracing trace", "ErlangDBG"),
    new Item("Every answer is right if the question is wrong.", "overfitting interpolation puzzle solutions bias mathematics", "jupyter/Interpolation"),
    new Item("Matrices in erlang: growth projections ", "growth projections erlang efficiency jupyter mathematics", "jupyter/GrowthProjections"),
    new Item("Empirical growth testing", "growth projections efficiency jupyter mathematics", "jupyter/MatricesInErlang"),
    new Item("Matrices in erlang", "erlang efficiency jupyter mathematics", "jupyter/Interpolation"),   
]);

export const filtered = derived(
    [term, items],
    ([$term, $items]) => $items.filter(x => x.Tags.includes($term) || x.Name.includes($term))
);