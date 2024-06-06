import { NEXT_INDUSTRIES } from "@/appConfig";
import IndustryDetailPage from "@/sitePages/industries/IndustryDetailPage";
import { useLocale, useTranslations } from "next-intl";
import { getBreadcrumbData } from "@/lib/uiUtils";
import { BREADCRUMB_PATHS, ROUTES } from "@/siteConfig";

export default function SektorlerFinans() {
  const t = useTranslations();
  const locale = useLocale();

  const breadcrumbs = getBreadcrumbData(
    BREADCRUMB_PATHS.industriesFinancialServices,
    locale,
    t
  );
  return (
    <IndustryDetailPage
      industry={NEXT_INDUSTRIES.financial}
      breadcrumbs={breadcrumbs}
    />
  );
}
