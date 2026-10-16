<script lang="ts">
	import './layout.css';

	import type { LayoutProps } from './$types';

	import Header from '#lib/components/layout/header/Header.svelte';

	let { children }: LayoutProps = $props();

	let isMenuMobileOpen = $state(false);
</script>

<Header bind:isMenuMobileOpen />

{@render children()}
