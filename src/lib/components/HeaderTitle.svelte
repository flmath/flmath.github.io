<script lang="ts">
  export let children: () => any;
  </script>
<br />
<div class="outer">
  <div class="middle"><h1>{@render children?.()}</h1><div class="inter"></div></div>
</div>
<br />

<style>
  .outer {
    width: 100%;
    opacity: 0.85;
    height: 3rem;
    margin: 0;
    border: 0;
    margin-bottom: 26px;
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

  .middle {
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

  .inter {
    display: flex;

    width: 60%;
    padding: 0;
    margin: 0;
    height: 100%;
    margin-left: auto;
    margin-right: -15%;

    background-color: rgba(188, 33, 34, 1);
  }

  h1 {
    color: rgba(0, 0, 0, 1);
    padding: 0;
    font-size: 1.8rem;
    margin: auto;
    margin-left: 20%;
    text-align: left;
    vertical-align: middle;
    transform: skewX(50deg);
  }
</style>
