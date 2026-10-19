// SvelteKit Types
import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = ({ url }) => {
	return new Response(
		`User-agent: *
Allow: /

Sitemap: ${url.origin}/sitemap.xml`,
		{
			headers: {
				'Content-Type': 'text/plain; charset=utf-8'
			}
		}
	);
};
