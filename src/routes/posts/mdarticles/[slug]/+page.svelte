<script lang="ts">
  import type { PageData } from './$types';

  // The 'data' prop is automatically populated by SvelteKit
  // with the result from the `load` function in `+page.ts`.
  export let data: PageData;
</script>

{#if data.PostContent && data.metadata}
  <article class="prose lg:prose-xl dark:prose-invert max-w-none">
    <h1>{data.metadata.title || 'Article'}</h1>
    <p><em>Tags: {data.metadata.tags?.join(', ') || 'No tags'}</em></p>
    <!-- Add other metadata you want to display, e.g., date -->
    <svelte:component this={data.PostContent} />
  </article>
{:else}
  <!-- This part should ideally not be reached if the load function throws a 404 -->
  <p>Sorry, this post could not be loaded or was not found.</p>
{/if}

<style>
  /* You can add specific styles for your article layout here */
  /* The example uses TailwindCSS prose classes for basic markdown styling */
</style>