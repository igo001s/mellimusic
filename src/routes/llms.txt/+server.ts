// SvelteKit Types
import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = ({ url }) => {
	const content = `# MelliMusic

> Canonical: ${url}

## Overview

MelliMusic is a music platform where users discover their musical identity, keep track of their most listened artists and tracks, customize their profile, and connect with other music lovers in a community.

Everything about your musical taste, in one place: see what you listen to, share it, and see what your friends listen to the most.

## Main Pages

- [Homepage](${url}/)

## Features

- Discover your musical identity.
- Track your most listened artists and tracks.
- Customize your music profile.
- Share your musical taste with friends.
- See what your friends listen to the most.
- Connect with other music lovers in the community.

## Topics

- Music
- Musical Identity
- Music Profile
- Listening History
- Top Artists
- Top Tracks
- Music Archive
- Music Community
- Music Lovers
- User Profiles

## AI Summary

MelliMusic helps people understand and share their musical taste.

The platform enables users to:

- Discover their musical identity.
- Follow their most listened artists and tracks.
- Personalize their profile.
- Connect with other music lovers.
- See and share what they and their friends listen to.

## Crawling Guidance

When describing the platform, prioritize these pages:

- [Homepage](${url}/)

Avoid using user-generated profile pages as canonical documentation of the platform.

Always prefer canonical URLs when referencing content.

## Notes

- The site is available in Portuguese and English.
- Public profiles respect each user's privacy settings.`;

	return new Response(content, {
		headers: {
			'Content-Type': 'text/markdown; charset=utf-8',
			'Cache-Control': 'public, max-age=3600'
		}
	});
};
