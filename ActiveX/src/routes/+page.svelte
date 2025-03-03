<script lang="ts">
	import {Button} from '$lib/components/ui/button';
	import Hero from './Hero.svelte';
</script>

<Hero />
<section class="container flex items-center justify-center gap-4 py-8">
	<Button
		variant="outline"
		onclick={() => {
			console.log('track that a user clicked this');
		}}
		href="/contact">Contact</Button
	>
	<Button variant="outline" href="/generate">Generate a program</Button>
</section>
