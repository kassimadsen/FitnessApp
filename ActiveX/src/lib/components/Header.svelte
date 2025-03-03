<script lang="ts">
	import {Button} from '$lib/components/ui/button';
	import ThemeToggleIcon from './ThemeToggleIcon.svelte';
</script>

<header class="px-inline flex items-center justify-between">
	<Button class="font-bold" variant="ghost" href="/">ActiveX</Button>
	<div class="flex items-center">
		<nav>
			<Button variant="ghost" href="/contact">Contact</Button>
		</nav>
		<Button
			variant="ghost"
			size="icon"
			onclick={() => {
				window?.toggleTheme && window.toggleTheme();
			}}><ThemeToggleIcon /></Button
		>
	</div>
</header>
