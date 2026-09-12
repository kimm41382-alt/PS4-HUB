# Architecture

## Entry points and data flow

`index.html` is a static, classic-script entry point. It loads small, dependency-free browser files in order, then `src/app.js`. The application requests `games.json`, falls back to `game.json`, validates the payload, normalizes aliases, de-duplicates records, caches the last successful catalogue in `localStorage`, and renders only 24 matching cards initially. A failed remote catalogue therefore displays cached games or a clear status message instead of a blank page.

Game titles and metadata are inserted with `textContent`; package and image URLs are validated separately. `src/image-resolver.js` rejects script/data URLs, upgrades HTTP images to HTTPS, resolves protocol-relative URLs, and assigns `assets/game-placeholder.svg` on image failure.

## RPI engine

`src/rpi/` is isolated from UI code. `rpi-config.js` persists optional host/settings, `rpi-endpoints.js` owns adapters, `rpi-client.js` supplies XHR timeout/retry/error handling, `rpi-detector.js` probes adapters in port order, and `rpi-install.js` validates a `.pkg` URL before posting it. The default order is 12801, 12800, 7070, 8080, 2000. 12801 and 12800 have separate adapter records even where their configured default paths currently coincide; a deployment can provide a custom adapter without changing UI flow.

Detection only proves that a browser-accessible probe replied. It cannot bypass CORS or prove a real PS4 accepts a package. The browser never navigates to or downloads the package URL.

## Cloudflare

`worker.js` routes `/api/health`, returns JSON 404s for unknown API endpoints, answers CORS preflight, and delegates static GETs to the `ASSETS` binding. Static routes are not converted to API/HTML error responses. `wrangler.toml` binds built `dist/` assets.

## Failure boundaries

* malformed/missing catalogue: alternate file then cache, then friendly status;
* image failure: one-card placeholder only;
* incomplete game: safe defaults and disabled install button;
* invalid package/host: validation message before network traffic;
* offline/timeout/rejected installer: typed RPI error and continued browsing;
* browser CORS failure: reported as a browser-visible connection failure; JavaScript cannot work around it.
