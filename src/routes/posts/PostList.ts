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
    new Item("Interpolation", "overfitting interpolation puzzle solutions bias ", "interpolation")
]);

export const filtered = derived(
    [term, items],
    ([$term, $items]) => $items.filter(x => x.Tags.includes($term) || x.Name.includes($term))
);