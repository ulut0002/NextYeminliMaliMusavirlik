import { getTopNavigation } from "@/siteConfig";
import { produce } from "immer";
import { useLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

export default async function Footer() {
  const locale = useLocale();
  const topNavigation = getTopNavigation(locale);
  const t = await getTranslations("");

  const topNav = topNavigation.items.filter((item, index) => index !== 0);

  let localeMenu = topNav.map((item) => {
    const newObject = {
      ...item,
      text: t(item.text),
      path: `${locale}${item.path}`,
    };
    return newObject;
  });

  localeMenu = produce(topNav, (draft) => {
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

  return (
    <footer className='text-xs  flex flex-col  items-center justify-between '>
      <div className='mx-auto'>Image here</div>
      <div className='mx-auto'>Smart decisions. Lasting value.</div>
      <div className='w-full md:w-4/5 lg:w-3/5'>
        <ul className='flex flex-col md:flex-row  md:justify-between '>
          {localeMenu.map((item) => (
            <li key={item.path} className='border-t-2 md:border-none py-4 '>
              <div className='ml-4 flex flex-col mx-auto '>
                <h2 className='font-semibold p-0 m-0'>
                  <Link href={item.path}>{item.text}</Link>
                </h2>
                {item.subItems && (
                  <ul className='flex flex-row md:flex-col flex-wrap ml-1 mt-1 md:ml-0 list-pipe md:list-item '>
                    {item.subItems &&
                      item.subItems.map((subItem) => (
                        <li key={subItem.text} className='m-0 '>
                          <Link href={subItem.path}>{subItem.text}</Link>
                        </li>
                      ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
