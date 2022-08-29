<script>
  import Penrose8 from "./svg/Penrose8.svelte";
  import { fade } from 'svelte/transition';
  import { sineOut } from 'svelte/easing';

  let active = "";

  function spin(node, { duration, delay, rotations }) {
    
		return {
			duration, 
      delay,     
			css: t => {
        const eased = sineOut(t);
				return `transform: rotate(${rotations * eased * 360}deg);`
			}
		};
	}

  function spinBack(node, { duration, delay }) {
    return spin(node, { duration: duration, delay: delay, rotations: -3 }); 
  }
  function spinForward(node, { duration, delay }) {
    return spin(node, { duration: duration, delay: delay, rotations: 3 }); 
  }
  export function handleMouseOver() {
    active = " active ";
  }
  export function handleMouseOut() {
    active = "";
  }
</script>

<li class={"logo" + active}>
    <a href="/" class="nav-link">
      {#if (active === "" )} 
      <span class="button" in:spinBack="{{duration: 1000, delay: 0}}" > <Penrose8 /></span>    
      {:else }
      <span class="button" in:spinForward="{{duration: 1000, delay: 0}}"  > <Penrose8 /></span>   
      {/if}
    {#if (active !== "" )} 
      <span class="link-text logo-text" 
        in:fade={{duration: 300, delay: 200}}>
        <slot name="text">Missing</slot></span>
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

    .nav-link .link-text 
      {
    display: none; 
    margin-left: 1rem;
  }
  .nav-link .button {   
    height: 5rem; 
    margin-top: 1rem;
    margin-left: 0.5rem;    
  }
  .active .nav-link .link-text {
      margin-left: 2rem;
       display: inline;   
     }
  }
</style>
