(function (root, factory) { var api = factory(); if (typeof module === 'object' && module.exports) { module.exports = api; } root.PS4HubGamesCache = api; }(this, function () {
  'use strict'; var KEY = 'ps4hub.games.v1';
  function storage() { try { return typeof localStorage !== 'undefined' ? localStorage : null; } catch (ignore) { return null; } }
  function save(games) { var store = storage(); if (!store) { return false; } try { store.setItem(KEY, JSON.stringify({ timestamp: new Date().getTime(), games: games })); return true; } catch (ignore) { return false; } }
  function read(maxAge) { var store = storage(), item; if (!store) { return null; } try { item = JSON.parse(store.getItem(KEY) || 'null'); if (!item || Object.prototype.toString.call(item.games) !== '[object Array]' || (maxAge && new Date().getTime() - item.timestamp > maxAge)) { return null; } return item; } catch (ignore) { return null; } }
  function clear() { var store = storage(); if (store) { try { store.removeItem(KEY); } catch (ignore) {} } }
  return { save: save, read: read, clear: clear, KEY: KEY };
}));
