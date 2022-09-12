<script>
	import { filtered } from "./PostList";
</script>

{#each $filtered as item}
	<a href={"posts/" + item.Route}>
		<div class="list-item">
			<h3>{item.Name}</h3>
			<p>{item.Tags}</p>
		</div>
	</a>
{/each}

<style>
	a {
		color: #000000;
		text-decoration: none;
		text-align: center;
		font-size: 1rem;
	}
	.list-item {
		margin-left: 2.5%;
		background-color: rgba(255, 255, 255, 0.33);
		width: 95%;
		padding: 0.3rem;
		border-radius: 1rem;
	}

	.list-item:hover {
		background-color: rgba(255, 255, 255);
	}
</style>
