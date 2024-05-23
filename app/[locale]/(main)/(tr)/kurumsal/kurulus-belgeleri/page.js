import { getBreadcrumbData } from "@/lib/uiUtils";
import CorporateFoundingDocumentsPage from "@/sitePages/corporate/CorporateFoundingDocumentsPage";
import { BREADCRUMB_PATHS, ROUTES, getBreadcrumbPath } from "@/siteConfig";
import { useLocale, useTranslations } from "next-intl";

export default function KurulusBelgeleri() {
  const t = useTranslations();
  const locale = useLocale();
  const breadcrumbs = getBreadcrumbData(
    ROUTES.kurumsalKurulusBelgeleri.breadcrumbs,
    locale,
    t
  );
  return <CorporateFoundingDocumentsPage breadcrumbs={breadcrumbs} />;
}
