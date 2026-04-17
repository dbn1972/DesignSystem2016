import type { Meta, StoryObj } from '@storybook/react';
import { LanguageSelector } from './LanguageSelector';
const meta: Meta<typeof LanguageSelector> = { title: 'Components/LanguageSelector', component: LanguageSelector, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof LanguageSelector>;
export const Default: Story = { args: { languages: [{ code: 'en', label: 'English', nativeLabel: 'English' }, { code: 'hi', label: 'Hindi', nativeLabel: 'हिन्दी' }, { code: 'ta', label: 'Tamil', nativeLabel: 'தமிழ்' }, { code: 'bn', label: 'Bengali', nativeLabel: 'বাংলা' }], value: 'en' } };
