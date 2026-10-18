<script lang="ts">
	import './layout.css';

	import type { LayoutProps } from './$types';

	import Header from '#lib/components/layout/header/Header.svelte';
	import Footer from '#lib/components/layout/footer/Footer.svelte';

	import { getLocale } from '#lib/paraglide/runtime.js';

	const { children }: LayoutProps = $props();

	let isMenuMobileOpen = $state(false);
</script>

<svelte:head>
	<!-- Open Graph -->
	<meta
		property="og:locale"
		content={getLocale() === 'en' ? `${getLocale()}_US` : `${getLocale()}_BR`}
	/>
</svelte:head>

<Header bind:isMenuMobileOpen />

{@render children()}

<Footer />
