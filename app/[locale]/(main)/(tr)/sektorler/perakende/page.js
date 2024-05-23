import { NEXT_INDUSTRIES } from "@/appConfig";
import { getBreadcrumbData } from "@/lib/uiUtils";
import IndustryDetailPage from "@/pages/industries/IndustryDetailPage";
import { ROUTES } from "@/siteConfig";
import { useLocale, useTranslations } from "next-intl";

export default function SektorlerPerakende() {
  const t = useTranslations();
  const locale = useLocale();

  const breadcrumbs = getBreadcrumbData(
    ROUTES.sektorlerPerakende.breadcrumbs,
    locale,
    t
  );
  return (
    <IndustryDetailPage
      industry={NEXT_INDUSTRIES.retail}
      breadcrumbs={breadcrumbs}
    />
  );
}
