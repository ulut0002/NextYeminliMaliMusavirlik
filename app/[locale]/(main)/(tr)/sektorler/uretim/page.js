import { NEXT_INDUSTRIES } from "@/appConfig";
import IndustryDetailPage from "@/sitePages/industries/IndustryDetailPage";
import { BREADCRUMB_PATHS, ROUTES } from "@/siteConfig";
import { useLocale, useTranslations } from "next-intl";
import { getBreadcrumbData } from "@/lib/uiUtils";

export default function SektorlerUretim() {
  const t = useTranslations();
  const locale = useLocale();

  const breadcrumbs = getBreadcrumbData(
    BREADCRUMB_PATHS.industriesProduction,
    locale,
    t
  );
  return (
    <IndustryDetailPage
      industry={NEXT_INDUSTRIES.production}
      breadcrumbs={breadcrumbs}
    />
  );
}
