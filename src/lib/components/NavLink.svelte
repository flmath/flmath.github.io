<script lang="ts">
	import { fade } from 'svelte/transition';
	import { page } from '$app/state';
	let active: string = $state(' ');
	

	let { href = '/', picture, text = 'Missing', klass = '', activeText = $bindable()} = $props();
	let hrefRegex: RegExp = $derived(new RegExp(href + '.*'));

	export function match(hrefRegex: RegExp, routeid: string | null): boolean {
		if (routeid === null) return false;
		return hrefRegex.test(routeid);
	}

	
	export function handleCheckActive() {
		if (!match(hrefRegex, page.route.id)) active = ' ';
		else active = ' active ';
		}
</script>

<li class={'nav-item ' + klass + active + (undefined == href ? ' ' : href)}>
	<a {href} onclick={() => (active = ' active ')}>
		{@render picture()}
	</a>
	{#if activeText}
		<a {href} class="item-text" in:fade={{ duration: 300, delay: 200 }}>
			{text}
		</a>
	{/if}
</li>

<style>
	.nav-item {
		display: flex;
		color: var(--text-primary);
		text-decoration: none;
		background: none;
		filter: grayscale(100%) opacity(0.7) invert(var(--nav-invert));
		transition: var(--transition-speed);
		margin-left: 1rem;
	}

	.nav-item.active {
		filter: opacity(1) invert(var(--nav-invert));		
	}
	.item-text {
    	color: var(--text-primary);
		font-weight: bold;
		text-transform: uppercase;
		text-align: center;
		background: none;
		color: var(--text-secondary); 
		text-decoration: none;
	}

	/* Small screens */
	@media only screen and (max-width: 900px) {
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
	@media only screen and (min-width: 900px) {
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
