import { getBreadcrumbData } from "@/lib/uiUtils";
import CorporateGetQuote from "@/sitePages/corporate/CorporateGetQuote";
import { BREADCRUMB_PATHS } from "@/siteConfig";
import { useLocale, useTranslations } from "next-intl";

export default function TeklifAl() {
  const t = useTranslations();
  const locale = useLocale();

  const breadcrumbs = getBreadcrumbData(
    BREADCRUMB_PATHS.corporateGetQuote,
    locale,
    t
  );
  return <CorporateGetQuote breadcrumbs={breadcrumbs} />;
}
