<script>
    import { onMount } from "svelte";

    let mounted = false;
    /**
     * @type {string | null | undefined}
     */
    let HTML;

    onMount(async () => {
        HTML = (await import("./page.html?raw")).default;
        mounted = true;
    });
</script>

<iframe title="jupyter" srcdoc={HTML}></iframe>

{#if !mounted}
    <p>Loading...</p>
{/if}

<style>
    iframe {
        width: 100%;
        height: 100vh;
        margin: 0;
        padding: 0;
        border: 0;
    }
</style>
