<script>
    import Search from "./Search.svelte";
    import ListItems from "./ListItems.svelte";
</script>

<div class="contain">
    <Search />

    <ListItems />
</div>

<style>
    .contain {
        position: relative;
        display: contents;
    }
</style>
