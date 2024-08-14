export type Locale = (typeof locales)[number];

export const locales = ['en', 'tw'] as const;
export const defaultLocale: Locale = 'tw';