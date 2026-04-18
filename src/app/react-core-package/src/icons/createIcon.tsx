import { createElement, forwardRef } from "react";
import { cn } from "../utils/cn";
import { IconNodeDefinition, UX4GIconProps, UX4GIconSize, UX4GIconSizeToken, UX4G_ICON_SIZES } from "./types";

function resolveIconSize(size: UX4GIconSize = "lg") {
  if (typeof size === "number") return size;
  return UX4G_ICON_SIZES[size as UX4GIconSizeToken] ?? UX4G_ICON_SIZES.lg;
}

export function renderIconNode(node: IconNodeDefinition, key: string) {
  const [tag, attrs] = node;
  return createElement(tag, { key, ...attrs });
}

export function createIconComponent(name: string, nodes: IconNodeDefinition[]) {
  const IconComponent = forwardRef<SVGSVGElement, UX4GIconProps>(
    (
      {
        size = "lg",
        title,
        decorative,
        color,
        strokeWidth = 1.75,
        className,
        children,
        ...props
      },
      ref
    ) => {
      const computedSize = resolveIconSize(size);
      const isDecorative = decorative ?? !title;

      return (
        <svg
          ref={ref}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width={computedSize}
          height={computedSize}
          fill="none"
          stroke={color ?? "currentColor"}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          role={isDecorative ? undefined : "img"}
          aria-hidden={isDecorative ? true : undefined}
          aria-label={!isDecorative && title ? title : undefined}
          focusable="false"
          className={cn("ux4g-icon shrink-0", className)}
          {...props}
        >
          {title ? <title>{title}</title> : null}
          {nodes.map((node, index) => renderIconNode(node, `${name}-${index}`))}
          {children}
        </svg>
      );
    }
  );

  IconComponent.displayName = name;

  return IconComponent;
}
