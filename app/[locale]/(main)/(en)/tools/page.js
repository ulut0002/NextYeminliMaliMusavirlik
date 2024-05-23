import { getBreadcrumbData } from "@/lib/uiUtils";
import ToolsMain from "@/pages/tools/ToolsMain";
import { ROUTES } from "@/siteConfig";
import { useLocale, useTranslations } from "next-intl";

export default function Tools() {
  const t = useTranslations();
  const locale = useLocale();

  const breadcrumbs = getBreadcrumbData(ROUTES.tools.breadcrumbs, locale, t);
  return <ToolsMain breadcrumbs={breadcrumbs} />;
}
