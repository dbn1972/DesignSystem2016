---
sidebar_position: 2
title: Installation
---

# Installation

## Prerequisites

- Node.js 20+ (recommended: v24)
- pnpm 10+ (`npm install -g pnpm`)

## Install the documentation site

```bash
git clone https://github.com/dbn1972/DesignSystem2016.git
cd DesignSystem2016
pnpm install
```

## Install component packages

### React

```bash
npm install @ux4g/react-core @ux4g/tokens @ux4g/styles react react-dom
```

### Angular

```bash
npm install @ux4g/angular-core @ux4g/tokens @ux4g/styles
```

### Web Components

```bash
npm install @ux4g/web-components @ux4g/tokens @ux4g/styles
```

## Import styles

Add to your app's entry point:

```css
@import '@ux4g/tokens/dist/tokens.css';
@import '@ux4g/styles/dist/styles.css';
```

## Verify installation

```tsx
import { Button } from '@ux4g/react-core';

function App() {
  return <Button variant="primary">Hello UX4G</Button>;
}
```
