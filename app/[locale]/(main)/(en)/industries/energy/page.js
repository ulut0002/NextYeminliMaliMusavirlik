import { NEXT_INDUSTRIES } from "@/appConfig";
import { getBreadcrumbData } from "@/lib/uiUtils";
import IndustryDetailPage from "@/sitePages/industries/IndustryDetailPage";
import { BREADCRUMB_PATHS } from "@/siteConfig";
import { useLocale, useTranslations } from "next-intl";

export default function SektorlerEnerji() {
  const t = useTranslations();
  const locale = useLocale();

  const breadcrumbs = getBreadcrumbData(
    BREADCRUMB_PATHS.industriesEnergy,
    locale,
    t
  );
  return (
    <IndustryDetailPage
      industry={NEXT_INDUSTRIES.energy}
      breadcrumbs={breadcrumbs}
    />
  );
}
