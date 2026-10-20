<script lang="ts">
	// App
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';

	// App Types
	import type { PageRouteId } from '$app/types';

	// Svelte Types
	import type { Snippet } from 'svelte';

	const {
		children,
		link,
		textClassColor
	}: { children: Snippet; link: PageRouteId; textClassColor: string } = $props();
</script>

<button
	type="button"
	class={`cursor-pointer rounded-full border-2 border-primary bg-primary/10 px-6 py-3.5 font-semibold transition-colors duration-300 hover:border-primary/80 ${textClassColor}`}
	onclick={() => goto(resolve(link))}
>
	{@render children()}
</button>
