<script lang="ts">
  import ImposibleCubeSvg from "$lib/svg/ImposibleCubeSvg.svelte";
  import NavLink from "../lib/NavLink.svelte";
  import LogoElement from "../lib/LogoElement.svelte";
  import Penrose3 from "$lib/png/Penrose3.svelte";
  import Reutersward from "$lib/svg/Reutersward.svelte";
  import { page } from "$app/stores";
  import { onMount } from "svelte";

  type NavElement = LogoElement | NavLink;
  let hover: NavElement[] = [];
  let currentPageId = $page.routeId;

  onMount(async () => await handleChange());

  $: if (currentPageId !== $page.routeId) handleChange();

  function handleChange() {
    hover.forEach((element) => {
      element.handleMouseOver();
      element.handleMouseOut();
    });
  }

  function handleMouseOver(e: Event) {
    hover.forEach((element) => {
      element.handleMouseOver();
    });
  }

  function handleMouseOut(e: Event) {
    hover.forEach((element) => {
      element.handleMouseOut();
    });
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

<body class="background">
  <nav
    class="navbar"
    on:mouseenter={handleMouseOver}
    on:mouseleave={handleMouseOut}
  >
    <ul class="navbar-nav">
      <LogoElement bind:this={hover[0]}>
        <span slot="text">Start</span>
      </LogoElement>

      <NavLink href="/posts" bind:this={hover[1]}>
        <Penrose3 slot="picture" /> <span slot="text">Posts</span></NavLink
      >
      <NavLink href="/curriculum_vitae" bind:this={hover[2]}
        ><ImposibleCubeSvg slot="picture" />
        <span slot="text">CV</span></NavLink
      >

      <NavLink class="last" href="/exit_page" bind:this={hover[3]}
        ><Reutersward slot="picture" /><span slot="text">Out</span></NavLink
      >
    </ul>
  </nav>

  <main>
    <slot />
  </main>
</body>

<style>
  body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    height: 100%;
  }
  .background {
    color: black;

    background-color: var(--bg-primary);

    margin: 0;
    padding: 0;
    /*based on  https://github.com/Yuvrajchandra/CSS-Background-Patterns/tree/main/1.%20The%20Black%20Hexagons with MIT license*/

    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='92' height='162' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd' %3E%3Cg id='hexagons' fill='%239C92AC' fill-opacity='0.08' fill-rule='nonzero'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");  
  
    background-attachment: fixed;


 
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
  main {
    margin-left: 8rem;
    width: calc(100vw - 8rem);
    max-width: calc(100% - 8rem);
    padding: 1rem;
    height: 100%;
    
  }
  .navbar {
    position: fixed;
    z-index: 100;
    background-color: var(--bg-primary);
    transition: width var(--transition-speed) ease;
    background-image: url("$lib/assets/bg.webp");
    background-size: 18rem auto;
    filter: opacity(0.8) brightness(1.1);
    

    /*overflow: scroll;*/
  }
  .navbar-nav {
    list-style: none;
    padding: 0;
    margin-left: 1rem;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: left;
    height: 100vh;
    filter: brightness(0.9);
    
  }

  .navbar-nav :global(.last) {
    margin-top: auto;
    margin-bottom: 1rem;
  }
  /* Small screens */
  @media only screen and (max-width: 600px) {
    .navbar {
      bottom: 0;
      width: calc(100% - 8rem);
      height: 8rem;
      
    }
    .navbar-nav {
      flex-direction: row;
      
    }
    main {
      margin: 0;
      width: calc(100% - 8rem);
      max-width: 100%-8rem;
    }
  }
  /* Large screens */
  @media only screen and (min-width: 600px) {
    .navbar {
      top: 0;
      width: 8rem;
      
    }
    main {
      width: calc(100% - 10rem);
      max-width: calc(100% - 10rem);
      
    }

    .navbar:hover {
      width: 18rem;
      filter: opacity(1) brightness(1.1);      
    }
  }
</style>
