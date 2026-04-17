import { BaseComponentProps } from '../../types/common';

export interface Language { code: string; label: string; nativeLabel: string; }

export interface LanguageSelectorProps extends BaseComponentProps {
  languages: Language[];
  value: string;
  onChange: (code: string) => void;
  label?: string;
  disabled?: boolean;
}
