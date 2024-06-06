import { getBreadcrumbData } from "@/lib/uiUtils";
import CirculerPage from "@/sitePages/publications/CirculerPage";
import { BREADCRUMB_PATHS, ROUTES } from "@/siteConfig";
import { useLocale, useTranslations } from "next-intl";

export default function YayinlarSirkuler() {
  const t = useTranslations();
  const locale = useLocale();

  const breadcrumbs = getBreadcrumbData(
    BREADCRUMB_PATHS.publicationCirculars,
    locale,
    t
  );
  return <CirculerPage breadcrumbs={breadcrumbs} />;
}
