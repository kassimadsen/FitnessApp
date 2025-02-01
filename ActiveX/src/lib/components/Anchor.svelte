<script lang="ts">
	import type {Snippet} from 'svelte';

	type Props = {
		href: string;
		children: Snippet;
	};
	let {href, children} = $props();
</script>

<a class="rounded-xl bg-orange-600 px-4 py-2 text-orange-50" {href}>{@render children()}</a>
