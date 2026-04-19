import type { ElementType, ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/app/react-core-package/src/utils/cn";

type PageContainerProps<T extends ElementType = "div"> = {
  as?: T;
  className?: string;
  children: ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "className" | "children">;

export const BASE_CLASSES = "mx-auto max-w-6xl px-6";

export default function PageContainer<T extends ElementType = "div">({
  as,
  className,
  children,
  ...rest
}: PageContainerProps<T>) {
  const Component = as || "div";
  return (
    <Component className={cn(BASE_CLASSES, className)} {...rest}>
      {children}
    </Component>
  );
}

PageContainer.displayName = "PageContainer";
