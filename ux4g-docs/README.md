# UX4G Documentation Site

This is the documentation website for UX4G - the Indian Government Design System.

## Getting Started

### Installation

```bash
cd ux4g-docs
npm install
```

### Development

Start the development server:

```bash
npm start
```

The site will open at `http://localhost:3000`.

### Build

Build the static site for production:

```bash
npm run build
```

The output will be in the `build` directory.

### Deployment

Deploy to GitHub Pages:

```bash
GIT_USER=<Your GitHub username> npm run deploy
```

## Project Structure

```
ux4g-docs/
├── docs/                    # Documentation pages (Markdown)
│   ├── getting-started/    # Getting started guides
│   ├── foundations/        # Design foundations
│   ├── components/         # Component documentation
│   ├── patterns/           # Design patterns
│   ├── guidelines/         # Development guidelines
│   └── resources/          # Additional resources
├── blog/                   # Blog posts
├── src/                    # React components and custom pages
│   ├── components/         # Custom React components
│   ├── css/               # Custom CSS
│   └── pages/             # Custom pages (not in docs/)
├── static/                 # Static assets (images, files)
│   └── img/               # Images
├── docusaurus.config.ts   # Docusaurus configuration
├── sidebars.ts            # Sidebar navigation structure
└── package.json           # Dependencies and scripts
```

## Writing Documentation

### Create a New Page

1. Create a Markdown file in the appropriate `docs/` subdirectory
2. Add frontmatter:

```markdown
---
sidebar_position: 1
title: Page Title
---

# Page Title

Content goes here...
```

3. The page will automatically appear in the sidebar

### Add Images

1. Place images in `static/img/`
2. Reference them in Markdown:

```markdown
![Alt text](/img/image.png)
```

### Code Blocks

Use syntax highlighting:

````markdown
```tsx
import { Button } from '@ux4g/react-core';

<Button variant="primary">Click Me</Button>
```
````

### Admonitions

Create callouts:

```markdown
:::note
This is a note
:::

:::tip
This is a tip
:::

:::warning
This is a warning
:::

:::danger
This is dangerous
:::
```

## Internationalization

UX4G documentation supports English and Hindi.

### Add Translations

1. Run the translation command:

```bash
npm run write-translations -- --locale hi
```

2. Translate files in `i18n/hi/`

3. Switch languages using the language dropdown in the navbar

## Storybook Integration

The documentation site embeds Storybook for interactive component examples.

### Embed Storybook

In a documentation page:

```markdown
<iframe
  src="/storybook/iframe.html?id=components-button--primary"
  width="100%"
  height="500px"
  style="border: 1px solid #e5e7eb; border-radius: 8px;"
></iframe>
```

## Algolia Search (Optional)

To enable search:

1. Sign up for Algolia DocSearch
2. Update `docusaurus.config.ts`:

```ts
algolia: {
  appId: 'YOUR_APP_ID',
  apiKey: 'YOUR_SEARCH_API_KEY',
  indexName: 'ux4g',
},
```

## Contributing

1. Create a new branch
2. Make your changes
3. Test locally with `npm start`
4. Submit a pull request

## Resources

- [Docusaurus Documentation](https://docusaurus.io/)
- [Markdown Guide](https://www.markdownguide.org/)
- [MDX Documentation](https://mdxjs.com/)

## License

MIT
