import { getBreadcrumbData } from "@/lib/uiUtils";
import CorporateMain from "@/pages/corporate/CorporateMain";
import { BREADCRUMB_PATHS, ROUTES } from "@/siteConfig";
import { useLocale, useTranslations } from "next-intl";

export default function CorporateAboutUs() {
  const t = useTranslations();
  const locale = useLocale();
  const breadcrumbs = getBreadcrumbData(
    ROUTES.corporateAbout.breadcrumbs,
    locale,
    t
  );

  return <CorporateMain breadcrumbs={breadcrumbs} />;
}
