import { getBreadcrumbData } from "@/lib/uiUtils";
import CorporateFoundingDocumentsPage from "@/pages/corporate/CorporateFoundingDocumentsPage";
import { BREADCRUMB_PATHS, ROUTES, getBreadcrumbPath } from "@/siteConfig";
import { useLocale, useTranslations } from "next-intl";

export default function CorporateFoundingDocs() {
  const t = useTranslations();
  const locale = useLocale();
  const breadcrumbs = getBreadcrumbData(
    ROUTES.corporateFoundingDocuments.breadcrumbs,
    locale,
    t
  );
  return <CorporateFoundingDocumentsPage breadcrumbs={breadcrumbs} />;
}
