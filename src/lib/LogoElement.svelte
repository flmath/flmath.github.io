<script lang="ts">
  import { SpinOptions } from "./SpinOptions";
  import Penrose8 from "./svg/Penrose8.svelte";
  import { fade } from "svelte/transition";
  import { sineOut } from "svelte/easing";
  import { page } from "$app/stores";

  let active: string = "";
  let activeText: string = "";

  function spin(node: HTMLElement, spin: SpinOptions) {
    let duration = spin.duration;
    let delay = spin.delay;
    return {
      duration,
      delay,
      css: (t: number) => {
        const eased = sineOut(t);
        return `transform: rotate(${spin.rotations * eased * 360}deg);`;
      },
    };
  }

  function spinBack(node: HTMLElement, spinOpt: SpinOptions) {
    return spin(node, new SpinOptions(spinOpt.duration, spinOpt.delay, -3));
  }
  function spinForward(node: HTMLElement, spinOpt: SpinOptions) {
    return spin(node, new SpinOptions(spinOpt.duration, spinOpt.delay, 3));
  }
  export function handleMouseOver() {
    active = " active ";
    activeText = " active ";
  }
  export function handleMouseOut() {
    activeText = "";
    if ($page.routeId !== "") active = "";
  }
</script>

<li class={"logo" + active}>
  <a href="/" class="nav-link">
    {#if active === ""}
      <span class="button" in:spinBack={new SpinOptions(1000, 0)}>
        <Penrose8 /></span
      >
    {:else}
      <span class="button" in:spinForward={new SpinOptions(1000, 0)}>
        <Penrose8 /></span
      >
    {/if}
    {#if activeText !== ""}
      <span class="link-text logo-text" in:fade={{ duration: 300, delay: 200 }}>
        <slot name="text">Missing</slot></span
      >
    {/if}
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
    margin-left: 0rem;
  }
  .logo {
    font-weight: bold;
    text-transform: uppercase;
    margin-top: 1rem;
    margin-bottom: 2rem;
    text-align: center;
    vertical-align: middle;
    color: var(--text-secondary);
    background: none;
    font-size: 2rem;
    letter-spacing: 0.3ch;
    width: 100%;
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
    .nav-link .link-text {
      display: none;
      margin-left: 1rem;
    }
    .nav-link .button {
      height: 5rem;
      margin-top: 1rem;
      margin-left: 1rem;
    }
    .active .nav-link .link-text {
      margin-left: 2rem;
      display: inline;
    }
  }
</style>
