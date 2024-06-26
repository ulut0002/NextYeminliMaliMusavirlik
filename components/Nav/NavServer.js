import { getTopNavigation } from "@/siteConfig";
import { useLocale, useTranslations } from "next-intl";
import MegaMenuDefault from "./Nav";
import { getTranslations } from "next-intl/server";
import { produce } from "immer";
import { navHeaderContent } from "@/content/header";
import { translateText } from "@/lib/uiUtils";

export default async function NavServer() {
  const locale = useLocale();
  const topNavigation = getTopNavigation(locale);
  const { items = [] } = topNavigation;
  const t = await getTranslations("");

  let localeMenu = [];

  let topInfoBar =
    navHeaderContent[locale] || navHeaderContent["default"] || null;

  localeMenu = items.map((item) => {
    const newObject = {
      ...item,
      text: t(item.text),
      path: `${locale}${item.path}`,
    };
    return newObject;
  });

  localeMenu = produce(items, (draft) => {
    draft.forEach((item) => {
      item.key = item.text;
      item.text = t(item.text || "");
      item.path = `/${locale}${item.path}`;
      const { subItems = [] } = item;
      const newSubItems = subItems.map((subItem) => {
        const newObj = {
          ...subItem,
          key: subItem.text,
          text: t(subItem.text || ""),
          description: subItem.description ? t(subItem.description) : "",
          path: `/${locale}${subItem.path}`,
        };

        return newObj;
      });
      item.subItems = newSubItems;
    });
  });

  if (topInfoBar) {
    topInfoBar = produce(topInfoBar, (draft) => {
      if (
        draft.contactInfo &&
        draft.contactInfo.length &&
        Array.isArray(draft.contactInfo)
      ) {
        draft.contactInfo = translateText(draft.contactInfo, t);
      }

      if (
        draft.socialMedia &&
        draft.socialMedia.length &&
        Array.isArray(draft.socialMedia)
      ) {
        draft.socialMedia = translateText(draft.socialMedia, t);
      }
    });
  }

  return <MegaMenuDefault menuItems={localeMenu} topInfoBar={topInfoBar} />;
}
