import type { Meta, StoryObj } from '@storybook/react';
import { CodeBlock } from './CodeBlock';
const meta: Meta<typeof CodeBlock> = { title: 'Components/CodeBlock', component: CodeBlock, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof CodeBlock>;
export const Default: Story = { args: { code: 'import { Button } from "@ux4g/react";\n\nexport default function App() {\n  return <Button>Click me</Button>;\n}', language: 'tsx', filename: 'App.tsx' } };
export const WithLineNumbers: Story = { args: { code: 'const a = 1;\nconst b = 2;\nconst c = a + b;\nconsole.log(c);', showLineNumbers: true, filename: 'example.js' } };
