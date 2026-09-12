# RPI configuration and limitations

Open **RPI Settings**, enter the PS4 or installer LAN host (for example `192.168.1.10`), and use **Test Connection** or **Auto Detect**. **Save IP** stores host, timeout, and retry settings when `localStorage` is available; **Forget IP** removes them.

The detection sequence is 12801 → 12800 → 7070 → 8080 → 2000. The 12801 and 12800 adapters are intentionally distinct configuration records. Each adapter probes its status endpoints before an installation request is sent. Generic fallback ports use generic probe/install routes and may need a custom adapter if an installer exposes a different HTTP API.

The default installer request is `POST /api/install` with JSON `{ "url": "https://…/package.pkg" }`; generic fallback installs use `POST /install`. Confirm the exact endpoint, request schema, and CORS policy of your RPI implementation before production use. A successful mock or HTTP status probe is not proof of compatibility with physical PS4 hardware.

Package links must be absolute HTTP(S) URLs ending in `.pkg` (case-insensitive). The hub passes the URL to RPI; it does not open a new tab or load package bytes into browser memory.
