(function (root, factory) {
  var api = factory(); if (typeof module === 'object' && module.exports) { module.exports = api; } root.PS4HubGamesNormalizer = api;
}(this, function () {
  'use strict';
  var fields = { title: ['title', 'name', 'game_name'], packageUrl: ['url', 'pkg', 'pkg_url', 'download', 'download_url'], image: ['image', 'img', 'cover', 'thumbnail', 'thumb', 'cover_url', 'image_url', 'icon'], size: ['size', 'file_size'], titleId: ['title_id', 'id'] };
  function first(record, names) { var i, value; for (i = 0; i < names.length; i += 1) { value = record[names[i]]; if (value !== undefined && value !== null && String(value).replace(/^\s+|\s+$/g, '')) { return String(value).replace(/^\s+|\s+$/g, ''); } } return ''; }
  function plain(value) { return typeof value === 'string' ? value.replace(/[<>]/g, '') : ''; }
  function normalizeGame(record, index) {
    record = record && typeof record === 'object' ? record : {};
    return { id: first(record, fields.titleId) || 'game-' + index, title: plain(first(record, fields.title)) || 'Untitled game', packageUrl: first(record, fields.packageUrl), image: first(record, fields.image), size: first(record, fields.size), version: first(record, ['version']), region: first(record, ['region']), genre: first(record, ['genre']), firmware: first(record, ['firmware', 'fw']), description: plain(first(record, ['description', 'summary'])) };
  }
  function normalizeGames(games) { var out = [], seen = {}, i, item, key; for (i = 0; i < games.length; i += 1) { item = normalizeGame(games[i], i); key = item.id + '|' + item.title + '|' + item.packageUrl; if (!seen[key]) { seen[key] = true; out.push(item); } } return out; }
  return { normalizeGame: normalizeGame, normalizeGames: normalizeGames };
}));
