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
	class="space-y-6 bg-base-dark px-5 py-10 sm:space-y-8 sm:px-11 sm:py-12 md:space-y-12 md:py-24 lg:py-28 xl:space-y-20 xl:px-24 xl:py-32"
>
	<div
		class="flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-8"
	>
		<h2
			class="text-center text-3xl leading-[1.1] font-bold tracking-tight text-base-light sm:text-start sm:text-4xl md:text-5xl lg:max-w-2xl lg:text-4xl xl:text-6xl"
		>
			{m.features_title()}
		</h2>

		<div class="shrink-0">
			<CtaOutlineButton link="/" textClassColor="text-base-light hover:text-base-light/80"
				>{m.features_cta()}</CtaOutlineButton
			>
		</div>
	</div>

	<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 md:gap-8 xl:grid-cols-4 xl:gap-10">
		{#each featureCardItems as item (item.title)}
			<div class="flex flex-col overflow-hidden rounded-xl">
				<img
					src={item.imageSrc}
					alt={item.imageAltText}
					fetchpriority="low"
					loading="lazy"
					class="w-full object-cover"
				/>

				<div class="flex-1 space-y-2 bg-primary px-4 py-4 sm:space-y-3 sm:px-6 sm:py-5">
					<h3 class="text-lg font-semibold sm:text-xl">
						{item.title}
					</h3>

					<p class="text-sm font-light sm:text-base">
						{item.description}
					</p>
				</div>
			</div>
		{/each}
	</div>
</section>
