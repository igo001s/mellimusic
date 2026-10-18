// Types
import type { PageRouteId } from '$app/types';
import type { Component } from 'svelte';
import type { IconProps } from '#lib/types/components/props.types.ts';

export type HeaderNavItem = {
	href: PageRouteId;
	text: string;
};

export type FooterColumnItem = {
	title: string;
	items: {
		href: PageRouteId;
		text: string;
	}[];
};

export type FooterSocialLink = {
	icon: Component<IconProps>;
	ariaLabel: string;
	href: string;
};
