import { NEXT_INDUSTRIES } from "@/appConfig";
import IndustryDetailPage from "@/pages/industries/IndustryDetailPage";
import { getBreadcrumbData } from "@/lib/uiUtils";
import { ROUTES } from "@/siteConfig";
import { useLocale, useTranslations } from "next-intl";

export default function SektorlerTeknoloji() {
  const t = useTranslations();
  const locale = useLocale();

  const breadcrumbs = getBreadcrumbData(
    ROUTES.industriesTechnology.breadcrumbs,
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
