<script>
  import { fade } from "svelte/transition";
  let active = "";
  export let href = "/";

  export function handleMouseOver() {
    active = " active ";
  }
  export function handleMouseOut() {
    active = " ";
  }
</script>

<!-- <div>{"nav-item " + active + (undefined == $$props.class ? " " : $$props.class)}</div> -->
<li
  class={"nav-item " +
    active +
    (undefined == $$props.class ? " " : $$props.class)}
>
  <a {href}>
    <slot name="picture">Picture</slot>
  </a>
  {#if active === " active "}
    <a {href} class="item-text" in:fade={{ duration: 300, delay: 200 }}>
      <slot name="text">Missing</slot>
    </a>
  {/if}
</li>

<style>
  .nav-item {
    margin-left: 1rem;
    margin-bottom: 2rem;
    display: flex;
    align-items: center;
    height: 5rem;
    color: var(--text-primary);
    text-decoration: none;
    background: none;
    filter: grayscale(100%) opacity(0.7);
    transition: var(--transition-speed);
  }

  .nav-item.active {
    filter: opacity(1);
  }

  .item-text {
    font-weight: bold;
    text-transform: uppercase;

    margin-top: 1rem;
    margin-bottom: 1rem;
    text-align: center;
    vertical-align: middle;
    background: none;
    color: var(--text-secondary);
    width: 100%;
    font-size: 2rem;
    letter-spacing: 0.3ch;
    text-decoration: none;
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
  }

  /* Large screens */
  @media only screen and (min-width: 600px) {
  }
</style>
