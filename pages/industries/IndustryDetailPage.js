import { NEXT_INDUSTRIES } from "@/appConfig";
import { useLocale } from "next-intl";

export default function IndustryDetailPage({
  industry = NEXT_INDUSTRIES.production,
  breadcrumbs,
}) {
  const locale = useLocale();
  return (
    <div>
      {breadcrumbs}
      IndustryDetailPage {industry} in {locale}
    </div>
  );
}
