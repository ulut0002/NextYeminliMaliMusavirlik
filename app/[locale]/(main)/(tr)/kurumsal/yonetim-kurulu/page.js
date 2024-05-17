import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import { getBreadcrumbData } from "@/lib/uiUtils";
import CorporateOurDirectors from "@/pages/corporate/CorporateOurDirectors";
import { ROUTES } from "@/siteConfig";
import { useLocale, useTranslations } from "next-intl";

export default function YoneticilerimizPage() {
  const t = useTranslations();
  const locale = useLocale();

  const breadcrumbs = getBreadcrumbData(
    ROUTES.kurumsalYonetimKurulu.breadcrumbs,
    locale,
    t
  );

  return (
    <CorporateOurDirectors breadcrumbs={breadcrumbs}></CorporateOurDirectors>
  );
}
