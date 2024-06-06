import ToolsMain from "@/sitePages/tools/ToolsMain";
import { BREADCRUMB_PATHS, ROUTES } from "@/siteConfig";
import { useLocale, useTranslations } from "next-intl";
import { getBreadcrumbData } from "@/lib/uiUtils";

export default function Araclar() {
  const t = useTranslations();
  const locale = useLocale();

  const breadcrumbs = getBreadcrumbData(BREADCRUMB_PATHS.tools, locale, t);
  return <ToolsMain breadcrumbs={breadcrumbs} />;
}
