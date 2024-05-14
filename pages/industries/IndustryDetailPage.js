import { NEXT_INDUSTRIES } from "@/appConfig";
import { useLocale } from "next-intl";

export default function IndustryDetailPage({
  industry = NEXT_INDUSTRIES.production,
}) {
  const locale = useLocale();
  return (
    <div>
      IndustryDetailPage {industry} in {locale}
    </div>
  );
}
