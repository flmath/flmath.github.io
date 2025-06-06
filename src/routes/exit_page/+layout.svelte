<script lang="ts">
 let { children } = $props();

</script>

<body style="background-image: none">
  {@render children?.()} 
</body>

<style>
  body {
    position: absolute;
    z-index: 2;
    margin: 0;
    padding: 0;
    min-height: 100vh;
    height: 100%;
    top: 0;
  }

  body::-webkit-scrollbar {
    width: none;
    display: none;
  }
  body::-webkit-scrollbar-track {
    background: #ffffff;
    display: none;
  }
  body::-webkit-scrollbar-thumb {
    background: #ffffff;
    display: none;
  }

</style>
