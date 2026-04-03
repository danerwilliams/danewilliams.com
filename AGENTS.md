# AGENTS.md

## Development environment

This is a Next.js 15 personal portfolio/blog site (Pages Router). No database, no Docker, no environment variables required.

### Services

| Service    | Command       | Port | Notes               |
| ---------- | ------------- | ---- | ------------------- |
| Dev server | `npm run dev` | 3000 | Only service needed |

### Key commands

- **Lint:** `npx next lint` (ESLint) and `npx prettier --check .` (Prettier)
- **Build:** `npm run build` (also runs `next-sitemap` via postbuild)
- **Dev:** `npm run dev`
- **Format:** `npm run format` (auto-fix Prettier)

### Notes

- The `next lint` command shows a deprecation warning about migrating to ESLint CLI in Next.js 16; this is informational only and does not affect functionality.
- Build fetches GitHub star/contributor counts via unauthenticated public API calls; builds succeed even if GitHub API is unreachable.
- No `.env` file is needed. No secrets are required.
