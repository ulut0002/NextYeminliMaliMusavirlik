import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import { getBreadcrumbData } from "@/lib/uiUtils";
import CorporateOurDirectors from "@/sitePages/corporate/CorporateOurDirectors";
import { BREADCRUMB_PATHS, ROUTES } from "@/siteConfig";
import { useLocale, useTranslations } from "next-intl";

export default function YoneticilerimizPage() {
  const t = useTranslations();
  const locale = useLocale();

  const breadcrumbs = getBreadcrumbData(
    BREADCRUMB_PATHS.corporateOurDirectors,
    locale,
    t
  );

  return (
    <CorporateOurDirectors breadcrumbs={breadcrumbs}></CorporateOurDirectors>
  );
}
