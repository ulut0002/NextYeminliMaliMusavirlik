import { useLocale, useTranslations } from "next-intl";
import MainPageCarouselClient from "./MainPageCarouselClient";
import { CONTENT } from "@/content/content";
import { produce } from "immer";
import { createUrl } from "@/lib/utils";

export default function MainPageCarouselServer() {
  const locale = useLocale();
  const t = useTranslations();

  const carouselContent =
    CONTENT.main.carousel[locale] || CONTENT.main.carousel.default || null;

  let newCarouselContent = null;
  newCarouselContent = produce(carouselContent, (draft) => {
    const { ctaLabel, items } = draft;

    draft.ctaLabel = t(ctaLabel);
    if (items && items.length) {
      const newItems = items.map((item) => {
        const { title = "", description = "", href } = item;

        console.log("href: ", href);

        return {
          ...item,
          title: t(title),
          href: createUrl(href || "", locale),
          description: t(description),
        };
      });
      draft.items = newItems;
    }
  });

  return <MainPageCarouselClient data={newCarouselContent} locale={locale} />;
}
