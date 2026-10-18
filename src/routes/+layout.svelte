<script lang="ts">
	import './layout.css';

	import type { LayoutProps } from './$types';

	import { page } from '$app/state';

	import Header from '#lib/components/layout/header/Header.svelte';
	import Footer from '#lib/components/layout/footer/Footer.svelte';

	import { getLocale, locales, localizeHref } from '#lib/paraglide/runtime.js';
	import { m } from '#lib/paraglide/messages.js';

	const { children }: LayoutProps = $props();

	let isMenuMobileOpen = $state(false);
</script>

<svelte:head>
	<!-- Google -->
	<meta name="google" content="notranslate" />
	<link rel="canonical" href={`https://mellimusic.club${page.url.pathname}`} />
	{#each locales as locale (locale)}
		<link
			rel="alternate"
			hreflang={locale}
			href={`${page.url.origin}${localizeHref(page.url.pathname, { locale })}`}
		/>
	{/each}
	<!-- Open Graph -->
	<meta property="og:locale" content={getLocale() === 'en' ? 'en_US' : 'pt_BR'} />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="mellimusic" />
	<meta property="og:url" content={`${page.url.origin}${page.url.pathname}`} />
	<meta property="og:image" content={`${page.url.origin}/open-graph/open-graph-mellimusic.webp`} />
	<meta property="og:image:alt" content={m.open_graph_image_alt_text()} />
	<meta property="og:image:type" content="image/webp" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<Header bind:isMenuMobileOpen />

{@render children()}

<Footer />
