<script lang="ts">
  import { fade } from "svelte/transition";
  import { page } from "$app/stores";
  let active: string = "";
  let activeText: string = "";

  export let href = "/";

  export function handleMouseOver() {
    active = " active ";
    activeText = " active ";
  }
  export function handleMouseOut() {
    activeText = " ";
    if ("/" + $page.routeId !== href) active = " ";
  }
</script>

<!-- <div>{"nav-item " + active + (undefined == $$props.class ? " " : $$props.class)}</div> -->
<li
  class={"nav-item " +
    active +
    (undefined == $$props.class ? " " : $$props.class)}
>
  <a {href} on:click={() => (active = " active ")}>
    <slot name="picture">Picture</slot>
  </a>
  {#if activeText === " active "}
    <a {href} class="item-text" in:fade={{ duration: 300, delay: 200 }}>
      <slot name="text">Missing</slot>
    </a>
  {/if}
</li>

<style>
  .nav-item {
    display: flex;
    color: var(--text-primary);
    text-decoration: none;
    background: none;
    filter: grayscale(100%) opacity(0.7);
    transition: var(--transition-speed);
  }

  .nav-item.active {
    filter: opacity(1);
  }
  .nav-item {
    margin-left: 1rem;
  }

  .item-text {
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
    background: none;
    color: var(--text-secondary);
    text-decoration: none;
  }

  /* Small screens */
  @media only screen and (max-width: 600px) {
    .navbar {
      width: 100%;
      height: 6rem;
    }
    .nav-item {
    margin-left: 5px;
  }

   
    .item-text {
      display: none;
      font-size: 1rem;
    }
  }

  /* Large screens */
  @media only screen and (min-width: 600px) {
    .nav-item {
      margin-left: 1rem;
      margin-bottom: 2rem;
      align-items: center;
      height: 5rem;
    }

    .item-text {
      margin-top: 1rem;
      margin-bottom: 1rem;
      vertical-align: middle;
      width: 100%;
      font-size: 2rem;
      letter-spacing: 0.3ch;
    }
  }
</style>
