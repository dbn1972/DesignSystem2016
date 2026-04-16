---
sidebar_position: 2
title: Architecture
---

# Architecture

## System Overview

```
┌──────────────────────────────────────────┐
│          Vite Documentation Site          │
│         (77 component doc pages)          │
├──────────┬──────────┬──────────┬─────────┤
│  React   │ Angular  │   Web    │ Tokens  │
│  Core    │  Core    │ Comps    │ Package │
├──────────┴──────────┴──────────┴─────────┤
│         Design Tokens (CSS vars)          │
│         Shared Styles (Tailwind v4)       │
└──────────────────────────────────────────┘
```

## Tech Stack

| Layer | Technology |
|---|---|
| Runtime | React 18.3, TypeScript 5.9+ |
| Build | Vite 6.3 |
| Styling | Tailwind CSS v4, CSS custom properties |
| Testing | Vitest 4, Testing Library, Playwright |
| Routing | React Router v7 |
| Package Manager | pnpm workspaces |

## Key Decisions

- **Multi-framework** — React + Angular + Web Components for government department flexibility
- **Vite over Next.js** — Faster dev server, no SSR needed for docs
- **CVA for variants** — Type-safe, composable, no runtime CSS
- **pnpm workspaces** — Strict deps, fast installs, disk efficient
