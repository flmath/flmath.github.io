<script>
	import {term} from './PostList';
	let val = '';
	
	$: term.set(val);
</script>

<label for="searchInput">Search</label>
<input bind:value={val} type="text" id="searchInput">