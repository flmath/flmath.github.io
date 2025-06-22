<script lang="ts">
  import { SpinOptions } from "./SpinOptions";
  import Penrose8 from "../svg/Penrose8.svelte";
  import { fly } from "svelte/transition";
  import { sineOut } from "svelte/easing";
  import { page } from "$app/state";

  let active: string = $state(' active ');

  let { href = "/", text = "Missing", picture = Penrose8, activeText = $bindable() } = $props();

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

  export function handleCheckActive() {
		if (page.route.id === href) active = ' active ';
		else active = ' ';
		}
</script>

<li class={"logo" + active + (activeText ? ' activeText ' : ' ') }>
  <a {href} class="nav-link" >
    {#if active !== " active "}
      <span class="button" in:spinBack={new SpinOptions(1000, 0)}>
        <Penrose8 /></span>
    {:else}
      <span class="button" in:spinForward={new SpinOptions(1000, 0)}>
        <Penrose8 /></span>
    {/if}
    {#if activeText === true}
      <span class="link-text logo-text" in:fly={{ duration: 400, delay: 200, x: -30, y: 0 }}>
     {text} </span>
    {/if}
  </a>
</li>

<style>
  .nav-link {
    display: flex;
    color: var(--text-primary);
    text-decoration: none;
    background: none;
    filter: grayscale(100%) opacity(0.7) invert(var(--nav-invert));
    transition: var(--transition-speed);
  }
  .active .nav-link {
    filter: grayscale(0%) opacity(1) invert(var(--nav-invert));
    color: var(--text-secondary);
  }
.activeText .nav-link .link-text{
    margin-left: 2rem;
    opacity: 1;
    color: var(--text-secondary);
  }
  .logo {
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
    color: var(--text-secondary);
    background: none;
  }
 /* Small screens */
  @media only screen and (max-width: 900px) {
    .logo {
      vertical-align: middle;
    }
    .navbar {
     
      /* width: 100%;
      height: 5rem; */
      
      vertical-align: bottom;

    }

    .navbar-nav {
      flex-direction: row;
    }
  
    .activeText .nav-link {
      margin: 0;
    
    }

    .nav-link .link-text{
      margin: 0;
      display: none; 
    }
 
    .nav-link .button {
      height: 5rem;

    }
    .link-text .logo-text {
      margin-top: 2rem;
      display: none;
    }

  }
  /* Large screens */
  @media only screen and (min-width: 900px) {
    .logo {
      margin-top: 1rem;
      margin-bottom: 2rem;
      vertical-align: middle;
      font-size: 2rem;
      letter-spacing: 0.3ch;
      width: 100%;
    }

    .nav-link {
      align-items: center;
      height: 5rem;
    }

    .active .nav-link {
      margin-left: 0rem;
    }

    .nav-link .link-text {
  
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
