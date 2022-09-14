<script lang="ts">
 import {navigating} from '$app/stores'
 import {loading} from './+page'

 $: $loading = !!$navigating
</script>

