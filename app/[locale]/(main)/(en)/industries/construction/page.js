import { NEXT_INDUSTRIES } from "@/appConfig";
import { getBreadcrumbData } from "@/lib/uiUtils";
import IndustryDetailPage from "@/pages/industries/IndustryDetailPage";
import { ROUTES } from "@/siteConfig";
import { useLocale, useTranslations } from "next-intl";

export default function SektorlerInsaat() {
  const t = useTranslations();
  const locale = useLocale();

  const breadcrumbs = getBreadcrumbData(
    ROUTES.industriesConstruction.breadcrumbs,
    locale,
    t
  );
  return (
    <IndustryDetailPage
      industry={NEXT_INDUSTRIES.construction}
      breadcrumbs={breadcrumbs}
    />
  );
}
