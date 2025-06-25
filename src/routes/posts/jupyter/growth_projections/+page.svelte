<script>

	import { theme } from '$lib/components/theme.svelte';
    import HTML from "./page.html?raw";
    /**
     * @type {string | null | undefined}
     */
    let iframeElement = $state(null); // Reference to the iframe DOM element
    let visible = $state(false);
    let textColor = $state("black");
    let bgColor = $state("white");

	function styleIframeContent() {
		if (!iframeElement?.contentDocument) return;

		const body = iframeElement.contentDocument.body;
		if (!body) return;

		const rootStyle = getComputedStyle(document.documentElement);
		bgColor = rootStyle.getPropertyValue('--bg-primary').trim();
		textColor = rootStyle.getPropertyValue('--text-primary').trim();
		body.style.backgroundColor = bgColor;
		body.style.color = textColor;
        visible = true;  
     
	}
    function onLoad() {
	    styleIframeContent();
    }

$effect(() => {
    $theme.darkstate
    if(visible){styleIframeContent()};
})
</script>

<iframe title="jupyter" srcdoc={HTML} bind:this={iframeElement} onload={onLoad}
     style="visibility:{visible ? "visible" : "hidden"};
     background-color: {bgColor};
     color: {textColor};"
     ></iframe> 

{#if !visible}
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
