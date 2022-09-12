<script>
    import { term } from "./PostList";
    let val = "";
    $: term.set(val);
</script>

<!-- <label for="searchInput">Search</label> -->
<input class="rounded-input" bind:value={val} type="text" id="searchInput" />

<style>
    .rounded-input {
        text-align: center;
        font-size: 2rem;
        margin-left: 2.5%;
        width: 95%;
        padding: 0.3rem;
        border-radius: 1rem;
    }
</style>
