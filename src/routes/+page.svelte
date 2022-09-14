<script lang="ts">
    import front from "$lib/png/small.webp";
    import back from "$lib/png/smallmask.webp";

  
</script>

<div class="container">
    <a href="/posts">
        It is just a loading page for SEO. Click to go to the postlist.
    </a>

    <div class="background" style="background-image: url('{front}')">
        <div class="water" style="background-image: url('{back}')" />
    </div>
 
</div>

<style>
    .container {
        position: absolute;
        background-color: #d2d9df;
        width: calc(100vw - 8rem);
        height: 100vh;
        top: 0;
        overflow: clip;
        left: 8rem;
        
        min-width: calc(100vw - 8rem);
        min-height: 100vh;
    }
    .background {
        margin-bottom: 0;
        margin-top: auto;
        height: 100%;
        width: 100%;
        overflow: clip;
        background-repeat: no-repeat;
        background-size: 100vw auto;
        background-position: bottom;
        min-width: 100%-8rem;
    }
    .background .water {
        margin-bottom: 0;
        margin-top: auto;
        background-repeat: no-repeat;
        background-size: 100vw auto;
        background-position: bottom;
        overflow: clip;
        height: 100%;
        width: 100%;
        min-width: 100%;
        filter: url("#turbulence");
    }

    a {overflow: clip;
        z-index: 2;
        margin-right: 5%;
        margin-left: 5%;
        font-size: 2rem;
        text-align: center;
        letter-spacing: 0.3ch;
        text-decoration: none;
        color: var(--text-primary);
        background-color: none;
        height: 100vh;
        width: 90%;
        position:absolute;
    }



 
</style>
