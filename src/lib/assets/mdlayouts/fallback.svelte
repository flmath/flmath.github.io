<script lang="ts">
  export let children: () => any;


</script>
<span class="container">
  
{@render children?.()}
</span>

<style>
    .container {
        position: relative;
        margin: 0;
        /* -webkit-backdrop-filter: blur(3px);
    backdrop-filter: blur(3px); */

    }
   
    span {
        
        margin-left: 15%;
        margin-right: 15%;
        padding: 1rem;
        
        visibility: visible;
    }
</style>