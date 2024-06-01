import { CONTENT } from "@/content/content";
import { createUrl } from "@/lib/utils";
import { produce } from "immer";
import { useLocale, useTranslations } from "next-intl";
import IndustryListClient from "./IndustryListClient";

export default function IndustryListServer() {
  const t = useTranslations();
  const locale = useLocale();

  const industries =
    CONTENT.main.ourIndustries[locale] ||
    CONTENT.main.ourIndustries.default ||
    null;

  if (!industries || !industries.items || !industries.items.length) {
    console.error("No services found in content file", locale);
    return <h1>Nothing</h1>;
  }

  const newData = produce(industries, (draft) => {
    draft.mainTitle = t(draft.mainTitle);
    draft.title = t(draft.title);
    draft.ctaLabelAllIndustries = t(draft.ctaLabelAllIndustries);
    draft.ctaLabelOneIndustry = t(draft.ctaLabelOneIndustry);
    draft.items = draft.items.map((item) => {
      const { title = "", description = "", href } = item;
      return {
        ...item,
        title: t(title),
        description: t(description),
        href: createUrl(href || "", locale),
      };
    });
  });

  return <IndustryListClient data={newData} locale={locale} />;
}
