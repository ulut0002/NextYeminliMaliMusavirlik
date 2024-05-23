import { getBreadcrumbData } from "@/lib/uiUtils";
import CirculerPage from "@/pages/publications/CirculerPage";
import { ROUTES } from "@/siteConfig";
import { useLocale, useTranslations } from "next-intl";

export default function YayinlarSirkuler() {
  const t = useTranslations();
  const locale = useLocale();

  const breadcrumbs = getBreadcrumbData(
    ROUTES.publicationCirculars.breadcrumbs,
    locale,
    t
  );
  return <CirculerPage breadcrumbs={breadcrumbs} />;
}
