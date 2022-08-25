<script>
	import NavLink from '../lib/NavLink.svelte';
  import LogoElement from "../lib/LogoElement.svelte";

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

        <g class="fa-group" slot="svg">
          <path
            fill="currentColor"
            d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
            class="fa-secondary"
          />
          <path
            fill="currentColor"
            d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
            class="fa-primary"
          />
        </g>
      </LogoElement>

<NavLink href="/" bind:this={hover[1]}>Home</NavLink>

      <li class="nav-item">
        <span class="link-text"> <a href="/" class="nav-item">Home</a></span>
      </li>
      <li class="nav-item">
        <span class="link-text"> <a href="/cv" class="nav-item">CV</a></span>
      </li>
      <li class="nav-item">
        <span class="link-text">
          <a href="/error" class="nav-item">Error</a></span
        >
      </li>
    </ul>
  </nav>

  <main>
    <slot />
  </main>
</body>

<style>
  :root {
    font-size: 16px;
    font-family: "MS Open Sans";
    --text-primary: #b6b6b6;
    --text-secondary: #ececec;
    --bg-primary: #23232e;
    --bg-secondary: #141418;
    --transition-speed: 600ms;
  }

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

  .nav-item:last-child {
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
