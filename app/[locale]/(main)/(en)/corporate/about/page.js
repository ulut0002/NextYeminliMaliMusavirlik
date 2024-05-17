import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import CorporateMain from "@/pages/corporate/CorporateMain";
import { BREADCRUMB_PATHS, getBreadcrumbPath } from "@/siteConfig";
import { useLocale, useTranslations } from "next-intl";

export default function CorporateAboutUs() {
  const t = useTranslations();
  const locale = useLocale();
  const breadcrumbPath = getBreadcrumbPath(t, [
    BREADCRUMB_PATHS.home,
    BREADCRUMB_PATHS.corporate,
    BREADCRUMB_PATHS.corporateAbout,
  ]);

  return (
    <CorporateMain>
      <Breadcrumb locale={locale} paths={breadcrumbPath} />
    </CorporateMain>
  );
}
