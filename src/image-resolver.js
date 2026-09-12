(function (root, factory) { var api = factory(); if (typeof module === 'object' && module.exports) { module.exports = api; } root.PS4HubImageResolver = api; }(this, function () {
  'use strict'; var FALLBACK = 'assets/game-placeholder.svg';
  function resolve(value, baseUrl) { var text = typeof value === 'string' ? value.replace(/^\s+|\s+$/g, '') : ''; if (!text || /^javascript:/i.test(text) || /^data:/i.test(text)) { return FALLBACK; } if (/^\/\//.test(text)) { return 'https:' + text; } if (/^http:\/\//i.test(text)) { return 'https://' + text.substring(7); } if (/^https:\/\//i.test(text)) { return text; } if (/^[a-z][a-z0-9+.-]*:/i.test(text)) { return FALLBACK; } if (baseUrl && /^https?:\/\//i.test(baseUrl)) { return baseUrl.replace(/\/[^\/]*$/, '/') + text.replace(/^\//, ''); } return text; }
  function applyFallback(image) { image.onerror = function () { image.onerror = null; image.src = FALLBACK; }; }
  return { resolve: resolve, applyFallback: applyFallback, FALLBACK: FALLBACK };
}));
