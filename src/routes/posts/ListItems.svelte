<script>
	import { filtered } from './PostList';
</script>

<ul>
{#each $filtered as item}
	<li>{item}</li>
{/each}
</ul>