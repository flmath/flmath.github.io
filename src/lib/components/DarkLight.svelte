<script lang="ts">
  import { SpinOptions } from "./SpinOptions";
  import Sun from "../svg/Sun.svelte";
  import { fade } from "svelte/transition";
  import { sineOut } from "svelte/easing";

  let active: string = $state(' active ');

  let {text = "Missing", picture = Sun, klass = '', darkMode = false, activeText = $bindable() } = $props();

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
    return spin(node, new SpinOptions(spinOpt.duration, spinOpt.delay, -1));
  }
  function spinForward(node: HTMLElement, spinOpt: SpinOptions) {
    return spin(node, new SpinOptions(spinOpt.duration, spinOpt.delay, 1));
  }
  export function handleMouseOver() {
    active = ' active ';
    activeText = true;
  }
  
  export function handleMouseOut() {
    handleCheckActive();
  }
  export function handleCheckActive() {
		
		}
</script>

<li class={"darklight" + active + ' ' + klass  }>
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <span class="nav-link" onclick={() => (darkMode = !darkMode)}>
    {#if darkMode}
      <span class="button" in:spinBack={new SpinOptions(1000, 0)}>
        <Sun --angle="270deg" /></span>

    {:else}
      <span class="button" in:spinForward={new SpinOptions(1000, 0)}>
        <Sun --angle="90deg"/></span>
    {/if}
    {#if activeText}
      <span class="link-text darklight-text" in:fade={{ duration: 300, delay: 200 }}>
     {text} </span>
    {/if}
  </span>
</li>

<style>
  .nav-link {
    display: flex;
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

  .darklight {
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
    color: var(--text-secondary);
    background: none;
  }

  /* Small screens */
  @media only screen and (max-width: 900px) {
    .darklight {
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
    .nav-link {  

     }
    .active .nav-link {
      margin: 0;
    }

    .nav-link .link-text {
      display: none;

    }
    .nav-link .button {
      height: 5rem;

    }
    .active .nav-link .link-text {
      margin-top: 2rem;
      display:none;
    }



  }
  /* Large screens */
  @media only screen and (min-width: 900px) {
    .darklight {
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
