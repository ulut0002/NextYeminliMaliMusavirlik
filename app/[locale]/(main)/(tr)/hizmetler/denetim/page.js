import { NEXT_SERVICES } from "@/appConfig";
import { getBreadcrumbData } from "@/lib/uiUtils";
import ServiceDetailPage from "@/sitePages/services/ServiceDetailPage";
import { ROUTES } from "@/siteConfig";
import { useLocale, useTranslations } from "next-intl";

export default function HizmetlerDenetim() {
  const t = useTranslations();
  const locale = useLocale();

  const breadcrumbs = getBreadcrumbData(
    ROUTES.hizmetlerDenetim.breadcrumbs,
    locale,
    t
  );
  return (
    <ServiceDetailPage
      service={NEXT_SERVICES.audit}
      breadcrumbs={breadcrumbs}
    />
  );
}
