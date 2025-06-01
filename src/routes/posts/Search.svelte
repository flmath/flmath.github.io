<script>
    import { term } from "./PostList";
    let val = "";
    $: term.set(val);
</script>

<!-- <label for="searchInput">Search</label> -->
<label for="searchInput" class="hide">Select Item</label>
<div class="top">
    <input
        class="rounded-input"
        bind:value={val}
        type="text"
        id="searchInput"
    />

    <div class="outer">
        <div class="middle"><div class="inter"></div></div>
    </div>
</div>

<style>
    .hide {
        visibility: hidden;
    }
    .top {
        z-index: 1;
        position: fixed;
        width: 100%;
        display: block;
    }

    .rounded-input {
        position: absolute;
        background-color: rgb(255, 255, 255, 1);

        z-index: 4;
        /* text-align: center; */
        font-size: 2rem;
        margin-top: 1rem;
        margin-left: 2.5%;
        width: calc(90% - 8rem);
        padding: 0.3rem;
        border-radius: 1rem;
        text-indent: 1rem;
    }

    .outer {
        z-index: 1;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0.85;
        height: 5rem;
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

    .middle {
        z-index: 2;
        display: flex;
        width: 40%;
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
        z-index: 3;
        width: 100%;
        padding: 0;
        margin: 0;
        height: 100%;
        margin-left: auto;
        margin-right: -60%;

        background-color: rgba(188, 33, 34, 1);
    }
</style>
