import { getTopNavigation } from "@/siteConfig";
import { useLocale, useTranslations } from "next-intl";
import MegaMenuDefault from "./Nav";
import { getTranslations } from "next-intl/server";
import { produce } from "immer";

export default async function NavServer() {
  const locale = useLocale();
  const topNavigation = getTopNavigation(locale);
  const { items = [] } = topNavigation;
  const t = await getTranslations("");

  let localeMenu = [];

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

  return <MegaMenuDefault menuItems={localeMenu} />;
}
