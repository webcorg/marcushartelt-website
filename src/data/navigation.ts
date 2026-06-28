export type NavItem = {
  href: string;
  label: string;
  page: string;
  color?: 'red' | 'green' | 'yellow' | 'blue' | 'magenta' | 'cyan' | 'white';
  theme?: string;
};

export type CategoryItem = {
  code: string;
  name: string;
  label: string;
  slug: string;
  color: 'red' | 'green' | 'yellow' | 'blue' | 'magenta' | 'cyan' | 'white';
  theme?: string;
};

export const categories = [
  { code: '200', name: 'Fashion', label: 'FASHION', slug: 'fashion', color: 'magenta', theme: 'fashion' },
  { code: '300', name: 'Lifestyle', label: 'LIFESTYLE', slug: 'lifestyle', color: 'green', theme: 'lifestyle' },
  { code: '400', name: 'Fashion Week', label: 'FASHION WEEK', slug: 'fashion-week', color: 'yellow', theme: 'fashion-week' },
  { code: '500', name: 'Events', label: 'EVENTS', slug: 'events', color: 'blue', theme: 'events' }
] as const satisfies readonly CategoryItem[];

export const mainNavigation: NavItem[] = [
  ...categories.map((category) => ({
    href: `/projects?category=${category.slug}`,
    label: category.label,
    page: category.code,
    color: category.color,
    theme: category.theme
  })),
  { href: '/about', label: 'ABOUT', page: '700', color: 'cyan' },
  { href: '/contact', label: 'CONTACT', page: '800', color: 'green' },
  { href: '/legal', label: 'LEGAL / SITE INFO', page: '900', color: 'yellow' }
];

export const footerNavigation: NavItem[] = [
  { href: '/', label: 'INDEX', page: '100', color: 'red' },
  { href: '/about', label: 'ABOUT', page: '700', color: 'green' },
  { href: '/contact', label: 'CONTACT', page: '800', color: 'yellow' },
  { href: '/legal', label: 'LEGAL', page: '900', color: 'cyan' }
];

export function getCategoryByName(categoryName: string) {
  return categories.find((category) => category.name.toLowerCase() === categoryName.toLowerCase());
}

export function getCategoryBySlug(categorySlug: string) {
  return categories.find((category) => category.slug.toLowerCase() === categorySlug.toLowerCase());
}
