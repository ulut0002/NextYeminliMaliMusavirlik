import { getBreadcrumbData } from "@/lib/uiUtils";
import ToolsMain from "@/sitePages/tools/ToolsMain";
import { BREADCRUMB_PATHS } from "@/siteConfig";
import { useLocale, useTranslations } from "next-intl";

export default function Tools() {
  const t = useTranslations();
  const locale = useLocale();

  const breadcrumbs = getBreadcrumbData(BREADCRUMB_PATHS.tools, locale, t);
  return <ToolsMain breadcrumbs={breadcrumbs} />;
}
