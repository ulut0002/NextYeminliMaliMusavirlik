import { getBreadcrumbData } from "@/lib/uiUtils";
import CorporateTransparencyReports from "@/pages/corporate/CorporateTransparencyReports";
import { ROUTES } from "@/siteConfig";
import { useLocale, useTranslations } from "next-intl";

export default function SeffaflikRaporlari() {
  const t = useTranslations();
  const locale = useLocale();
  const breadcrumbs = getBreadcrumbData(
    ROUTES.kurumsalSaydamlıkRaporları.breadcrumbs,
    locale,
    t
  );

  return <CorporateTransparencyReports breadcrumbs={breadcrumbs} />;
}
