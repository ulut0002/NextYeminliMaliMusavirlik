import { NEXT_SERVICES } from "@/appConfig";
import { useLocale } from "next-intl";

export default function ServiceDetailPage({ service = NEXT_SERVICES.tax }) {
  const locale = useLocale();
  return (
    <div>
      ServiceDetailPage {service} in {locale}
    </div>
  );
}
