<script lang="ts">
	// Svelte Types
	import type { Snippet } from 'svelte';

	const { children, link }: { children: Snippet; link: string } = $props();
</script>

<a
	href={link}
	rel="external noreferrer noopener"
	target="_blank"
	class="block cursor-pointer rounded-full bg-primary px-6 py-3.5 font-semibold text-base-dark transition-colors duration-300 hover:bg-primary/80"
>
	{@render children()}
</a>
