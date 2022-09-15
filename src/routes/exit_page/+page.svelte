<script lang="ts">
    import Particles from "svelte-particles";
    import { loadFull } from "tsparticles";
    import particlesConfig from "$lib/assets/json/particles.json";

    particlesConfig.background.color.value = "var(--bg-primary)";

    let onParticlesLoaded = (event) => {
        const particlesContainer = event.detail.particles;
        // you can use particlesContainer to call all the Container class
        // (from the core library) methods like play, pause, refresh, start, stop
    };

    let particlesInit = async (engine) => {
        // you can use main to customize the tsParticles instance adding presets or custom shapes
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    };
</script>

<a href="/posts">
   <div> It was planed as the main page, but it is to resource heavy.
     Bad performance,bad SEO.</div>
</a>
<main>
    {#await particlesInit}
        " "
    {:then res}
        <Particles
            id="tsparticles"
            options={particlesConfig}
            on:particlesLoaded={onParticlesLoaded}
            {particlesInit}
        />
    {:catch error}
        <p style="color: red">{error.message}</p>
    {/await}
</main>

<style>
    a {
        z-index: 1;
        margin-right: 5%;
        font-size: 2rem;
        text-align: center;
        letter-spacing: 0.3ch;
        text-decoration: none;
        color: var(--text-secondary);
        background-color: none;
        height: 100vh;
        width: 90%;
        position: absolute;
    }
    main {
        color: var(--text-secondary);
        width: 100%;
        font-size: 2rem;
        letter-spacing: 0.3ch;
        text-decoration: none;
        background-color: var(--bg-primary);
        text-align: center;
      
        max-width: 240px;
        margin: 0 auto;
    }
    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    }
</style>
