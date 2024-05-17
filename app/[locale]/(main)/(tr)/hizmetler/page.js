import { getBreadcrumbData } from "@/lib/uiUtils";
import OurServicesMain from "@/pages/services/OurServicesMain";
import { ROUTES } from "@/siteConfig";
import { useLocale, useTranslations } from "next-intl";

export default function Hizmetlerimiz() {
  const t = useTranslations();
  const locale = useLocale();

  const breadcrumbs = getBreadcrumbData(
    ROUTES.hizmetler.breadcrumbs,
    locale,
    t
  );
  return <OurServicesMain breadcrumbs={breadcrumbs} />;
}
