<script lang="ts">
	// Components
	import CtaButton from '#lib/components/ui/buttons/CtaButton.svelte';

	// Paraglide
	import { m } from '#lib/paraglide/messages.js';
</script>

<main
	class="flex h-[88vh] flex-col items-center justify-center gap-10 px-5 sm:px-7 md:gap-16 xl:h-[87vh] xl:px-16"
>
	<div class="max-w-md space-y-5 md:space-y-9">
		<p class="text-center text-8xl font-bold text-primary md:text-9xl" aria-hidden="true">404</p>

		<div class="flex flex-col items-center gap-5 text-center text-base-dark">
			<h1 class="text-2xl font-bold md:text-3xl">{m.not_found_title()}</h1>

			<p class="text-sm font-light md:text-base">
				{m.not_found_description()}
			</p>
		</div>
	</div>

	<CtaButton link="/">
		{m.not_found_cta_back_home()}
	</CtaButton>
</main>
