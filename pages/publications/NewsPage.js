import { NEXT_INDUSTRIES } from "@/appConfig";
import NewsServer from "@/components/News/NewsServer";
import { useLocale } from "next-intl";

export default function NewsPage({ breadcrumbs }) {
  const locale = useLocale();
  return (
    <div>
      {breadcrumbs}
      <NewsServer locale={locale} breadcrumbs={breadcrumbs} />
    </div>
  );
}
