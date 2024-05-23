import { NEXT_SERVICES } from "@/appConfig";
import { useLocale } from "next-intl";

export default function ServiceDetailPage({
  service = NEXT_SERVICES.tax,
  breadcrumbs,
}) {
  const locale = useLocale();
  return (
    <div>
      {breadcrumbs}
      ServiceDetailPage {service} in {locale}
    </div>
  );
}
