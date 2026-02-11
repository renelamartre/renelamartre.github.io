import fr from './fr.json';
import en from './en.json';
import es from './es.json';

export type Locale = 'fr' | 'en' | 'es';

export const LOCALES: Locale[] = ['fr', 'en', 'es'];

const DEFAULT_LOCALE: Locale = 'fr';

const messages: Record<Locale, Record<string, unknown>> = { fr, en, es };

function getNested(obj: Record<string, unknown>, key: string): string | undefined {
  const parts = key.split('.');
  let current: unknown = obj;
  for (const part of parts) {
    if (current == null || typeof current !== 'object') return undefined;
    current = (current as Record<string, unknown>)[part];
  }
  return typeof current === 'string' ? current : undefined;
}

export function t(locale: Locale, key: string): string {
  const data = messages[locale];
  const value = data ? getNested(data, key) : undefined;
  if (value) return value;
  const fallback = messages[DEFAULT_LOCALE];
  const fallbackValue = fallback ? getNested(fallback, key) : undefined;
  return fallbackValue ?? key;
}
