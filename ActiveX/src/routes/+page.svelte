<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import Hero from './Hero.svelte';
</script>

<Hero />
<Button
	onclick={() => {
		console.log('track that a user clicked this');
	}}
	href="/contact">Contact</Button
>
<Button href="/generate">Generate a program</Button>
