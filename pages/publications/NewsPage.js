import { NEXT_INDUSTRIES } from "@/appConfig";
import NewsServer from "@/components/News/NewsServer";
import { useLocale } from "next-intl";

export default function NewsPage() {
  const locale = useLocale();
  return <NewsServer locale={locale} />;
}
