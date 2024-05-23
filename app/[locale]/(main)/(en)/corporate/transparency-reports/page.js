import { getBreadcrumbData } from "@/lib/uiUtils";
import CorporateTransparencyReports from "@/sitePages/corporate/CorporateTransparencyReports";
import { ROUTES } from "@/siteConfig";
import { useLocale, useTranslations } from "next-intl";

export default function SeffaflikRaporlari() {
  const t = useTranslations();
  const locale = useLocale();
  const breadcrumbs = getBreadcrumbData(
    ROUTES.corporateTransparencyReports.breadcrumbs,
    locale,
    t
  );

  return <CorporateTransparencyReports breadcrumbs={breadcrumbs} />;
}
