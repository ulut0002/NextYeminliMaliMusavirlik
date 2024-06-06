import { NEXT_INDUSTRIES } from "@/appConfig";
import IndustryDetailPage from "@/sitePages/industries/IndustryDetailPage";
import { getBreadcrumbData } from "@/lib/uiUtils";
import { BREADCRUMB_PATHS, ROUTES } from "@/siteConfig";
import { useLocale, useTranslations } from "next-intl";

export default function SektorlerTeknoloji() {
  const t = useTranslations();
  const locale = useLocale();

  const breadcrumbs = getBreadcrumbData(
    BREADCRUMB_PATHS.industriesTechnology,
    locale,
    t
  );
  return (
    <IndustryDetailPage
      industry={NEXT_INDUSTRIES.technology}
      breadcrumbs={breadcrumbs}
    />
  );
}
