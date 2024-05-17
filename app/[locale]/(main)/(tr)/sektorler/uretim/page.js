import { NEXT_INDUSTRIES } from "@/appConfig";
import IndustryDetailPage from "@/pages/industries/IndustryDetailPage";
import { ROUTES } from "@/siteConfig";
import { useLocale, useTranslations } from "next-intl";
import { getBreadcrumbData } from "@/lib/uiUtils";

export default function SektorlerUretim() {
  const t = useTranslations();
  const locale = useLocale();

  const breadcrumbs = getBreadcrumbData(
    ROUTES.sektorlerUretim.breadcrumbs,
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
