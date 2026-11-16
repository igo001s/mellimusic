<script lang="ts">
	// App
	import { page } from '$app/state';

	// Assets
	import ToggleAsideIcon from '#lib/assets/icons/ToggleAsideIcon.svelte';

	// Components
	import AsideMyMusicalProfile from '#lib/components/pages/my-musical-profile/AsideMyMusicalProfile.svelte';

	// Types
	import type { SelectedPeriod } from '#lib/types/components/elements.types.ts';

	// Paraglide
	import { m } from '#lib/paraglide/messages.js';

	let selectedPeriod: SelectedPeriod = $state({
		sectionId: 'artists',
		period: ''
	});

	let isAsideOpen: boolean = $state(false);

	function closeAside() {
		isAsideOpen = false;
	}

	function selectPeriod(sectionId: 'artists' | 'songs' | '', period: string) {
		selectedPeriod = { sectionId, period };

		closeAside();
	}
</script>

<svelte:head>
	<!-- General -->
	<title>{m.my_musical_profile_page_title()}</title>
	<meta name="description" content={m.my_musical_profile_page_meta_description()} />
	<meta name="keywords" content={m.my_musical_profile_page_keywords()} />
	<!-- Open Graph -->
	<meta property="og:url" content={`https://mellimusic.club${page.url.pathname}`} />
	<meta property="og:title" content={m.my_musical_profile_page_title()} />
	<meta property="og:description" content={m.my_musical_profile_page_meta_description()} />
</svelte:head>

<main class="flex h-dvh overflow-hidden bg-base-dark">
	<div
		class={`fixed inset-0 z-30 bg-base-dark/60 transition-opacity duration-300 lg:hidden ${
			isAsideOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
		}`}
		onclick={closeAside}
		aria-hidden="true"
	></div>

	<AsideMyMusicalProfile {isAsideOpen} {selectedPeriod} {closeAside} {selectPeriod} />

	<section class="flex-1 overflow-y-auto bg-base-light p-4 sm:p-6 lg:rounded-l-3xl lg:p-10">
		<button
			type="button"
			class="mb-4 block cursor-pointer rounded-md bg-base-dark p-2 text-base-light transition-colors duration-300 hover:text-primary lg:hidden"
			onclick={() => (isAsideOpen = true)}
			aria-label={m.my_musical_profile_open_aside_menu()}
			aria-controls="profile-aside"
			aria-expanded={isAsideOpen}
		>
			<ToggleAsideIcon iconClass="h-5 w-5" />
		</button>
	</section>
</main>
