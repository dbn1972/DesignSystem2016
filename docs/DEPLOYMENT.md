# Deployment Guide

## Production Build

```bash
pnpm run build
```

Output goes to `dist/` — static HTML/JS/CSS files ready for any web server.

## Docker

### Dockerfile (recommended)

```dockerfile
FROM node:20-alpine AS builder

WORKDIR /app

# Copy dependency files
COPY package.json pnpm-lock.yaml .npmrc ./

# Install dependencies
RUN npm install -g pnpm && pnpm install --frozen-lockfile

# Copy source
COPY . .

# Build
RUN pnpm run build

# Production image
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### nginx.conf (for SPA routing)

```nginx
server {
    listen 80;
    root /usr/share/nginx/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location /assets {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

### Build & Run

```bash
docker build -t ux4g-docs .
docker run -p 80:80 ux4g-docs
```

## Known Dependency Issues

### Angular peer dependency conflicts

The project includes Angular 18 packages as dev dependencies (for documentation code examples). If `npm install` fails with ERESOLVE errors:

1. Ensure `.npmrc` contains `legacy-peer-deps=true`
2. Or use `npm install --legacy-peer-deps`
3. Or use `pnpm install` (handles peers differently)

### Key version constraints

| Package | Version | Reason |
|---|---|---|
| `@angular/*` | `^18.2.14` | All Angular packages must match |
| `zone.js` | `~0.14.10` | Required by Angular 18 |
| `jest-preset-angular` | `^14.4.2` | v16 requires Angular 19+ |

## Environment Variables

No environment variables are required for the documentation site. All content is static.

## CI/CD Pipeline

### Recommended steps

```yaml
steps:
  - checkout
  - run: pnpm install --frozen-lockfile
  - run: pnpm run typecheck
  - run: pnpm vitest --run
  - run: pnpm run build
  - deploy: dist/
```

## Verification Before Deploy

```bash
pnpm run typecheck        # 0 TypeScript errors
pnpm vitest --run         # 2,551 tests passing
pnpm run build            # Production build succeeds
```
