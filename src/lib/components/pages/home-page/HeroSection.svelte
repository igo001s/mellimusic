<script lang="ts">
	// Assets
	import HeroSectionIllustration from '#lib/assets/images/illustrations/hero-section-illustration.webp?enhanced';

	// Components
	import CtaButton from '#lib/components/ui/buttons/CtaButton.svelte';
	import CtaOutlineButton from '#lib/components/ui/buttons/CtaOutlineButton.svelte';

	// Types
	import type { HeroCardItem } from '#lib/types/components/elements.types.ts';

	// Paraglides
	import { m } from '#lib/paraglide/messages.js';

	const heroCardItems: HeroCardItem[] = $derived([
		{
			title: m.hero_item_discover_title(),
			description: m.hero_item_discover_description()
		},
		{
			title: m.hero_item_connect_title(),
			description: m.hero_item_connect_description()
		},
		{
			title: m.hero_item_share_title(),
			description: m.hero_item_share_description()
		}
	]);
</script>

<section
	class="flex h-full flex-col gap-10 px-5 py-8 sm:px-8 md:py-12 lg:flex-row lg:items-center lg:justify-between lg:gap-12 xl:h-[87vh] xl:gap-20 xl:px-16 xl:py-0"
>
	<div class="w-full space-y-8 md:space-y-12 lg:w-4/6 xl:w-7/12">
		<div class="max-w-4xl space-y-4 md:space-y-5">
			<h1
				class="text-4xl leading-[1.1] font-bold tracking-tight sm:text-5xl md:text-6xl xl:max-w-2xl xl:text-[70px]"
			>
				{m.hero_heading_1()}
			</h1>

			<p class="text-base leading-relaxed text-pretty opacity-80 md:text-lg">
				{m.hero_paragraph_1()}
			</p>
		</div>

		<div class="flex flex-col gap-3 sm:flex-row sm:gap-4">
			<CtaButton link="/">{m.hero_cta_log_in()}</CtaButton>

			<CtaOutlineButton link="/">{m.hero_cta_learn_more()}</CtaOutlineButton>
		</div>

		<div
			class="mt-4 grid gap-6 rounded-xl bg-primary px-6 py-4 sm:grid-cols-3 sm:gap-8 md:px-8 md:py-6 lg:gap-10 xl:mt-16"
		>
			{#each heroCardItems as item (item.title)}
				<div class="space-y-4 lg:space-y-5">
					<div class="space-y-2">
						<p class="text-lg font-bold">
							{item.title}
						</p>

						<div class="h-0.5 w-8 rounded-full bg-base-dark"></div>
					</div>

					<p class="text-sm leading-relaxed opacity-80 md:text-base">
						{item.description}
					</p>
				</div>
			{/each}
		</div>
	</div>

	<div class="hidden lg:block lg:w-4/12 xl:w-3/12">
		<enhanced:img
			src={HeroSectionIllustration}
			alt={m.hero_artist_illustration_alt_text()}
			fetchpriority="high"
			loading="eager"
		/>
	</div>
</section>
