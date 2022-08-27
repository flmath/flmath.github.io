<script>
  let active = "";

  export function handleMouseOver() {
    active = " active ";
  }
  export function handleMouseOut() {
    active = "";
  }
</script>

<li class={"logo" + active}>
  <a href="/" class="nav-link">
    <span class="link-text logo-text"><slot name="text">Missing</slot></span>
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fad"
      data-icon="angle-double-right"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      class="svg-inline--fa fa-angle-double-right fa-w-14 fa-5x"
    >
      <slot name="svg" />
    </svg>
  </a>
</li>

<style>
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

  .active .nav-link {
    filter: grayscale(0%) opacity(1);

    color: var(--text-secondary);
  }

  .nav-link .link-text {
    display: none;
    margin-left: 1rem;
  }

  .nav-link svg {
    width: 2rem;
    min-width: 2rem;
    margin: 0 1.5rem;
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

  .logo .nav-link svg {
    transform: rotate(0deg);
    transition: var(--transition-speed);
  }

  .logo-text {
    display: inline;
    position: absolute;
    left: -999px;
    transition: var(--transition-speed);
  }

  .active.logo svg {
    transform: rotate(-180deg);
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
    .navbar {
      top: 0;
      width: 5rem;
      height: 100vh;
    }

    .active {
      width: 16rem;
    }

    .active .nav-link .link-text {
      display: inline;
    }

    .active.logo .nav-link svg {
      margin-left: 11rem;
    }
    .active .nav-link .logo-text {
      left: 0px;
    }
  }
</style>
