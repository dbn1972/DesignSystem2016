import type { SVGProps } from "react";

export const UX4G_ICON_SIZES = {
  sm: 16,
  md: 20,
  lg: 24,
  xl: 32
} as const;

export type UX4GIconSizeToken = keyof typeof UX4G_ICON_SIZES;
export type UX4GIconSize = UX4GIconSizeToken | number;

export type UX4GIconCategory =
  | "navigation"
  | "actions"
  | "status"
  | "users"
  | "security"
  | "communication"
  | "data"
  | "files"
  | "accessibility"
  | "system"
  | "government";

export interface UX4GIconProps extends Omit<SVGProps<SVGSVGElement>, "color"> {
  size?: UX4GIconSize;
  title?: string;
  decorative?: boolean;
  color?: string;
  strokeWidth?: number;
}

export interface UX4GIconMetadata {
  name: string;
  displayName: string;
  category: UX4GIconCategory;
  keywords: string[];
}

export type IconNodeDefinition = [string, Record<string, string>];
