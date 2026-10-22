<script lang="ts">
	// App
	import { page } from '$app/state';

	// Components
	import HeroSection from '#lib/components/pages/home-page/HeroSection.svelte';
	import FeaturesSection from '#lib/components/pages/home-page/FeaturesSection.svelte';
	import RecommendationsSection from '#lib/components/pages/home-page/RecommendationsSection.svelte';

	// Paraglides
	import { m } from '#lib/paraglide/messages.js';
</script>

<svelte:head>
	<!-- General -->
	<title>{m.home_page_title()}</title>
	<meta name="description" content={m.home_page_meta_description()} />
	<meta name="keywords" content={m.home_page_keywords()} />
	<!-- Open Graph -->
	<meta property="og:url" content={`https://mellimusic.club${page.url.pathname}`} />
	<meta property="og:title" content={m.home_page_title()} />
	<meta property="og:description" content={m.home_page_meta_description()} />
</svelte:head>

<main>
	<HeroSection />

	<FeaturesSection />

	<RecommendationsSection />
</main>
