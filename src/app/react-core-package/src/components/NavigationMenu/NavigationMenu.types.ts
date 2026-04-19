export interface NavigationMenuItem {
  label: string;
  href?: string;
  active?: boolean;
  children?: NavigationMenuItem[];
  onClick?: () => void;
}

export interface NavigationMenuProps extends React.HTMLAttributes<HTMLElement> {
  items: NavigationMenuItem[];
  orientation?: 'horizontal' | 'vertical';
}
