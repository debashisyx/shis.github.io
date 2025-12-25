# HOSPITAL — VS Code project (PWA frontend + Node mock backend)

This is a minimal, **VS Code-ready** project that mimics an OYO-like booking flow for hospitals in Kolkata.
It is intended for local development and testing only.

## Requirements
- Node.js (v16+ recommended)
- VS Code (any platform)

## Quick start (from project root)
```bash
npm install
npm run dev
```

- Frontend served by **live-server** on: `http://127.0.0.1:8080`
- Backend API runs on: `http://localhost:3000`

## What it includes
- `frontend/index.html` — Single-file PWA frontend (browse hospitals, book Admission/OPD/Medicine/Investigation, call via tel:).
- `mock-server/server.js` — Express mock API with GET /api/hospitals and POST /api/book. Bookings are appended to `mock-server/bookings.json`.
 - `mock-server/server.js` — Express mock API with GET /api/hospitals and POST /api/book. Bookings are appended to `mock-server/bookings.json`.
 - `tools/fetch-google-places.js` — (optional) fetch hospital data from Google Places and write to `mock-server/hospitals_google.json` for use by the mock server.
- `package.json` — scripts to run frontend and server concurrently.

## Notes
- Phone numbers in the sample are placeholders. Replace with verified numbers before using in production.
- To convert the PWA to an Android app, consider using Capacitor (I can provide steps if you want).

## Fetching real hospital data from Google Places (optional)
## Production / Safe build

To build a simple, production-ready bundle (minified index.html) and start both the frontend and backend in production mode:

1. Install dependencies:

```powershell
npm install
```

2. Build the frontend bundle and create `dist/`:

```powershell
npm run build
```

3. Start servers in production mode (cross-platform):

```powershell
npm run start-prod
```

This runs the backend and frontend with `NODE_ENV=production`, serves `dist/` from `serve-frontend.js`, and applies lightweight security middleware (helmet, CORS, rate limiting). The backend validates phone numbers and sanitizes user input to reduce risk of stored XSS.

Security notes:
- Keep `GOOGLE_API_KEY` and other secrets out of version control (use `.env` and don't commit it).
- Use `ALLOWED_ORIGINS` in `.env` to set the allowed origin(s) for CORS.
- Only enable `USE_GOOGLE=true` and fetch Google Places data if you have a valid API key and agree to the Google Terms: running the fetch may incur charges.

1. Create a Google Cloud project and enable the Maps/Places APIs. You will need billing enabled and an API key (see https://cloud.google.com/maps-platform/).
2. Export your API key as an environment variable and run the fetch script:

```powershell
setx GOOGLE_API_KEY "YOUR_GOOGLE_API_KEY_HERE"
refreshenv # or restart terminal
npm run fetch-google-hospitals
```

3. Then start the backend using the `USE_GOOGLE` env var to display real Places data in the frontend:

```powershell
setx USE_GOOGLE true
npm run start-server
```

Please note: Google Places is a paid API with usage quotas; keep that in mind when fetching data and follow the Google Cloud Terms of Service.

Enjoy! If you want a downloadable ZIP or a Git repository, tell me and I will provide it.
