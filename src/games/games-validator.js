(function (root, factory) {
  var api = factory(); if (typeof module === 'object' && module.exports) { module.exports = api; } root.PS4HubGamesValidator = api;
}(this, function () {
  'use strict';
  function arrayFromPayload(payload) {
    if (Object.prototype.toString.call(payload) === '[object Array]') { return payload; }
    if (payload && Object.prototype.toString.call(payload.games) === '[object Array]') { return payload.games; }
    if (payload && Object.prototype.toString.call(payload.data) === '[object Array]') { return payload.data; }
    return null;
  }
  function validatePayload(payload) {
    var games = arrayFromPayload(payload);
    return games ? { valid: true, games: games } : { valid: false, code: 'GAMES_FORMAT_INVALID', message: 'Expected an array or an object with a games array.' };
  }
  return { validatePayload: validatePayload };
}));
