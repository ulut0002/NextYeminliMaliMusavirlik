import NewsPage from "@/pages/publications/NewsPage";
import { ROUTES } from "@/siteConfig";
import { useLocale, useTranslations } from "next-intl";
import { getBreadcrumbData } from "@/lib/uiUtils";

export default function YayinlarHaberler() {
  const t = useTranslations();
  const locale = useLocale();

  const breadcrumbs = getBreadcrumbData(
    ROUTES.publicationNews.breadcrumbs,
    locale,
    t
  );
  return <NewsPage breadcrumbs={breadcrumbs} />;
}
