import { getBreadcrumbData } from "@/lib/uiUtils";
import CorporateMissionVision from "@/pages/corporate/CorporateMissionVision";
import { ROUTES } from "@/siteConfig";
import { useLocale, useTranslations } from "next-intl";

export default function KurumsalMisyonVizyon() {
  const t = useTranslations();
  const locale = useLocale();

  const breadcrumbs = getBreadcrumbData(
    ROUTES.kurumsalMisyonVizyon.breadcrumbs,
    locale,
    t
  );

  return <CorporateMissionVision breadcrumbs={breadcrumbs} />;
}
