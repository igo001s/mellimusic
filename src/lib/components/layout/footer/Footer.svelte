<script lang="ts">
	// App
	import { resolve } from '$app/paths';

	// Assets
	import MellimusicLogoLight from '#lib/assets/images/logos/MellimusicLogoLight.svelte';
	import IgoLogo from '#lib/assets/images/logos/IgoLogo.svelte';
	import LinkedinIcon from '#lib/assets/icons/LinkedinIcon.svelte';
	import GithubIcon from '#lib/assets/icons/GithubIcon.svelte';

	// Types
	import type {
		FooterColumnItems,
		FooterSocialLink
	} from '#lib/types/components/navigation.types.ts';

	// Paraglide
	import { m } from '#lib/paraglide/messages.js';

	let footerColumns: FooterColumnItems = $derived([
		{
			title: m.footer_navigation_title(),
			items: [
				{
					href: '/',
					text: m.footer_navigation_my_musical_profile()
				},
				{
					href: '/',
					text: m.footer_navigation_music_archive()
				},
				{
					href: '/',
					text: m.footer_navigation_music_community()
				}
			]
		},
		{
			title: m.footer_legal_title(),
			items: [
				{
					href: '/',
					text: m.footer_legal_privacy_policy()
				},
				{
					href: '/',
					text: m.footer_legal_terms_of_service()
				},
				{
					href: '/',
					text: m.footer_legal_data_usage()
				}
			]
		}
	]);

	let socialLinks: FooterSocialLink = $derived([
		{
			icon: LinkedinIcon,
			ariaLabel: m.footer_social_linkedin_aria_label(),
			href: 'https://www.linkedin.com/in/igor-araujo001/'
		},
		{
			icon: GithubIcon,
			ariaLabel: m.footer_social_github_aria_label(),
			href: 'https://github.com/igo001s'
		}
	]);
</script>

<footer class="bg-base-dark px-5 py-14 sm:px-7 xl:px-16">
	<div class="flex flex-col items-center justify-between gap-14 sm:flex-row sm:items-start">
		<div class="space-y-12">
			<div class="footer-stack gap-3">
				<a
					href={resolve('/')}
					aria-label={m.footer_logo_link_aria_label()}
					class="footer-link block w-fit"
				>
					<MellimusicLogoLight logoClass="w-52 h-auto" />
				</a>

				<p class="block font-light text-base-light/90">{m.footer_tagline()}</p>
			</div>

			<div class="footer-stack gap-6">
				<p class="font-semibold text-base-light/90">{m.footer_product_of()}</p>

				<a
					href="https://github.com/igo001s"
					aria-label={m.footer_igo_link_aria_label()}
					rel="external noopener noreferrer"
					target="_blank"
					class="footer-link"
				>
					<IgoLogo logoClass="h-14 w-14" />
				</a>
			</div>
		</div>

		<div class="flex flex-col gap-10 sm:flex-row sm:gap-20 xl:gap-32">
			<div class="footer-stack gap-6">
				<p class="font-bold text-base-light uppercase">
					{m.footer_follow_title()}
				</p>

				<ul class="flex items-center gap-5">
					{#each socialLinks as socialLink (socialLink.href)}
						<li>
							<a
								href={socialLink.href}
								aria-label={socialLink.ariaLabel}
								rel="external noopener noreferrer"
								target="_blank"
								class="footer-link transition-colors duration-500"
							>
								<socialLink.icon iconClass="h-7 w-7" />
							</a>
						</li>
					{/each}
				</ul>
			</div>

			{#each footerColumns as column (column.title)}
				<div class="footer-stack gap-6">
					<p class="font-bold text-base-light uppercase">{column.title}</p>

					<ul class="footer-stack gap-4">
						{#each column.items as link (link.text)}
							<li>
								<a href={resolve(link.href)} class="footer-link text-sm">{link.text}</a>
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>
	</div>

	<div class="mt-12 border-t border-t-base-light/20 pt-12">
		<p class="text-center text-sm font-light text-base-light/80">
			{m.footer_copyright({ year: new Date().getFullYear() })}
		</p>
	</div>
</footer>

<style>
	.footer-link {
		color: color-mix(in oklab, var(--color-base-light) 80%, transparent);
		cursor: pointer;
		transition: color 500ms;
	}

	.footer-link:hover {
		color: var(--color-base-light);
	}

	.footer-stack {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	@media (min-width: 40rem) {
		.footer-stack {
			align-items: flex-start;
		}
	}
</style>
