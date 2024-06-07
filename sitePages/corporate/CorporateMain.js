import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import SimpleCard from "@/components/Cards/SimpleCard";
import { CONTENT } from "@/content/content";
import { getBreadcrumbData } from "@/lib/uiUtils";
import { createUrl } from "@/lib/utils";
import { BREADCRUMB_PATHS } from "@/siteConfig";
import { produce } from "immer";
import { useLocale, useTranslations } from "next-intl";

export default function CorporateMain() {
  const locale = useLocale();
  const t = useTranslations();

  let services =
    CONTENT?.corporate?.main?.[locale] ||
    CONTENT?.corporate?.main?.default ||
    null;

  const breadcrumbs = getBreadcrumbData(BREADCRUMB_PATHS.corporate, locale, t);

  services = produce(services, (draft) => {
    draft.items = draft.items.map((item) => {
      item.title = t(item.title);
      item.description = t(item.description);
      item.href = createUrl(item.href, locale);
      return item;
    });
  });

  return (
    <div>
      {breadcrumbs}
      <div>
        CorporateMain in {locale} - {services.items.length}
      </div>
      <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {services &&
          services.items &&
          services.items.length &&
          services.items.map((item, index) => {
            const { title, description, href } = item;

            return (
              <li key={index} className='h-full'>
                <SimpleCard
                  title={title}
                  description={description}
                  linkText={t("generic.readMore")}
                  url={href}
                />
              </li>
            );
          })}
      </ul>
    </div>
  );
}
