import SimpleCard from "@/components/Cards/SimpleCard";
import { ourIndustries } from "@/content/ourIndustries";
import { getBreadcrumbData } from "@/lib/uiUtils";
import { createUrl } from "@/lib/utils";
import { BREADCRUMB_PATHS } from "@/siteConfig";
import { useLocale, useTranslations } from "next-intl";

export default function IndustriesMain() {
  const locale = useLocale();
  const t = useTranslations();
  const breadcrumbs = getBreadcrumbData(BREADCRUMB_PATHS.industries, locale, t);

  const ourIndustriesList =
    ourIndustries[locale] || ourIndustries["default"] || null;

  return (
    <div>
      <div>{breadcrumbs}</div>
      <div>
        <h2>{t(ourIndustriesList.title)}</h2>
        <h3>{t(ourIndustriesList.description)}</h3>

        <div>
          <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
            {ourIndustriesList.items.map((industry, index) => (
              <li key={index}>
                <SimpleCard
                  title={t(industry.title)}
                  description={t(industry.description)}
                  url={createUrl(industry.url, locale)}
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
