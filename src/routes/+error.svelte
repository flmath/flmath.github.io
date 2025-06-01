<script lang="ts">
    import { page } from "$app/state";
</script>

<a href="/">
    <div class="glass container">
        <br />
        <h1>{page.status}</h1>
        <h1>{page.error?.message}</h1>
    </div>
</a>

<style>
    /* @import url(//db.onlinewebfonts.com/c/20143c892228cf6a5a1510b56d583dca?family=Exocet); */
    .container {
        font-family: Creepster;
        color: rgb(0, 89, 255);

        width: 100%;
        height: 100vh;
        padding: 0;
        margin: 0;
        overflow: clip;
        align-items: center;
        text-align: center;
        /* background: linear-gradient(  167deg,rgba(50, 0, 0, 0.85) 5%, rgba(0, 0, 50, 0.95) 46%,   rgba(0, 0, 0, 1) 100% );  */
    }

    h1 {
        color: red;
        font-family: Creepster;
    }
    a {
        font-family: Creepster;
        margin: 0;
        padding: 0;
        width: 100%;
        font-size: 2rem;
        text-align: center;
        letter-spacing: 0.3ch;
        text-decoration: none;
        color: var(--text-primary);
        height: 100%;
        overflow: clip;
    }
    @font-face {
        font-family: "Creepster";
        src: url("$lib/assets/fonts/Creepster-Regular.ttf");
        font-style: normal;
        font-weight: 400;
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
            U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
            U+2212, U+2215, U+FEFF, U+FFFD;
    }
</style>
