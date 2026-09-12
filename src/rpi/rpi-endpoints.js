(function (root, factory) { var api = factory(); if (typeof module === 'object' && module.exports) { module.exports = api; } root.PS4HubRpiEndpoints = api; }(this, function () {
  'use strict';
  var adapters = {
    12801: { name: 'RPI 12801', probes: ['/api/status', '/status'], install: { path: '/api/install', method: 'POST', body: 'json' } },
    12800: { name: 'RPI 12800', probes: ['/api/status', '/status'], install: { path: '/api/install', method: 'POST', body: 'json' } },
    generic: { name: 'Generic HTTP Installer', probes: ['/status', '/'], install: { path: '/install', method: 'POST', body: 'json' } }
  };
  function adapterFor(port, custom) { return custom || adapters[port] || adapters.generic; }
  return { adapterFor: adapterFor, adapters: adapters };
}));
