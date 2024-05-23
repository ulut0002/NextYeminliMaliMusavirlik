import { getBreadcrumbData } from "@/lib/uiUtils";
import CorporateOurTeam from "@/sitePages/corporate/CorporateOurTeam";
import { ROUTES } from "@/siteConfig";
import { useLocale, useTranslations } from "next-intl";

export default function KurumsalEkibimiz() {
  const t = useTranslations();
  const locale = useLocale();

  const breadcrumbs = getBreadcrumbData(
    ROUTES.kurumsalEkip.breadcrumbs,
    locale,
    t
  );

  return <CorporateOurTeam breadcrumbs={breadcrumbs} />;
}
