<script>
    import { onMount } from "svelte";
	import { theme } from '$lib/components/theme.svelte';
  
    let mounted = $state(false);

    /**
     * @type {string | null | undefined}
     */
    let HTML = $state(null);
    let iframeElement = $state(null); // Reference to the iframe DOM element
  

    onMount(async () => {
        HTML = (await import("./page.html?raw")).default;
        mounted = true;
    });

	function styleIframeContent() {
		if (!iframeElement?.contentDocument) return;

		const body = iframeElement.contentDocument.body;
		if (!body) return;

		const rootStyle = getComputedStyle(document.documentElement);
		const bgColor = rootStyle.getPropertyValue('--bg-primary').trim();
		const textColor = rootStyle.getPropertyValue('--text-primary').trim();

		body.style.backgroundColor = bgColor;
		body.style.color = textColor;
	}

    function onLoad() {
	    styleIframeContent();
    }

$effect(() => {
        $theme.darkstate
        styleIframeContent();
})
</script>

<iframe title="jupyter" srcdoc={HTML} bind:this={iframeElement} onload={onLoad}></iframe>

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
