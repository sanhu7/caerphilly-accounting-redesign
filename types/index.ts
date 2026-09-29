export type NavItem = {
  label: string;
  href: string;
  /** If present, the item renders as a dropdown menu. */
  children?: NavItem[];
};

export type Service = {
  slug: string;
  title: string;
  description: string;
};