<script>
  let active = "";
  export let href = "/";

  export function handleMouseOver() {
    active = " active ";
  }
  export function handleMouseOut() {
    active = "";
  }
</script>

<li class={"nav-item" + active + $$props.class}>
  <span class={"link-text" + active}>
    
    <a {href} class="nav-item"><slot>Missing</slot></a></span
  >
  
</li>

<style>
  .link-text.active {
    filter: grayscale(0%) opacity(1);
  }

  .nav-item {
    height: 5rem;
    width: 100%;
  }
 .nav-link {
    display: flex;
    align-items: center;
    height: 5rem;
    color: var(--text-primary);
    text-decoration: none;
    background: none;
    filter: grayscale(100%) opacity(0.7);
    transition: var(--transition-speed);
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

  .logo {
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 1rem;
    text-align: center;
    color: var(--text-secondary);
    background: none;
    font-size: 1.5rem;
    letter-spacing: 0.3ch;
    width: 100%;
  }

  .logo-text {
    display: inline;
    position: absolute;
    left: -999px;
    transition: var(--transition-speed);
  }

  /* Small screens */
  @media only screen and (max-width: 600px) {
    .navbar {
      bottom: 0;
      width: 100vw;
      height: 5rem;
    }

    .logo {
      display: none;
    }

    .navbar-nav {
      flex-direction: row;
    }

    .nav-link {
      justify-content: center;
    }
  }

  /* Large screens */
  @media only screen and (min-width: 600px) {
    .active.link-text {
      display: inline;
      transition: var(--transition-speed);
    }

    .active.logo .nav-link svg {
      margin-left: 11rem;
    }
    .active.nav-link .logo-text {
      left: 0px;
    }
  }
</style>
