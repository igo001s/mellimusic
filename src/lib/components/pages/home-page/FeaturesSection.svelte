<script lang="ts">
	// Components
	import CtaOutlineButton from '#lib/components/ui/buttons/CtaOutlineButton.svelte';

	// Types
	import type { FeatureCardItem } from '#lib/types/components/elements.types.ts';

	// Paraglides
	import { m } from '#lib/paraglide/messages.js';

	const featureCardItems: FeatureCardItem[] = $derived([
		{
			imageSrc: 'https://placehold.co/400x200',
			imageAltText: 'Illustrative image of a MelliMusic feature',
			title: m.features_card1_title(),
			description: m.features_card1_description()
		},
		{
			imageSrc: 'https://placehold.co/400x200',
			imageAltText: 'Illustrative image of a MelliMusic feature',
			title: m.features_card2_title(),
			description: m.features_card2_description()
		},
		{
			imageSrc: 'https://placehold.co/400x200',
			imageAltText: 'Illustrative image of a MelliMusic feature',
			title: m.features_card3_title(),
			description: m.features_card3_description()
		},
		{
			imageSrc: 'https://placehold.co/400x200',
			imageAltText: 'Illustrative image of a MelliMusic feature',
			title: m.features_card4_title(),
			description: m.features_card4_description()
		}
	]);
</script>

<section
	class="space-y-8 bg-base-dark px-9 py-12 sm:px-11 md:space-y-14 md:py-24 xl:space-y-20 xl:px-20"
>
	<div
		class="flex flex-col items-center gap-6 sm:flex-row sm:items-center sm:justify-between sm:gap-8"
	>
		<h2
			class="max-w-xs text-center text-3xl leading-[1.1] font-bold tracking-tight text-base-light sm:max-w-md sm:text-start sm:text-4xl md:max-w-xl md:text-5xl xl:max-w-2xl xl:text-6xl"
		>
			{m.features_title()}
		</h2>

		<div class="shrink-0">
			<CtaOutlineButton link="/" textClassColor="text-base-light hover:text-base-light/80"
				>{m.features_cta()}</CtaOutlineButton
			>
		</div>
	</div>

	<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 xl:grid-cols-4 xl:gap-8">
		{#each featureCardItems as item (item.title)}
			<div class="flex flex-col overflow-hidden rounded-xl">
				<img
					src={item.imageSrc}
					alt={item.imageAltText}
					fetchpriority="low"
					loading="lazy"
					class="w-full object-cover"
				/>

				<div class="flex-1 space-y-3 bg-primary px-6 py-5">
					<h3 class="text-xl font-semibold">
						{item.title}
					</h3>

					<p class="font-light">
						{item.description}
					</p>
				</div>
			</div>
		{/each}
	</div>
</section>
