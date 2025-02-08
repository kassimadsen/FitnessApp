<script lang="ts">
	import type {Snippet} from 'svelte';
	import {Button, type ButtonRootProps} from 'bits-ui';

	type Props = {
		href: string;
		children: Snippet;
	} & ButtonRootProps;
	let {children, ...restProps}: Props = $props();
</script>

<Button.Root class="rounded-xl bg-orange-600 px-4 py-2 text-orange-50" {...restProps}
	>{@render children()}</Button.Root
>
