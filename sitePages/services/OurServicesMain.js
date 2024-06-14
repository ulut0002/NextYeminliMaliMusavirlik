import SimpleCard from "@/components/Cards/SimpleCard";
import { ourServices } from "@/content/ourServices";
import { getBreadcrumbData } from "@/lib/uiUtils";
import { createUrl } from "@/lib/utils";
import { BREADCRUMB_PATHS } from "@/siteConfig";
import { useLocale, useTranslations } from "next-intl";

export default function OurServicesMain({}) {
  const locale = useLocale();
  const t = useTranslations();
  const breadcrumbs = getBreadcrumbData(BREADCRUMB_PATHS.services, locale, t);

  const ourServiceList = ourServices[locale] || ourServices["default"] || null;

  // console.log(ourServiceList);

  return (
    <div>
      <div>{breadcrumbs}</div>
      <div>
        <h2>{ourServiceList.title}</h2>
        <h3>{ourServiceList.description}</h3>
        <div>
          <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
            {ourServiceList.items.map((service, index) => (
              <li key={index}>
                <SimpleCard
                  title={service.title}
                  description={service.description}
                  url={createUrl(service.url, locale)}
                  linkText={t("generic.readMore")}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
