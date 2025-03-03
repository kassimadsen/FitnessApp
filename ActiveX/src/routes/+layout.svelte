<script lang="ts">
	import '../app.css';
	import ThemeToggleIcon from '$lib/components/ThemeToggleIcon.svelte';
	import {Button} from '$lib/components/ui/button';
	let {children} = $props();
</script>

<header class="px-inline flex items-center justify-between">
	<Button variant="ghost" href="/">ActiveX</Button>
	<Button
		variant="ghost"
		size="icon"
		onclick={() => {
			window?.toggleTheme && window.toggleTheme();
		}}><ThemeToggleIcon /></Button
	>
</header>

{@render children()}
<footer>Made with 🧡 by Kassi</footer>
