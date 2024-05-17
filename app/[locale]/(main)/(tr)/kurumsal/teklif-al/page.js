import { getBreadcrumbData } from "@/lib/uiUtils";
import CorporateGetQuote from "@/pages/corporate/CorporateGetQuote";
import { ROUTES } from "@/siteConfig";
import { useLocale, useTranslations } from "next-intl";

export default function TeklifAl() {
  const t = useTranslations();
  const locale = useLocale();

  const breadcrumbs = getBreadcrumbData(
    ROUTES.kurumsalTeklifAl.breadcrumbs,
    locale,
    t
  );
  return <CorporateGetQuote breadcrumbs={breadcrumbs} />;
}
