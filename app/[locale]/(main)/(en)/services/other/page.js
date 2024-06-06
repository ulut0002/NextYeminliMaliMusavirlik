import { NEXT_SERVICES } from "@/appConfig";
import { getBreadcrumbData } from "@/lib/uiUtils";
import { BREADCRUMB_PATHS } from "@/siteConfig";
import ServiceDetailPage from "@/sitePages/services/ServiceDetailPage";
import { useLocale, useTranslations } from "next-intl";

export default function ServiceOther() {
  const locale = useLocale();
  const t = useTranslations();
  const breadcrumbs = getBreadcrumbData(
    BREADCRUMB_PATHS.servicesOther,
    locale,
    t
  );
  return (
    <ServiceDetailPage
      service={NEXT_SERVICES.other}
      breadcrumbs={breadcrumbs}
    />
  );
}
