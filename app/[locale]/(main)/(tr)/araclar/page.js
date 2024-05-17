import ToolsMain from "@/pages/tools/ToolsMain";
import { ROUTES } from "@/siteConfig";
import { useLocale, useTranslations } from "next-intl";
import { getBreadcrumbData } from "@/lib/uiUtils";

export default function Araclar() {
  const t = useTranslations();
  const locale = useLocale();

  const breadcrumbs = getBreadcrumbData(ROUTES.araclar.breadcrumbs, locale, t);
  return <ToolsMain breadcrumbs={breadcrumbs} />;
}
