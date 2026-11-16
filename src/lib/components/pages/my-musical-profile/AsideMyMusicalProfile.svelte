<script lang="ts">
	// App
	import { resolve } from '$app/paths';

	// Assets
	import MellimusicLogo from '#lib/assets/images/logos/MellimusicLogo.svelte';
	import ToggleAsideIcon from '#lib/assets/icons/ToggleAsideIcon.svelte';

	// Types
	import type { MyMusicalProfileSection } from '#lib/types/components/elements.types.ts';
	import type { AsideMyMusicalProfileProps } from '#lib/types/components/props.types.ts';

	// Paraglide
	import { m } from '#lib/paraglide/messages.js';

	const { isAsideOpen, selectedPeriod, closeAside, selectPeriod }: AsideMyMusicalProfileProps =
		$props();

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
</script>

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
