<script>
  import ImposibleCubeSvg from "$lib/svg/ImposibleCubeSvg.svelte";
  import NavLink from "../lib/NavLink.svelte";
  import LogoElement from "../lib/LogoElement.svelte";
  import Penrose3 from "$lib/png/Penrose3.svelte";
  import Reutersward from "$lib/svg/Reutersward.svelte";

  /**
   * @type {LogoElement[] | NavLink[]}
   */
  let hover = [];

  function handleMouseOver(e) {
    hover.forEach((element) => {
      element.handleMouseOver();
    });
  }
  function handleMouseOut(e) {
    hover.forEach((element) => {
      element.handleMouseOut();
    });
  }
</script>

<body>
  <!-- svelte-ignore a11y-mouse-events-have-key-events -->
  <nav
    class="navbar"
    on:mouseover={handleMouseOver}
    on:mouseout={handleMouseOut}
  >
    <ul class="navbar-nav">
      <LogoElement bind:this={hover[0]}>
        <span slot="text"> Main </span>
      </LogoElement>

      <NavLink href="/" bind:this={hover[1]}>
        <Penrose3 slot="picture" /> <span slot="text">Home</span></NavLink
      >
      <NavLink href="/cv" bind:this={hover[2]}
        ><ImposibleCubeSvg slot="picture" />
        <span slot="text">CV</span></NavLink
      >

      <NavLink class="last" href="error" bind:this={hover[3]}
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
    padding: 1rem;
  }

  .navbar {
    position: fixed;
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
      width: 100vw;
      height: 8rem;
    }

    .navbar-nav {
      flex-direction: row;
    }

    main {
      margin: 0;
    }
  }

  /* Large screens */
  @media only screen and (min-width: 600px) {
    .navbar {
      top: 0;
      width: 8rem;
    }

    .navbar:hover {
      width: 17rem;
      filter: opacity(1);
    }

     }
</style>
