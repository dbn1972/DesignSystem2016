---
sidebar_position: 3
title: Quick Start
---

# Quick Start

Get the UX4G documentation site running locally in under 2 minutes.

## 1. Clone and install

```bash
git clone https://github.com/dbn1972/DesignSystem2016.git
cd DesignSystem2016
pnpm install
```

## 2. Start the dev server

```bash
pnpm run dev
```

Open **http://localhost:5173/** to see the documentation site.

## 3. Explore components

Navigate to any component page, for example:
- `/components/button` — Button with 6 variants
- `/components/input` — Text input with validation
- `/components/aadhaar-input` — India-specific Aadhaar number input

## 4. Run tests

```bash
pnpm vitest --run
```

## 5. Build for production

```bash
pnpm run build
```

Output goes to `dist/` — static files ready for deployment.

## Key commands

| Command | Purpose |
|---|---|
| `pnpm run dev` | Start dev server |
| `pnpm run build` | Production build |
| `pnpm run typecheck` | TypeScript checking |
| `pnpm vitest --run` | Run all tests |
| `pnpm run verify` | Full verification pipeline |
