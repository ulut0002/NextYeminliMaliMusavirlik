import createMiddleware from "next-intl/middleware";
import { DEFAULT_LOCALE, LOCALES } from "./i18n";

export default createMiddleware({
  // A list of all locales that are supported
  locales: LOCALES,

  // Used when no locale matches
  defaultLocale: DEFAULT_LOCALE,
});
export const config = {
  // Match only internationalized pathnames
  matcher: ["/", `/(en|tr|ar|zh|ru)/:path*`],
};
