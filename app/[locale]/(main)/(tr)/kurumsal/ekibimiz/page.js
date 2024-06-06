import { getBreadcrumbData } from "@/lib/uiUtils";
import CorporateOurTeam from "@/sitePages/corporate/CorporateOurTeam";
import { BREADCRUMB_PATHS, ROUTES } from "@/siteConfig";
import { useLocale, useTranslations } from "next-intl";

export default function KurumsalEkibimiz() {
  const t = useTranslations();
  const locale = useLocale();

  const breadcrumbs = getBreadcrumbData(
    BREADCRUMB_PATHS.corporateOurTeam,
    locale,
    t
  );

  return <CorporateOurTeam breadcrumbs={breadcrumbs} />;
}
