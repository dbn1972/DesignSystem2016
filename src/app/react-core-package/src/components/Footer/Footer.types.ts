import { ReactNode } from 'react';
import { BaseComponentProps } from '../../types/common';

export interface FooterLink { label: string; href: string; }
export interface FooterSection { title: string; links: FooterLink[]; }

export interface FooterProps extends BaseComponentProps {
  sections?: FooterSection[];
  copyright?: string;
  logo?: ReactNode;
  socialLinks?: ReactNode;
}
