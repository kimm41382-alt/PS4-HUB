# Deployment

## Cloudflare Pages

Run `npm run build` and deploy `dist/` as the Pages output directory. Keep `games.json` at the published root alongside `index.html`.

## Cloudflare Worker

After `npm run build`, configure Wrangler authentication and run `npx wrangler deploy`. The Worker serves static requests through the `ASSETS` binding and has `/api/health` for a JSON health response. It explicitly handles `OPTIONS`, API 404s, 405s, and unexpected 500s with CORS and `nosniff` headers.

The CSP permits same-origin scripts/styles, HTTPS images, and HTTP/HTTPS RPI connections. If your package covers require a non-HTTPS image host, add it deliberately after evaluating the security impact.
