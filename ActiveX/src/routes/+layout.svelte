<script lang="ts">
	import '../app.css';
	import ThemeToggleIcon from '$lib/components/ThemeToggleIcon.svelte';
	import {Button} from '$lib/components/ui/button';
	import {title} from 'process';
	import Header from '$lib/components/Header.svelte';
	let {children} = $props();
</script>

<svelte:head>
	<title>ActiveX</title>
</svelte:head>

<Header />

{@render children()}
<footer>Made with 🧡 by Kassi</footer>
