<script lang="ts">
	// App
	import { page } from '$app/state';
	import { resolve } from '$app/paths';

	// Assets
	import MellimusicLogo from '#lib/assets/images/logos/MellimusicLogo.svelte';
	import ToggleAsideIcon from '#lib/assets/icons/ToggleAsideIcon.svelte';

	// Types
	import type {
		MyMusicalProfileSection,
		SelectedPeriod
	} from '#lib/types/components/elements.types.ts';

	// Paraglide
	import { m } from '#lib/paraglide/messages.js';

	const myMusicalProfileSections: MyMusicalProfileSection[] = $state([
		{
			id: 'artists',
			title: m.my_musical_profile_artists_title(),
			periods: [
				m.my_musical_profile_period_last_30_days(),
				m.my_musical_profile_period_last_6_months(),
				m.my_musical_profile_period_last_12_months()
			]
		},
		{
			id: 'songs',
			title: m.my_musical_profile_songs_title(),
			periods: [
				m.my_musical_profile_period_last_30_days(),
				m.my_musical_profile_period_last_6_months(),
				m.my_musical_profile_period_last_12_months()
			]
		}
	]);

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

	<aside
		id="profile-aside"
		class={`fixed inset-y-0 left-0 z-40 w-72 max-w-[85vw] space-y-14 overflow-y-auto bg-base-dark p-8 transition-transform duration-300 sm:w-80 lg:static lg:translate-x-0 lg:space-y-17 lg:p-10
			${isAsideOpen ? 'translate-x-0' : '-translate-x-full'}`}
		aria-label={m.my_musical_profile_aside_label()}
	>
		<div class="flex items-center justify-between gap-4">
			<a href={resolve('/')}>
				<MellimusicLogo
					logoClass="text-base-light w-40 h-auto transition-colors duration-300 sm:w-50 hover:text-primary"
				/>
			</a>

			<button
				type="button"
				class="cursor-pointer text-base-light transition-colors duration-300 hover:text-primary lg:hidden"
				onclick={closeAside}
				aria-label={m.my_musical_profile_close_aside_menu()}
				aria-controls="profile-aside"
			>
				<ToggleAsideIcon iconClass="h-5 w-5 rotate-180" />
			</button>
		</div>

		{#each myMusicalProfileSections as item (item.id)}
			<div class="space-y-8 text-base-light lg:space-y-9">
				<p class="text-lg font-semibold lg:text-xl">{item.title}</p>

				<ul class="flex flex-col gap-7 lg:gap-8">
					{#each item.periods as period (period)}
						<li>
							<button
								type="button"
								class={`transition-all duration-300 ${
									selectedPeriod.sectionId === item.id && selectedPeriod.period === period
										? 'rounded-md bg-primary px-5 py-2 font-semibold text-base-dark'
										: 'cursor-pointer opacity-80 hover:opacity-100'
								}`}
								onclick={() => selectPeriod(item.id, period)}
							>
								{period}
							</button>
						</li>
					{/each}
				</ul>
			</div>
		{/each}
	</aside>

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
