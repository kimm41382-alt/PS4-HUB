# Testing and compatibility

`npm test` runs Node tests for normalization, validation, image URL safety, worker header presence, and XHR-mocked RPI detection on all supported ports. The RPI tests cover 12801 success, 12801-to-12800 fallback, later fallback ports, and all-offline results.

`npm run lint` uses `node --check` for every JavaScript source/test/script. `npm run validate` parses JSON, verifies required entry files, and repeats JavaScript syntax checks. `npm run build` recreates `dist/` from deployable files.

## Compatibility checklist

The browser implementation avoids ES modules, optional chaining, nullish coalescing, dynamic imports, private fields, async/await, IntersectionObserver, service workers, `eval`, and `new Function`. It uses classic scripts, XHR, standard DOM methods, buttons, labels, visible focus styles, live status text, image alt text, and progressive `loading="lazy"`.

Modern Chrome, Firefox, Safari, Android Browser, and real PS4 WebKit still require manual smoke tests in their actual environments. No PS4 console or physical RPI is available to this repository's automated test run, so hardware installation, CORS behavior of a particular RPI, and endpoint schemas are documented as limitations rather than claimed as verified.
