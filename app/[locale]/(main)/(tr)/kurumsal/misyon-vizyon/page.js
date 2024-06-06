import { getBreadcrumbData } from "@/lib/uiUtils";
import CorporateMissionVision from "@/sitePages/corporate/CorporateMissionVision";
import { BREADCRUMB_PATHS } from "@/siteConfig";
import { useLocale, useTranslations } from "next-intl";

export default function KurumsalMisyonVizyon() {
  const t = useTranslations();
  const locale = useLocale();

  const breadcrumbs = getBreadcrumbData(
    BREADCRUMB_PATHS.corporateMissionVision,
    locale,
    t
  );

  return <CorporateMissionVision breadcrumbs={breadcrumbs} />;
}
