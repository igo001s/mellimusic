<script lang="ts">
	// Assets
	import ArrowIcon from '#lib/assets/icons/ArrowIcon.svelte';

	// Types
	import type { FaqItem } from '#lib/types/components/elements.types.ts';

	// Paraglide
	import { m } from '#lib/paraglide/messages.js';

	const faqItems: FaqItem[] = $state([
		{
			faqQuestion: m.faq_q1_question(),
			faqAnswer: m.faq_q1_answer(),
			showAnswer: false
		},
		{
			faqQuestion: m.faq_q2_question(),
			faqAnswer: m.faq_q2_answer(),
			showAnswer: false
		},
		{
			faqQuestion: m.faq_q3_question(),
			faqAnswer: m.faq_q3_answer(),
			showAnswer: false
		},
		{
			faqQuestion: m.faq_q4_question(),
			faqAnswer: m.faq_q4_answer(),
			showAnswer: false
		},
		{
			faqQuestion: m.faq_q5_question(),
			faqAnswer: m.faq_q5_answer(),
			showAnswer: false
		},
		{
			faqQuestion: m.faq_q6_question(),
			faqAnswer: m.faq_q6_answer(),
			showAnswer: false
		}
	]);
</script>

<section
	class="flex flex-col gap-10 bg-base-light px-7 pt-4 pb-16 sm:px-11 md:gap-14 md:pt-20 md:pb-32 lg:flex-row lg:gap-12 xl:px-24"
>
	<div class="flex flex-col items-center gap-6 sm:items-start lg:max-w-lg lg:gap-8">
		<h2
			class="text-center text-3xl leading-[1.1] font-bold tracking-tight text-base-dark sm:text-start sm:text-4xl md:text-5xl lg:text-4xl xl:text-6xl"
		>
			{m.faq_heading()}
		</h2>

		<p class="max-w-3xl text-base leading-relaxed text-pretty opacity-80 md:text-lg">
			{m.faq_paragraph()}
		</p>
	</div>

	<div class="w-full max-w-4xl space-y-6 md:space-y-8 lg:ml-56 lg:flex-1">
		{#each faqItems as faqItem, i (i)}
			<button
				type="button"
				class="w-full cursor-pointer rounded-lg border-2 border-primary bg-primary/10 px-5 py-4 text-start font-semibold transition-colors duration-300 hover:border-primary/80 hover:bg-primary/15 sm:px-7 sm:py-5"
				onclick={() => (faqItem.showAnswer = !faqItem.showAnswer)}
			>
				<div class="flex items-center justify-between gap-4">
					<p class="text-base leading-snug text-base-dark md:text-lg">{faqItem.faqQuestion}</p>

					<ArrowIcon iconClass="text-base-dark h-6 w-6 shrink-0 md:h-7 md:w-7" />
				</div>

				{#if faqItem.showAnswer}
					<div class="mt-4 border-t border-primary/30 pt-4">
						<p class="text-sm leading-relaxed font-normal text-pretty opacity-80 md:text-base">
							{faqItem.faqAnswer}
						</p>
					</div>
				{/if}
			</button>
		{/each}
	</div>
</section>
