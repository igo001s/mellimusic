<script lang="ts">
	// App
	import { page } from '$app/state';

	// Components
	import HeroSection from '#lib/components/pages/home-page/HeroSection.svelte';

	// Paraglides
	import { m } from '#lib/paraglide/messages.js';
</script>

<svelte:head>
	<!-- General -->
	<title>{m.home_page_title()}</title>
	<meta name="description" content={m.home_page_meta_description()} />
	<meta name="keywords" content={m.home_page_keywords()} />
	<link rel="canonical" href={`https://mellimusic.club${page.url.pathname}`} />
	<!-- Open Graph -->
	<meta property="og:url" content={`https://mellimusic.club${page.url.pathname}`} />
	<meta property="og:title" content={m.home_page_title()} />
	<meta property="og:description" content={m.home_page_meta_description()} />
	<!-- Twitter Card -->
	<meta name="twitter:url" content={`https://mellimusic.club${page.url.pathname}`} />
	<meta name="twitter:title" content={m.home_page_title()} />
	<meta name="twitter:description" content={m.home_page_meta_description()} />
</svelte:head>

<main>
	<HeroSection />
</main>
