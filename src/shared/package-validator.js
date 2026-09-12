(function (root, factory) {
  var api = factory();
  if (typeof module === 'object' && module.exports) { module.exports = api; }
  root.PS4HubPackageValidator = api;
}(this, function () {
  'use strict';
  function validatePackageUrl(value) {
    var text = typeof value === 'string' ? value.replace(/^\s+|\s+$/g, '') : '';
    if (!text) { return { valid: false, code: 'PACKAGE_URL_EMPTY', message: 'Package URL is required.' }; }
    if (/^javascript:/i.test(text)) { return { valid: false, code: 'PACKAGE_URL_UNSAFE', message: 'JavaScript URLs are not allowed.' }; }
    var match = /^(https?):\/\/([^\/?#]+)([^?#]*)(?:\?[^#]*)?(?:#.*)?$/i.exec(text);
    if (!match || !match[2]) { return { valid: false, code: 'PACKAGE_URL_INVALID', message: 'Use an absolute HTTP or HTTPS package URL.' }; }
    if (!/\.pkg$/i.test(match[3])) { return { valid: false, code: 'PACKAGE_URL_EXTENSION', message: 'The package URL must end in .pkg.' }; }
    return { valid: true, value: text };
  }
  return { validatePackageUrl: validatePackageUrl };
}));
