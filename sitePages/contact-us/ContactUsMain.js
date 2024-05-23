import { getBreadcrumbData } from "@/lib/uiUtils";
import { ROUTES } from "@/siteConfig";
import { useLocale, useTranslations } from "next-intl";

export default function ContactUsMain() {
  const t = useTranslations();
  const locale = useLocale();

  const breadcrumbs = getBreadcrumbData(ROUTES.iletisim.breadcrumbs, locale, t);
  return (
    <div>
      {breadcrumbs}
      ContactUsMain {locale}
    </div>
  );
}
