<svelte:head>
  <title> Mathias Green personal pages</title>
  <meta charset="UTF-8">
  <meta name="description" content="My questions to life, the universe, and everything.">
  <meta name="keywords" content="Erlang, Programming, Mathematics">
  <meta name="author" content="Mathias Green">
</svelte:head>

<script lang="ts">
  import ImposibleCubeSvg from "$lib/svg/ImposibleCubeSvg.svelte";
  import NavLink from "../lib/NavLink.svelte";
  import LogoElement from "../lib/LogoElement.svelte";
  import Penrose3 from "$lib/png/Penrose3.svelte";
  import Reutersward from "$lib/svg/Reutersward.svelte";

  type NavElement = LogoElement | NavLink;
  let hover: NavElement[] = [];

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

<body>
  
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

      <NavLink class="last" href="exit_page" bind:this={hover[3]}
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
    width: 100vw-8rem;
    max-width: 100%-8rem;
    padding: 1rem;
  }
  .navbar {
    position: fixed;
    z-index: 100;
    background-color: var(--bg-primary);
    transition: width var(--transition-speed) ease;
    background-image: url("$lib/assets/bg.webp");
    background-size: cover;
    filter: opacity(0.8);

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
  }

  .navbar-nav :global(.last) {
    margin-top: auto;
    margin-bottom: 1rem;
  }

  /* Small screens */
  @media only screen and (max-width: 600px) {
    .navbar {
      bottom: 0;
      width: 100%-8rem;
      height: 8rem;
    }

    .navbar-nav {
      flex-direction: row;
    }

    main {
      margin: 0;
      width: 100%-8rem;
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
    width: 100%-8rem;
    max-width: 100%-8rem;
   
  }

    .navbar:hover {
      width: 18rem;
      filter: opacity(1);
    }
  }
</style>
