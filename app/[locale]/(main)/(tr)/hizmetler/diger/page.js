import { NEXT_SERVICES } from "@/appConfig";
import { getBreadcrumbData } from "@/lib/uiUtils";
import ServiceDetailPage from "@/sitePages/services/ServiceDetailPage";
import { BREADCRUMB_PATHS } from "@/siteConfig";
import { useLocale, useTranslations } from "next-intl";

export default function HizmetlerDiger() {
  const t = useTranslations();
  const locale = useLocale();

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
