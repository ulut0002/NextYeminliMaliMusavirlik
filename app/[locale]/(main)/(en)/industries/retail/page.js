import { NEXT_INDUSTRIES } from "@/appConfig";
import { getBreadcrumbData } from "@/lib/uiUtils";
import IndustryDetailPage from "@/sitePages/industries/IndustryDetailPage";
import { BREADCRUMB_PATHS, ROUTES } from "@/siteConfig";
import { useLocale, useTranslations } from "next-intl";

export default function SektorlerPerakende() {
  const t = useTranslations();
  const locale = useLocale();

  const breadcrumbs = getBreadcrumbData(
    BREADCRUMB_PATHS.industriesRetail,
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
