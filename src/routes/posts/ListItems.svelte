<script>
	import { filtered } from "./PostList";
</script>

<div class="top">
	{#each $filtered as item}
		<a href={"posts/" + item.Route}>
			<div class="glass list-item">
				<h3>{item.Name}</h3>

				<p>{item.Tags}</p>
			</div>
		</a>
	{/each}
</div>

<style>
	.top {
		position: relative;
		display: fixed;
		padding-top: 8rem;
	}
	a {
		color: #000000;
		text-decoration: none;
		text-align: center;
		font-size: 1rem;
	}
	.list-item {
		margin-left: 2.5%;
		margin-top: 1rem;
		width: 91%;
		padding: 0.3rem;
		border-radius: 1rem;
	}

	.list-item:hover {
		background-color: rgb(0, 191, 255, 0.85);
		box-shadow: 0 4px 30px rgba(0, 191, 255, 0.9);
		backdrop-filter: blur(6.4px);
		-webkit-backdrop-filter: blur(6.4px);
		border: 0px solid rgba(215, 255, 36, 0.4);
	}
	@media only screen and (max-width: 600px) {
		.top {
			padding-bottom: 9rem;
		}
	}

	@media only screen and (min-width: 600px) {
		.top {
			padding-bottom: 2rem;
		}
	}
</style>
