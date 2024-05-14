import { getNews } from "@/app/api/news/service";
import { DEFAULT_LOCALE_FOR_NEWS } from "@/i18n";
import News from "./News";
import { filter } from "@chakra-ui/react";

export default async function NewsServer({ locale = DEFAULT_LOCALE_FOR_NEWS }) {
  const filteredNews = await getNews({ lang: locale });
  return <News news={filteredNews} />;
}
