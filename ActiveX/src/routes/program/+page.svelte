<script>
	import Button from '$lib/components/Button.svelte';
</script>

<h1 class="text-6xl">Program</h1>

<p>Week starting 2/1/2025</p>

<ul>
	<li>
		<h2>Lower 1</h2>
		<p>Core Excersise</p>
	</li>
	<li>
		<h2>Upper 1</h2>
		<p>Core Excersise</p>
	</li>
	<li>
		<h2>Bro 1</h2>
		<p>Core Excersise</p>
	</li>
	<li>
		<h2>Lower 2</h2>
		<p>Core Excersise</p>
	</li>
</ul>

<Button
	onclick={() => {
		console.log('track that someone wants to do');
	}}>Download</Button
>
