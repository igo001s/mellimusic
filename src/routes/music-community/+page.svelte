<script lang="ts">
	// App
	import { page } from '$app/state';

	// Paraglides
	import { m } from '#lib/paraglide/messages.js';
</script>

<svelte:head>
	<!-- General -->
	<title>{m.music_community_page_title()}</title>
	<meta name="description" content={m.music_community_page_meta_description()} />
	<meta name="keywords" content={m.music_community_page_keywords()} />
	<!-- Open Graph -->
	<meta property="og:url" content={`https://mellimusic.club${page.url.pathname}`} />
	<meta property="og:title" content={m.music_community_page_title()} />
	<meta property="og:description" content={m.music_community_page_meta_description()} />
</svelte:head>
