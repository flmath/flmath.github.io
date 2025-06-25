
<script lang="ts">
	export let children: () => any;

</script>
{@render children?.()}
<style>


:global(.container-wrapper a) {
  color: var(--link-text);
}
:global(.container-wrapper) {
  visibility: visible;

  background: var(--bg-glass);
  color: var(--text-article);
  border-radius: 16px;
  box-shadow: 0 4px 30px var(--bg-glass-shadow);
  backdrop-filter: blur(6.4px);
  -webkit-backdrop-filter: blur(6.4px);
  border: 1px solid var(--contain-border);

  
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
  :global(.outer-wrapper) {
    width: 100%;
    opacity: 0.85;
    height: 3rem;
    margin: 0;
    padding: 0;

    display: flex;
    /* linear-gradient(to right top, #fdfdfd, #f3f3f3, #f1f1f1, #eeeeee, #fdfdfd); */

    background-color: rgb(0, 191, 255);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(6.4px);
    -webkit-backdrop-filter: blur(6.4px);

    /* background: linear-gradient(
      167deg,
      rgba(0, 191, 255, 1) 16%,
      rgba(255, 255, 0, 1) 56%,
      rgba(188, 33, 34, 1) 100%
    ); */
  }

  :global(.middle-wrapper) {
    display: flex;
    width: 85%;
    padding: 0;
    margin: 0;
    height: 100%;
    margin-left: auto;
    margin-right: -1%;

    background-color: rgba(255, 255, 0, 1);
    transform: skewX(-50deg);
  }

  :global(.inter-wrapper) {
    display: flex;

    width: 60%;
    padding: 0;
    margin: 0;
    height: 100%;
    margin-left: auto;
    margin-right: -15%;

    background-color: rgba(188, 33, 34, 1);
  }

  :global(.h2-wrapper) {
    color: rgba(255, 255, 255, 1);
    padding: 0;
    margin: auto;
    margin-left: 10%;
    text-align: left;
    vertical-align: middle;
    transform: skewX(50deg);
  }
  :global(.h1-wrapper) 
    {
    color: rgba(0, 0, 0, 1);
    padding: 0;
    margin: auto;
    margin-left: 20%;
    text-align: left;
    vertical-align: middle;
    transform: skewX(50deg);
  }

</style>