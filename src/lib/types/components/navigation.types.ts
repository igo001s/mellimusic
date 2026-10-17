// Types
import type { PageRouteId } from '$app/types';
import type { Component } from 'svelte';
import type { IconProps } from '#lib/types/components/props.types.ts';

export type HeaderNavItems = {
	href: PageRouteId;
	text: string;
}[];

export type FooterColumnItems = {
	title: string;
	items: {
		href: PageRouteId;
		text: string;
	}[];
}[];

export type FooterSocialLink = {
	icon: Component<IconProps>;
	ariaLabel: string;
	href: string;
}[];
