
<script lang="ts">
	export let children: () => any;
</script>

<span class="container ">
	{@render children?.()}
</span>

<style>
	.container {
		position: relative;
		margin: 0;
		overflow-wrap: break-word;
		word-break: break-word;
	}
	/* :global(.erldbg * code[class*='language-erlang']) {
		word-break: break-word;
		overflow-wrap: break-word;
		white-space: pre-line; 
	} */

	span {
		margin-left: 15%;
		margin-right: 15%;
		padding: 1rem;
		visibility: visible;
	}
</style>