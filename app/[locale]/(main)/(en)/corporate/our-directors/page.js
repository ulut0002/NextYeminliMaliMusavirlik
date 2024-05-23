import { getBreadcrumbData } from "@/lib/uiUtils";
import CorporateOurDirectors from "@/pages/corporate/CorporateOurDirectors";
import { ROUTES } from "@/siteConfig";
import { useLocale, useTranslations } from "next-intl";

export default function KurumsalPage() {
  const t = useTranslations();
  const locale = useLocale();

  const breadcrumbs = getBreadcrumbData(
    ROUTES.corporateOurDirectors.breadcrumbs,
    locale,
    t
  );
  return (
    <CorporateOurDirectors breadcrumbs={breadcrumbs}>
      KurumsalPage
    </CorporateOurDirectors>
  );
}
