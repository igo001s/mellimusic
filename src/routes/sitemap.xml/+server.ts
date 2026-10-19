// SvelteKit Types
import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = ({ url }) => {
	const pages = [{ name: '', lastMod: '2026-10-19' }];

	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${pages
			.map(
				(page) => `
    <url>
        <loc>${url.origin}/${page.name}</loc>
        <lastmod>${page.lastMod}</lastmod>
    </url>`
			)
			.join('')}
</urlset>`;

	return new Response(body, {
		headers: {
			'Content-Type': 'application/xml; charset=utf-8'
		}
	});
};
