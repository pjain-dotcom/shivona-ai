---
name: Shivona AI
description: AI consulting landing page — readiness audits, implementation, strategic consulting, and AI training/education
tagline: Transforming Intelligence into Impact
status: pre-launch
stack: static-html
contact_channel: whatsapp
contact_link: https://wa.me/919042263277
created: 2026-08-15
---

# Shivona AI

Landing page for Shivona AI, an AI consulting practice offering:

1. **AI readiness audits** — structured reviews to find automation opportunities
2. **Solution & implementation** — building and deploying automations/workflows
3. **Strategic consulting** — ongoing advisory on AI direction and tooling
4. **Training & education** — workshops for schools/youth and women's/community groups

Single static `index.html` page (no framework). The WhatsApp contact number is templated as `%%WHATSAPP_NUMBER%%` and injected at build time from the `WHATSAPP_NUMBER` env var, so it's not hardcoded in source.

## Local preview

```bash
cp .env.example .env   # first time only, edit if the number changes
npm run dev             # builds dist/index.html and serves it
```

## Build

```bash
npm run build
```

Reads `WHATSAPP_NUMBER` from the environment and writes the finished page to `dist/index.html`. Fails loudly if the env var isn't set — no silent fallback to a hardcoded number.

## Deployment

Vercel project settings:
- Build command: `npm run build`
- Output directory: `dist`
- Environment variable: `WHATSAPP_NUMBER=919042263277`

Vercel injects project env vars into the build process automatically, so no `.env` file is needed there. `.env` stays local-only (gitignored).
