import NewsPage from "@/sitePages/publications/NewsPage";
import { BREADCRUMB_PATHS, ROUTES } from "@/siteConfig";
import { useLocale, useTranslations } from "next-intl";
import { getBreadcrumbData } from "@/lib/uiUtils";

export default function YayinlarHaberler() {
  const t = useTranslations();
  const locale = useLocale();

  const breadcrumbs = getBreadcrumbData(
    BREADCRUMB_PATHS.publicationNews,
    locale,
    t
  );
  return <NewsPage breadcrumbs={breadcrumbs} />;
}
