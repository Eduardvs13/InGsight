# Studio — Aletheia

This Studio is embedded in the monorepo under `studio/` but should be treated as a separate app.

Quick notes to keep the Studio secure and production-ready:

- Never commit real API tokens. Use environment variables and add them to your deployment provider secrets.
- `.env` is ignored by the repo `.gitignore`; do not commit it.
- Allow CORS only to trusted origins:
  - `sanity cors add https://your-production-domain`
  - `sanity cors add http://localhost:3000` (for local dev)

Run locally:

```bash
cd studio
npm install
npm run dev
```

Deploy (Sanity-hosted):

```bash
cd studio
npm run build
npm run deploy
```

Security & maintenance checklist:

- Run `npm audit` and address issues. For large updates, test in a branch before forcing fixes.
- Keep `sanity` and `@sanity/*` packages up to date.
- Avoid embedding the Studio inside the public frontend (we keep it separated here).

If you want I can add document-level previews that point to your public frontend URL.
