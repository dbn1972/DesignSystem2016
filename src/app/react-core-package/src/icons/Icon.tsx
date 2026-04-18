import type { ComponentType } from "react";
import { resolveIconName, UX4G_ICONS, UX4GIconAliasName, UX4GIconName } from "./registry";
import type { UX4GIconProps } from "./types";

export interface IconProps extends UX4GIconProps {
  name: UX4GIconName | UX4GIconAliasName;
}

export function Icon({ name, ...props }: IconProps) {
  const resolvedName = resolveIconName(name);
  const IconComponent = UX4G_ICONS[resolvedName] as ComponentType<UX4GIconProps>;
  return <IconComponent {...props} />;
}
