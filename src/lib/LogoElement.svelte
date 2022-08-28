<script>
  import Penrose8 from "./svg/Penrose8.svelte";
  import Penrose3 from "./png/Penrose3.svelte";
  import { fade } from 'svelte/transition';
  import { expoOut } from 'svelte/easing';

  let active = "";
  let status = 0;

  function spin(node, { duration, delay, rotations }) {
    const dd = duration + delay;
		return {
			duration : dd,      
			css: t => {
        const eased = expoOut(t-delay);
         if (t<delay)
         return `display: none;`
         else
				return `transform: rotate(${rotations * eased * 360}deg);`
			}
		};
	}

  function spinBack(node, { duration, delay }) {
    return spin(node, { duration: duration, delay: delay, rotations: -8 }); 
  }
  function spinForward(node, { duration, delay }) {
    return spin(node, { duration: duration, delay: delay, rotations: 8 }); 
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
   
    {#if (active === "" && (status === 0 || status === 2 || status === 4))} 
    <span class="button" transition:spinBack="{{duration: 2000, delay: 0}}"><Penrose3 /></span>    
    {:else if status !== 3}     
      <span class="button" out:spinForward="{{delay: 0, duration: 2000}}" in:spinForward="{{delay: 2000, duration: 2000}}"> <Penrose8 /></span>
      <span class="link-text logo-text" 
        transition:fade={{duration: 2000}} 
        on:introstart="{() => status=1}"
        on:introend="{() => status=2}" 
        on:outrostart="{() => status=3}"
        on:outroend="{() => status=4}">
        <slot name="text">Missing</slot></span>
    {/if}
  
  </a>
  <p>status: {status}</p>
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
    margin-bottom: 1rem;
    text-align: center;
    color: var(--text-secondary);
    background: none;
    font-size: 1.5rem;
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
