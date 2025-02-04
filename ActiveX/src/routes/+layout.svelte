<script lang="ts">
	import '../app.css';
	import Button from '$lib/components/Button.svelte';
	let {children} = $props();
</script>

<header><a href="/">ActiveX</a></header>
<Button
	onclick={() => {
		window?.toggleTheme && window.toggleTheme();
	}}>toggle theme</Button
>

{@render children()}
<footer>Made with 🧡 by Kassi</footer>
