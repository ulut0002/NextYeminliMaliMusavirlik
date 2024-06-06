import { getBreadcrumbData } from "@/lib/uiUtils";
import CorporateOurDirectors from "@/sitePages/corporate/CorporateOurDirectors";
import { BREADCRUMB_PATHS } from "@/siteConfig";
import { useLocale, useTranslations } from "next-intl";

export default function KurumsalPage() {
  const t = useTranslations();
  const locale = useLocale();

  const breadcrumbs = getBreadcrumbData(
    BREADCRUMB_PATHS.corporateOurDirectors,
    locale,
    t
  );
  return (
    <CorporateOurDirectors breadcrumbs={breadcrumbs}>
      KurumsalPage
    </CorporateOurDirectors>
  );
}
