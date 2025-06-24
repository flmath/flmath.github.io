<script lang="ts">
    import { onMount } from "svelte";
    import { fade } from "svelte/transition";
    import front from "$lib/png/small.webp";
    import back from "$lib/png/smallmask.webp";
    import dark from "$lib/png/castlea.webp"
import { theme } from '$lib/components/theme.svelte';
    function sleep(ms: number) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    let loaded = false;
    let animate = false;
    onMount(async () => {
        animate = true;
        await sleep(4000);
        loaded = true;
    });
</script>
{#if theme.isMoon()}
        <div class="container">
        <a href="/posts">
           <h3> Each and every answer is right when the question is wrong.</h3>
        </a>

        <div class="background1" style="background-image: url('{dark}')">
           
        </div>
    </div>
{:else}
{#if animate}
    <div class="container">
        <a href="/posts">
           <h3> Each and every answer is right when the question is wrong.</h3>
        </a>

        <div class="background1" style="background-image: url('{front}')">
            <div class="water" style="background-image: url('{back}')"> </div> 
        </div>
    </div>
{/if}

{#if animate}
    <div in:fade>
        {#if loaded}
            <svg>
                <filter id="turbulence" x="0" y="0" width="100%" height="100%">
                    <feTurbulence
                        id="sea-filter"
                        numOctaves="3"
                        seed="2"
                        baseFrequency="0.02 0.05"
                    />
                    <feDisplacementMap scale="20" in="SourceGraphic" />
                    <animate
                        xlink:href="#sea-filter"
                        attributeName="baseFrequency"
                        dur="300s"
                        keyTimes="0;0.5;1"
                        values="0.02 0.06;0.04 0.08;0.02 0.06"
                        repeatCount="indefinite"
                    />
                </filter>
            </svg>
        {:else}
            <svg>
                <filter id="turbulence" x="0" y="0" width="100%" height="100%">
                    <feTurbulence
                        id="sea-filter"
                        numOctaves="3"
                        seed="2"
                        baseFrequency="0.02 0.05"
                    />
                    <feDisplacementMap scale="20" in="SourceGraphic" />
                </filter>
            </svg>
        {/if}
    </div>
{/if}
{/if}

<style>
h3{
   font-family: 'Brush Script MT', cursive;
   font-size: 3rem;
   text-align: center;
   color: var(--text-primary); 
}

.container {
        position: absolute;
        background: var(--bg-container-main);
        
        height: 100%;
        padding: 0;
        padding-top: 2rem;
        top: 0;
        margin: 0;
        overflow: clip;
    }
    .background1 {
        margin-bottom: 0;
        margin-top: auto;
        height: 100%;
        width: 100%;

        background-repeat: no-repeat;
        background-size: 100% auto;
        background-position: bottom;
        min-width: calc(100% - 8rem);
        overflow: clip;
    }
    .background1 .water {
        margin-bottom: 0;
        margin-top: auto;
        background-repeat: no-repeat;
        background-size: 100% auto;
        background-position: bottom;
        height: 100%;
        width: 100%;
        min-width: 100%;
        filter: url("#turbulence");
        overflow: clip;
    }

    a {
        font-size: 2rem;
        text-align: center;
        letter-spacing: 0.3ch;
        text-decoration: none;
        color: var(--text-primary);
        background-color: none;
        height: 100%;
        position: absolute;
        overflow: clip;
        z-index: 2;
    }

    @media only screen and (min-width: 900px) {
        .container {
            width: calc(100% - 8rem);
            left: 8rem;
            min-width: calc(100% - 8rem);
        }

        a {
            width: calc(100% - 10rem);
            margin-left: 2rem;
        }
    }
    @media only screen and (max-width: 900px) {
        .container {
            width: 100%;
            left: 0rem;
            min-width: 100%;
        }
        a {
            width: calc(100% - 6rem);
            margin-left: 2rem;
        }
    }
</style>
