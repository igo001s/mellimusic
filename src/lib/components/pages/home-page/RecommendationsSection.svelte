<script lang="ts">
	// Assets
	import Artist1 from '#lib/assets/images/artists/origami-aquem.webp';
	import Artist2 from '#lib/assets/images/artists/pairot.webp';
	import Artist3 from '#lib/assets/images/artists/yung-lixo.webp';
	import Artist4 from '#lib/assets/images/artists/hellbala1.webp';

	// Components
	import CtaOutlineButtonExternal from '#lib/components/ui/buttons/CtaOutlineButtonExternal.svelte';

	// Types
	import type { recommendationsCardItem } from '#lib/types/components/elements.types.ts';

	// Paraglide
	import { m } from '#lib/paraglide/messages.js';

	const indicationCardItems: recommendationsCardItem[] = $derived([
		{
			name: m.recommendations_artist_1_name(),
			description: m.recommendations_artist_1_description(),
			imageSrc: Artist1,
			imageAltText: m.recommendations_artist_1_image_alt_text(),
			link: 'https://open.spotify.com/artist/0fwsO499haVVv0Dmbtgt2E'
		},
		{
			name: m.recommendations_artist_2_name(),
			description: m.recommendations_artist_2_description(),
			imageSrc: Artist2,
			imageAltText: m.recommendations_artist_2_image_alt_text(),
			link: 'https://open.spotify.com/intl-pt/artist/6dqHUZLflPFXOPOPog1dSF?si=QIRhKt-2TZmTpnrKyqmPCA'
		},
		{
			name: m.recommendations_artist_3_name(),
			description: m.recommendations_artist_3_description(),
			imageSrc: Artist3,
			imageAltText: m.recommendations_artist_3_image_alt_text(),
			link: 'https://open.spotify.com/intl-pt/artist/6ab8tnQvr8sXXIpSZCrbQs?si=yfxFcPrWRWGjUQ52SDH0ig'
		},
		{
			name: m.recommendations_artist_4_name(),
			description: m.recommendations_artist_4_description(),
			imageSrc: Artist4,
			imageAltText: m.recommendations_artist_4_image_alt_text(),
			link: 'https://open.spotify.com/intl-pt/artist/6OgrrG9ACkrO8i7e7sw2w2?si=LGnSeA74RRStHanwNyiK7Q'
		}
	]);
</script>

<section
	class="flex flex-col-reverse gap-10 bg-base-light px-7 py-12 sm:px-11 md:gap-14 md:py-28 lg:flex-row xl:px-20"
>
	<div class="grid grid-cols-1 gap-10 sm:grid-cols-2 md:gap-14 lg:shrink-0 lg:gap-8 xl:gap-14">
		{#each indicationCardItems as item (item.name)}
			<a
				href={item.link}
				rel="external noopener noreferrer"
				target="_blank"
				class="group relative h-56 w-full overflow-hidden rounded-xl lg:w-56"
			>
				<img
					src={item.imageSrc}
					alt={item.imageAltText}
					class="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
				/>

				<div
					class="absolute bottom-0 left-0 flex w-full flex-col gap-2 bg-base-dark/60 px-4 py-4 text-base-light"
				>
					<p class="text-base leading-tight font-bold">{item.name}</p>

					<p class="text-xs font-medium">{item.description}</p>
				</div>
			</a>
		{/each}
	</div>

	<div class="flex min-w-0 flex-col items-center gap-6 sm:items-start lg:mx-auto lg:gap-8">
		<h2
			class="max-w-xs text-center text-3xl leading-[1.1] font-bold tracking-tight text-base-dark sm:max-w-md sm:text-start sm:text-4xl md:max-w-xl md:text-5xl lg:text-4xl xl:max-w-2xl xl:text-6xl"
		>
			{m.recommendations_heading()}
		</h2>

		<p class="recommendations-paragraph">
			{m.recommendations_paragraph_1()}
		</p>

		<p class="recommendations-paragraph">
			{m.recommendations_paragraph_2_before()}
			<a
				href="https://www.linkedin.com/in/igor-araujo001/"
				rel="external noreferrer noopener"
				class="font-bold underline">{m.recommendations_paragraph_2_link()}</a
			>{m.recommendations_paragraph_2_after()}
		</p>

		<div class="mx-auto h-fit lg:mx-0">
			<CtaOutlineButtonExternal
				link="https://www.linkedin.com/in/igor-araujo001/"
				textClassColor="text-base-dark hover:text-base-dark/80"
			>
				{m.recommendations_cta_contact()}
			</CtaOutlineButtonExternal>
		</div>
	</div>
</section>

<style>
	.recommendations-paragraph {
		font-size: 1rem;
		line-height: 1.625;
		text-wrap: pretty;
		opacity: 0.8;
		max-width: 768px;
	}

	@media (min-width: 48rem) {
		.recommendations-paragraph {
			font-size: 1.125rem;
		}
	}
</style>
