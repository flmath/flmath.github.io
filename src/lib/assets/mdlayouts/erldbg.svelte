
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
overflow-wrap: break-word;
word-break: break-word;   

    }
:global(pre code[class*="language-erlang"]) {
  word-break: break-word; 
  overflow-wrap: break-word; /* Breaks words only if they don't fit */
  white-space: pre-line ; /* Preserves whitespace and wraps lines */
}

    span {
        
        margin-left: 15%;
        margin-right: 15%;
        padding: 1rem;
        visibility: visible;
    }
</style>
