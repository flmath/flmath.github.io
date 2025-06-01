
   <script lang="ts">
    import { draw} from 'svelte/transition';
    import { quintOut } from 'svelte/easing';
    export let drawIt = false;
     </script>
   
   <svg viewBox="0 0 5 5" xmlns="http://www.w3.org/2000/svg">
    {#if drawIt}
    <path transition:draw="{{duration: 1500, easing: quintOut}}"
    d="M2 1 h1 v1 h1 v1 h-1 v1 h-1 v-1 h-1 v-1 h1 z"
    fill="none"
    stroke="cornflowerblue"
    stroke-width="0.1px"
    />
{/if}
</svg>











    <style>
    </style>
