import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

// Can be imported from a shared config
export const LOCALES = ["en", "tr", "ar", "zh", "ru"];
export const DEFAULT_LOCALE = "tr";
export const DEFAULT_LOCALE_FOR_NEWS = "tr";

export const LOCALE_TO_DIRECTION = {
  en: "ltr",
  tr: "ltr",
  ar: "rtl",
  zh: "ltr",
  ru: "ltr",
};

export const LOCALE_OBJECTS = {
  en: {
    label: "English",
    value: "en",
  },
  tr: {
    label: "Türkçe",
    value: "tr",
  },
  ar: {
    label: "العربية",
    value: "ar",
  },
  zh: {
    label: "中文",
    value: "zh",
  },
  ru: {
    label: "русский",
    value: "ru",
  },
};

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!LOCALES.includes(locale)) notFound();

  return {
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});
