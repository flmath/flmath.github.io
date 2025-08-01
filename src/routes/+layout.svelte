<script lang="ts">
  import ImposibleCubeSvg from "$lib/svg/ImposibleCubeSvg.svelte";
  import NavLink from "$lib/components/NavLink.svelte";
  import LogoElement from "$lib/components/LogoElement.svelte";
  import Penrose3 from "$lib/png/Penrose3.svelte";
  import Reutersward from "$lib/svg/Reutersward.svelte";
  import { page } from "$app/state";
  import { onMount } from "svelte";
	import DarkLight from "$lib/components/DarkLight.svelte";
  import { theme } from '$lib/components/theme.svelte';
  
  type NavElement = LogoElement | NavLink;
  let hover: NavElement[] = $state([]);
  let darkMode = $state(false);
  let activeText = $state(false);
  let currentPageId = page.route.id;
  
	let { children } = $props();

  onMount(async () => (currentPageId = "/"));

   $effect(() => {
     //if (currentPageId !== page.route.id)
     handleChange(); 
   });

   function handleChange() {
     hover.forEach((element) => {
      element.handleCheckActive();
     });
   }

  function handleMouseOver(e: Event) {
    activeText = true;
  }

  function handleMouseOut(e: Event) {
    activeText = false;
  }
</script>

<svelte:head>
  <title>Mathias Green personal pages</title>
  <meta charset="UTF-8" />
  <meta
    name="description"
    content="My questions to life, the universe, and everything."
  />
  <meta name="keywords" content="Erlang, Programming, Mathematics" />
  <meta name="author" content="Mathias Green" />
</svelte:head>

  <nav
    class="navbar"
    onmouseenter={handleMouseOver}
    onmouseleave={handleMouseOut}
  >
    <ul class="navbar-nav">
        <LogoElement text="Start" activeText={activeText} href='/' bind:this={hover[0]}>
        </LogoElement>

      <NavLink picture={Penrose3} text="Posts" href="/posts" bind:activeText={activeText} bind:this={hover[1]} />
      <NavLink picture={ImposibleCubeSvg} text="CV" href="/curriculum_vitae" bind:activeText={activeText} bind:this={hover[2]} />
      <NavLink picture={Reutersward} klass="reutersward" text="Bench" href="/exit_page" bind:activeText={activeText} bind:this={hover[3]} />
      <DarkLight textlight="Light Mode" textdark="Dark Mode" klass="last" 
      bind:this={hover[4]} 
      bind:activeText={activeText}
      theme={theme}
      darkMode={darkMode}></DarkLight>



    </ul>
  </nav>
<main>
  {@render children?.()} 
</main>

<style>
  
  :global(.root) {
    margin: 10rem;
    height: 100%;

    /* color: black; */
    /* background-color: var(--bg-primary);  */
    /*based on  https://github.com/Yuvrajchandra/CSS-Background-Patterns/tree/main/1.%20The%20Black%20Hexagons with MIT license*/
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='92' height='162' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd' %3E%3Cg id='hexagons' fill='%239C92AC' fill-opacity='0.08' fill-rule='nonzero'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E ");
    background-attachment: fixed;
    background-position: center;
  }
  .navbar {
    position: fixed;
    z-index: 100;
     background-color: var(--bg-primary); 
     background-image: url("$lib/assets/bg.webp"); 
    filter: opacity(0.8) brightness(1.1) invert(var(--nav-invert));
    /*overflow: scroll;*/
    -webkit-filter: invert(var(--nav-invert)); 
  }
  .navbar-nav {
    /* background-color: var(--bg-primary); 
    color: var(--text-primary); */
         
    list-style: none; 
    padding: 0;
    margin: 0;
    display: flex;
    filter: brightness(0.9) ;
  }
  /* Small screens */
  @media only screen and (max-width: 900px) {
  :global(.root) {
    padding-bottom: 1rem;
   }
    main {
      padding-bottom: 8rem;
      margin-bottom: 8rem;
      height: calc(100% - 8rem);
      max-height: calc(100% - 8rem);
      width: 100%;
      max-width: 100%;
    

    }
    .navbar {
      padding-top: 1rem;
      bottom: 0;
      width: 100%;
      height: 6rem;
      transition: height var(--transition-speed) ease;
      filter: opacity(1) invert(var(--nav-invert));
      -webkit-filter: invert(var(--nav-invert)); 
      background-size: cover;
    }
    .navbar:hover {
      /* width: 100%;
      height: 10rem; */
      filter: opacity(1) brightness(1.1) invert(var(--nav-invert));
      -webkit-filter: invert(var(--nav-invert));
    }

    .navbar-nav {
      flex-direction: row;
      margin-left: 1rem;
    }
    .navbar-nav :global(.last) {
      scale: 0.8;
      transform: translateY(-1.5rem);
      margin-right: 1rem;
      margin-left: auto;
    }
    .navbar-nav :global(.reutersward) {
      scale: 0.8;
      transform: translateY(-1.5rem);
      margin-right: 1rem;
      margin-left: 1rem;
    }
  }
  /* Large screens */
  @media only screen and (min-width: 900px) {
  :global(.root) {
    padding-bottom: 8rem;
   }
    main {
      width: calc(100% - 8rem);
      max-width: calc(100% - 8rem);
      height: 100%;
      margin-left: 8rem;
    }
    .navbar-nav {
      flex-direction: column;
      align-items: left;
      height: 100vh;
    }

    .navbar-nav :global(.last) {
      margin-top: auto;
      margin-bottom: 2rem;
    }

    .navbar-nav :global(.reutersward) {
      margin-top: 1.5rem;
    }

    .navbar {
      top: 0;
      width: 8rem;
      transition: width var(--transition-speed) ease;
      background-size: 18rem auto;
    }

    .navbar:hover {
      width: 18rem;
      filter: opacity(1) brightness(1.1) invert(var(--nav-invert));
      -webkit-filter: invert(var(--nav-invert));
    }
  }
</style>
