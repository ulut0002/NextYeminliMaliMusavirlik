import { getBreadcrumbData } from "@/lib/uiUtils";
import CorporateTransparencyReports from "@/sitePages/corporate/CorporateTransparencyReports";
import { BREADCRUMB_PATHS, ROUTES } from "@/siteConfig";
import { useLocale, useTranslations } from "next-intl";

export default function SeffaflikRaporlari() {
  const t = useTranslations();
  const locale = useLocale();
  const breadcrumbs = getBreadcrumbData(
    BREADCRUMB_PATHS.corporateTransparencyReports,
    locale,
    t
  );

  return <CorporateTransparencyReports breadcrumbs={breadcrumbs} />;
}
