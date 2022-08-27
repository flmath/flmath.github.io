<script>
	import NavLink from '../lib/NavLink.svelte';
  import LogoElement from "../lib/LogoElement.svelte";
  import LogoSvg from '$lib/LogoSvg.svelte';

  /**
* @type {LogoElement[] | NavLink[]}
*/
  let hover = [];

  function handleMouseOver(e) {
    hover.forEach(element => {
      element.handleMouseOver()
    })
   
  }
  function handleMouseOut(e) {
    hover.forEach(element => {
      element.handleMouseOut()
    })
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
       <LogoSvg slot="svg"></LogoSvg>
      </LogoElement>

<NavLink href="/" bind:this={hover[1]}>Home</NavLink>
<NavLink href="/cv" bind:this={hover[2]}>CV</NavLink>
 
<NavLink class="last" href="error" bind:this={hover[3]}>Error</NavLink>


    </ul>
  </nav>

  <main>
    <slot />
  </main>
</body>

<style>


  body {
    color: black;
    background-color: white;
    margin: 0;
    padding: 0;
  }
  body::-webkit-scrollbar {
    width: none;
    display: none;
  }

  body::-webkit-scrollbar-track {
    background: #1e1e24;
    display: none;
  }

  body::-webkit-scrollbar-thumb {
    background: #6649b8;
    display: none;
  }

  main {
    margin-left: 5rem;
    padding: 1rem;
  }

  .navbar {
    position: fixed;
    background-color: var(--bg-primary);
    transition: width 600ms ease;
    /*overflow: scroll;*/
  }

  .navbar-nav {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
  }

  .nav-item {
    width: 100%;
  }

  .navbar-nav :global(.last){
    margin-top: auto;
  }


  .link-text {
    display: none;
    margin-left: 1rem;
  }


  .fa-primary {
    color: #ff7eee;
  }

  .fa-secondary {
    color: #df49a6;
  }

  .fa-primary,
  .fa-secondary {
    transition: var(--transition-speed);
  }
 
  /* Small screens */
  @media only screen and (max-width: 600px) {
    .navbar {
      bottom: 0;
      width: 100vw;
      height: 5rem;
    }

    .navbar-nav {
      flex-direction: row;
    }

    .nav-link {
      justify-content: center;
    }

    main {
      margin: 0;
    }
  }

  /* Large screens */
  @media only screen and (min-width: 600px) {
    .navbar {
      top: 0;
      width: 5rem;
      height: 100vh;
    }

    .navbar:hover {
      width: 16rem;
    }

    .navbar:hover .link-text {
      display: inline;
    }
  }

  .dark {
    --text-primary: #b6b6b6;
    --text-secondary: #ececec;
    --bg-primary: #23232e;
    --bg-secondary: #141418;
  }

  .light {
    --text-primary: #1f1f1f;
    --text-secondary: #000000;
    --bg-primary: #ffffff;
    --bg-secondary: #e4e4e4;
  }

  .solar {
    --text-primary: #576e75;
    --text-secondary: #35535c;
    --bg-primary: #fdf6e3;
    --bg-secondary: #f5e5b8;
  }

  .theme-icon {
    display: none;
  }

  .dark #darkIcon {
    display: block;
  }

  .light #lightIcon {
    display: block;
  }

  .solar #solarIcon {
    display: block;
  }
</style>
