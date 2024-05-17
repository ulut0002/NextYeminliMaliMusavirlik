import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import { getBreadcrumbData } from "@/lib/uiUtils";
import CorporateMain from "@/pages/corporate/CorporateMain";
import { ROUTES } from "@/siteConfig";
import { useLocale, useTranslations } from "next-intl";

export default function KurumsalHakkimizda() {
  const t = useTranslations();
  const locale = useLocale();

  const breadcrumbs = getBreadcrumbData(
    ROUTES.kurumsalHakkinda.breadcrumbs,
    locale,
    t
  );

  return <CorporateMain breadcrumbs={breadcrumbs}></CorporateMain>;
}
