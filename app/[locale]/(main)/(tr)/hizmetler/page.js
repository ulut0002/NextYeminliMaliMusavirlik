import { getBreadcrumbData } from "@/lib/uiUtils";
import OurServicesMain from "@/sitePages/services/OurServicesMain";
import { BREADCRUMB_PATHS, ROUTES } from "@/siteConfig";
import { useLocale, useTranslations } from "next-intl";

export default function Hizmetlerimiz() {
  const t = useTranslations();
  const locale = useLocale();

  const breadcrumbs = getBreadcrumbData(BREADCRUMB_PATHS.services, locale, t);
  return <OurServicesMain breadcrumbs={breadcrumbs} />;
}
