import { getBreadcrumbData } from "@/lib/uiUtils";
import CorporateMissionVision from "@/sitePages/corporate/CorporateMissionVision";
import { ROUTES } from "@/siteConfig";
import { useLocale, useTranslations } from "next-intl";

export default function KurumsalMisyonVizyon() {
  const t = useTranslations();
  const locale = useLocale();

  const breadcrumbs = getBreadcrumbData(
    ROUTES.corporateMissionVision.breadcrumbs,
    locale,
    t
  );

  return <CorporateMissionVision breadcrumbs={breadcrumbs} />;
}
