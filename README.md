# PS4 Game Hub

Lightweight, static PS4 game catalogue with a PS4 WebKit-friendly Remote Package Installer (RPI) client. It uses classic scripts, `XMLHttpRequest`, DOM APIs, and batched rendering; no runtime dependencies are required.

## Commands

```sh
npm install
npm test
npm run lint
npm run build
npm run validate
```

`npm run build` creates deployable static assets in `dist/`. Deploy that directory to Cloudflare Pages, or use `wrangler deploy` for the included Worker after building.

## Catalogue format

Use `games.json` (preferred) or `game.json` containing an array, or `{ "games": [...] }`. Supported aliases include `title`/`name`, `pkg_url`/`pkg`/`download_url`, and `image`/`cover`/`thumbnail`. Invalid or incomplete entries remain visible where possible; duplicate records are removed.

See [architecture](docs/ARCHITECTURE.md), [RPI setup](docs/RPI.md), [deployment](docs/DEPLOYMENT.md), [troubleshooting](docs/TROUBLESHOOTING.md), and [testing](docs/TESTING.md).
