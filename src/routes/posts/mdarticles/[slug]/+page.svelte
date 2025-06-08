<script lang="ts">
  // import type { PageData } from './[slug]/$types';

  import HeaderShort from '../../HeaderShort.svelte';
  import type { PageData } from './$types';
	import HeaderTitle from '../../HeaderTitle.svelte';
  // The 'data' prop is automatically populated by SvelteKit
  // with the result from the `load` function in `+page.ts`.
  export let data: PageData;
  const formatDate = (date: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    return new Date(date).toLocaleDateString('en-SE', options);
  };
</script>
<!-- <pre>
  {JSON.stringify(data, null, 2)} 
  <hr />
</pre> -->
  <!-- <span>PostContent: {data.PostContent}</span> -->
{#if data.PostContent && data.metadata}
    <br />
    <HeaderShort> Date: {formatDate(data.metadata.date) || 'No date'}</HeaderShort>
    <HeaderTitle>{data.metadata.title || data.slug}</HeaderTitle>
    <HeaderShort>Tags: {data.metadata.tags?.join(', ')  || 'No tags '}&nbsp; &nbsp;</HeaderShort>
  <article class="prose lg:prose-xl dark:prose-invert max-w-none">
    <svelte:component this={data.PostContent} />
  </article>
{:else}
  <!-- This part should ideally not be reached if the load function throws a 404 -->
  <p>Sorry, this post could not be loaded or was not found.</p>
{/if}

<style>

article {
    position: relative;
    margin: 0;
    min-width: 100vw;
    min-height: 100vh;    

    color: black;
    background-color: var(--bg-primary);

    /*based on  https://github.com/Yuvrajchandra/CSS-Background-Patterns/tree/main/1.%20The%20Black%20Hexagons with MIT license*/
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='92' height='162' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd' %3E%3Cg id='hexagons' fill='%239C92AC' fill-opacity='0.08' fill-rule='nonzero'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E ");
    background-attachment: fixed;
  
    background-position: center;
  } 
</style>