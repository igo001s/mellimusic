<script lang="ts">
	// App
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';

	// App Types
	import type { PageRouteId } from '$app/types';

	// Svelte Types
	import type { Snippet } from 'svelte';

	const { children, link }: { children: Snippet; link: PageRouteId } = $props();
</script>

<button
	type="button"
	class="cursor-pointer rounded-full border-2 border-primary bg-primary/10 px-6 py-3.5 font-semibold text-base-dark transition-colors duration-300 hover:border-primary/80 hover:text-base-dark/80"
	onclick={() => goto(resolve(link))}
>
	{@render children()}
</button>
