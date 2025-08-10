'use client';

import { useEffect, useState } from 'react';

type TranslationKey = string;
type Translations = Record<string, any>;

// Create a custom event for locale changes
const LOCALE_CHANGE_EVENT = 'localeChange';

// Global locale state
let globalLocale = 'en';

// Function to get current locale
const getCurrentLocale = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('locale') || 'en';
  }
  return 'en';
};

// Function to set locale globally
const setGlobalLocale = (newLocale: string) => {
  globalLocale = newLocale;
  if (typeof window !== 'undefined') {
    localStorage.setItem('locale', newLocale);
    // Dispatch custom event to notify all components
    window.dispatchEvent(new CustomEvent(LOCALE_CHANGE_EVENT, { detail: newLocale }));
  }
};

export const useTranslation = () => {
  const [locale, setLocale] = useState('en'); // Always start with 'en' to avoid hydration mismatch
  const [translations, setTranslations] = useState<Translations>({});
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Mark as client-side and set the actual locale
    setIsClient(true);
    const initialLocale = getCurrentLocale();
    setLocale(initialLocale);
    globalLocale = initialLocale;

    // Listen for locale changes
    const handleLocaleChange = (event: CustomEvent) => {
      setLocale(event.detail);
    };

    window.addEventListener(LOCALE_CHANGE_EVENT, handleLocaleChange as EventListener);

    return () => {
      window.removeEventListener(LOCALE_CHANGE_EVENT, handleLocaleChange as EventListener);
    };
  }, []);

  useEffect(() => {
    const loadTranslations = async () => {
      try {
        const response = await import(`../locales/${locale}.json`);
        setTranslations(response.default);
      } catch (error) {
        console.error(`Failed to load translations for locale: ${locale}`, error);
        // Fallback to English
        const fallback = await import(`../locales/en.json`);
        setTranslations(fallback.default);
      }
    };

    if (locale) {
      loadTranslations();
    }
  }, [locale]);

  const t = (key: TranslationKey): string => {
    const keys = key.split('.');
    let value: any = translations;

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key; // Return key if translation not found
      }
    }

    return typeof value === 'string' ? value : key;
  };

  const tArray = (key: TranslationKey): string[] => {
    const keys = key.split('.');
    let value: any = translations;

    for (const k of keys) {
      value = value?.[k];
    }

    return Array.isArray(value) ? value : [];
  };

  const changeLocale = (newLocale: string) => {
    setGlobalLocale(newLocale);
  };

  return { t, tArray, locale, changeLocale, isClient };
};
