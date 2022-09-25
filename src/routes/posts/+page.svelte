<script>
    import Search from "./Search.svelte";
    import ListItems from "./ListItems.svelte";
</script>

<div>
    <div class="containS">
        <Search />
    </div>
    <div class="contain">
        <ListItems />
    </div>
</div>

<style>
    .containS {
        z-index: 6;
        position: fixed;
        top: 0;
        width: 100%;
        height: 8rem;
        transform-style: preserve-3d;

        background: rgba(255, 255, 255, 0.83);

        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.7);
        backdrop-filter: blur(6.4px);
        -webkit-backdrop-filter: blur(6.4px);
        border: 1px solid rgba(255, 255, 255, 0.4);
    }
    .contain {
        position: relative;
        display: contents;
    }
</style>
