# Troubleshooting

* **No games:** check that `games.json` is valid JSON and has an array or `games` array. The app retries `game.json` and then an earlier local cache.
* **Placeholder cover:** the image is missing, unsafe, unsupported, or failed to load. It does not affect the rest of the grid.
* **No compatible installer:** confirm the LAN host, RPI process, port, endpoint adapter, firewall, and CORS headers. Browser JavaScript cannot bypass CORS.
* **Timed out:** increase timeout only after confirming the host is reachable; a timeout is not evidence of a particular RPI protocol.
* **Install rejected:** ensure the URL is reachable from the PS4, ends in `.pkg`, and matches the RPI endpoint's expected JSON schema.
* **PS4 performance:** enable PS4 Mode, use search/filters, and load more games only as needed.
