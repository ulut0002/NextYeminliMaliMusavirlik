import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

// Can be imported from a shared config
export const LOCALES = ["en", "tr", "ar", "zh", "ru"];
export const DEFAULT_LOCALE = "tr";
export const DEFAULT_LOCALE_FOR_NEWS = "tr";

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!LOCALES.includes(locale)) notFound();

  return {
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});
