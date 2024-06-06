import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import { CONTENT } from "@/content/content";
import { getBreadcrumbData } from "@/lib/uiUtils";
import { BREADCRUMB_PATHS } from "@/siteConfig";
import { useLocale, useTranslations } from "next-intl";

export default function CorporateAboutUsPage() {
  const locale = useLocale();
  const t = useTranslations();

  const breadcrumbs = getBreadcrumbData(
    BREADCRUMB_PATHS.corporateAbout,
    locale,
    t
  );

  return (
    <div>
      {breadcrumbs}
      <div>CorporateAboutUs</div>
    </div>
  );
}
