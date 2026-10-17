<script lang="ts">
	// App
	import { resolve } from '$app/paths';

	// Assets
	import MelliMusicLogo from '#lib/assets/images/logos/mellimusic-logo.webp?enhanced';
	import MenuMobileIcon from '#lib/assets/icons/MenuMobileIcon.svelte';

	// Types
	import type { HeaderNavItems } from '#lib/types/components/navigation.types.ts';

	// Paraglide
	import { setLocale, getLocale, locales } from '#lib/paraglide/runtime.js';
	import { m } from '#lib/paraglide/messages.js';

	// Props
	let { isMenuMobileOpen = $bindable(false) }: { isMenuMobileOpen?: boolean } = $props();

	let navItems: HeaderNavItems = $derived([
		{
			href: '/',
			text: m.header_navigation_text_my_musical_profile()
		},
		{
			href: '/',
			text: m.header_navigation_text_music_archive()
		},
		{
			href: '/',
			text: m.header_navigation_text_music_community()
		}
	]);
</script>

<header class="flex h-[12vh] items-center justify-between px-5 sm:px-7 xl:h-[13vh] xl:px-16">
	<a
		href={resolve('/')}
		aria-label={m.header_logo_link_aria_label()}
		class="transition-transform duration-300 hover:scale-102"
	>
		<enhanced:img
			src={MelliMusicLogo}
			alt={m.header_logo_image_alt()}
			fetchpriority="high"
			loading="eager"
			class="h-16 w-auto md:h-20 xl:h-24"
		/>
	</a>

	<nav class="hidden items-center gap-16 text-base-dark/70 xl:flex">
		{#each navItems as item (item.text)}
			<a
				href={resolve(item.href)}
				aria-label={m.header_navigation_aria_label({ page: item.text })}
				class="transition-all duration-500 hover:scale-102 hover:text-base-dark"
			>
				{item.text}
			</a>
		{/each}
	</nav>

	<div class="hidden items-center gap-14 xl:flex">
		<div class="flex items-center gap-5 text-base-dark">
			{#each locales as lang (lang)}
				<button
					type="button"
					aria-pressed={getLocale() === lang}
					aria-label={lang === 'en'
						? m.header_language_en_aria_label()
						: m.header_language_pt_aria_label()}
					class={getLocale() === lang ? 'font-bold' : 'cursor-pointer font-light'}
					onclick={() => setLocale(lang)}
				>
					{lang.toUpperCase()}
				</button>
			{/each}
		</div>

		<button
			type="button"
			class="cursor-pointer rounded-full bg-secondary px-6 py-3 font-semibold text-base-dark transition-colors duration-300 hover:bg-secondary/80"
		>
			{m.header_cta_login()}
		</button>
	</div>

	<button
		type="button"
		aria-label={isMenuMobileOpen
			? m.header_close_mobile_menu_aria_label()
			: m.header_open_mobile_menu_aria_label()}
		aria-expanded={isMenuMobileOpen}
		class="block xl:hidden"
	>
		<MenuMobileIcon iconClass="text-base-dark w-8 h-8 md:w-10 md:h-10" />
	</button>
</header>
