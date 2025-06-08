
<script lang="ts">
	//   import SectionWrapper from '$lib/components/SectionWrapper.svelte';
  import Header from '$lib/components/Header.svelte';
  
	export let children: () => any;
  // This object now maps both custom tags to their Svelte components.
  const components = {
//    'section-wrapper': SectionWrapper,
    'Header': Header,
  };
</script>
<slot {components} />

<style>



:global(.container-wrapper) {
  visibility: visible;

  background: rgba(255, 255, 255, 0.33);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(6.4px);
  -webkit-backdrop-filter: blur(6.4px);
  border: 1px solid rgba(255, 255, 255, 0.4);

  
	position: relative;
	margin: 0;
	margin-left: 10px;
	margin-right: 5px;
	border-left: 5px;
	border-right: 5px;

	padding-left: 5px;
	padding-right: 5px;
	min-width: 80vw;
	width: calc(100vw - 175px);
	overflow-wrap: break-word;
	word-break: break-word;
	}


</style>