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
	class="flex flex-col gap-6 bg-base-light px-5 pt-4 pb-10 sm:gap-8 sm:px-11 sm:pb-12 md:gap-12 md:pt-14 md:pb-24 lg:flex-row lg:gap-12 lg:pt-20 lg:pb-28 xl:px-24 xl:pb-32"
>
	<div class="flex flex-col items-center gap-4 sm:items-start sm:gap-6 lg:max-w-lg lg:gap-8">
		<h2
			class="text-center text-3xl leading-[1.1] font-bold tracking-tight text-base-dark sm:text-start sm:text-4xl md:text-5xl lg:text-4xl xl:text-6xl"
		>
			{m.faq_heading()}
		</h2>

		<p
			class="max-w-3xl text-center text-base leading-relaxed text-pretty opacity-80 sm:text-start md:text-lg"
		>
			{m.faq_paragraph()}
		</p>
	</div>

	<div class="w-full max-w-4xl space-y-3 sm:space-y-4 md:space-y-6 lg:ml-2 lg:flex-1 2xl:ml-56">
		{#each faqItems as faqItem, i (i)}
			<button
				type="button"
				class="w-full cursor-pointer rounded-lg border-2 border-primary bg-primary/10 px-4 py-3 text-start font-semibold transition-colors duration-300 hover:border-primary/80 hover:bg-primary/15 sm:px-7 sm:py-5"
				onclick={() => (faqItem.showAnswer = !faqItem.showAnswer)}
			>
				<div class="flex items-center justify-between gap-3 sm:gap-4">
					<p class="text-base leading-snug text-base-dark md:text-lg">
						{faqItem.faqQuestion}
					</p>

					<ArrowIcon iconClass="text-base-dark h-5 w-5 shrink-0 sm:h-6 sm:w-6 md:h-7 md:w-7" />
				</div>

				{#if faqItem.showAnswer}
					<div class="mt-3 border-t border-primary/30 pt-3 sm:mt-4 sm:pt-4">
						<p class="text-sm leading-relaxed font-normal text-pretty opacity-80 md:text-base">
							{faqItem.faqAnswer}
						</p>
					</div>
				{/if}
			</button>
		{/each}
	</div>
</section>
