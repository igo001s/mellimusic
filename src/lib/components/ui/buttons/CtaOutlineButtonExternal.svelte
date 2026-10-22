<script lang="ts">
	// Svelte Types
	import type { Snippet } from 'svelte';

	const {
		children,
		link,
		textClassColor
	}: { children: Snippet; link: string; textClassColor: string } = $props();
</script>

<a
	href={link}
	rel="external noreferrer noopener"
	target="_blank"
	class={`block cursor-pointer rounded-full border-2 border-primary bg-primary/10 px-6 py-3.5 font-semibold transition-colors duration-300 hover:border-primary/80 ${textClassColor}`}
>
	{@render children()}
</a>
