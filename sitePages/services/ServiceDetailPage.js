import { NEXT_SERVICES } from "@/appConfig";
import {
  ourAdvisoryServices,
  ourAuditServices,
  ourOtherServices,
  ourTaxServices,
} from "@/content/ourServices";
import { CONTENT_ITEM_TYPE } from "@/lib/constants";
import { getBreadcrumbData, translateContent } from "@/lib/uiUtils";
import { BREADCRUMB_PATHS } from "@/siteConfig";
import { useLocale, useTranslations } from "next-intl";

export default function ServiceDetailPage({ service = NEXT_SERVICES.tax }) {
  const locale = useLocale();
  const t = useTranslations();

  let content;
  let breadcrumbs;

  switch (service) {
    case NEXT_SERVICES.advisory:
      content =
        ourAdvisoryServices[locale] || ourAdvisoryServices["default"] || null;
      breadcrumbs = getBreadcrumbData(
        BREADCRUMB_PATHS.servicesAdvisory,
        locale,
        t
      );

      break;
    case NEXT_SERVICES.audit:
      content = ourAuditServices[locale] || ourAuditServices["default"] || null;
      breadcrumbs = getBreadcrumbData(
        BREADCRUMB_PATHS.servicesAudit,
        locale,
        t
      );
      break;
    case NEXT_SERVICES.tax:
      content = ourTaxServices[locale] || ourTaxServices["default"] || null;
      breadcrumbs = getBreadcrumbData(
        BREADCRUMB_PATHS.servicesTaxes,
        locale,
        t
      );
      break;
    case NEXT_SERVICES.other:
      content = ourOtherServices[locale] || ourOtherServices["default"] || null;
      breadcrumbs = getBreadcrumbData(
        BREADCRUMB_PATHS.servicesOther,
        locale,
        t
      );
      break;
  }

  if (!content) {
    return null;
  }

  content = translateContent(content, t, locale);

  const renderText = (arr) => {
    if (!Array.isArray(arr)) {
      return null;
    }

    const newContent = arr.map((item, index) => {
      if (!item.type || item.type === CONTENT_ITEM_TYPE.PARAGRAPH) {
        return <p key={index}>{item.text}</p>;
      }

      if (item.type === CONTENT_ITEM_TYPE.LIST && item.items.length) {
        return (
          <ol role='list' key={index} className='list-numbered  '>
            {item.items.map((subItem, subIndex) => {
              return <li key={subIndex}>{subItem.text}</li>;
            })}
          </ol>
        );
      }

      return <p key={index}>{item.text}</p>;
    });

    return newContent;
  };

  return (
    <div>
      {breadcrumbs}
      <div className='flex flex-col'>
        <h1 className=' text-3xl'>{content.title}</h1>
        <h2 className=' text-2xl'>{content.description}</h2>

        <div className='flex flex-col gap-4 '>
          {content.items &&
            content.items.map((item, index) => {
              return (
                <section
                  key={index}
                  className='py-4 px-2 bg-gray-200 rounded-md'
                >
                  <h3 className='text-3xl'>{item.title}</h3>
                  <h4>
                    {item.description &&
                      item.description.map((subItem, subIndex) => {
                        return <div key={subIndex}>{subItem.text}</div>;
                      })}
                  </h4>
                  {item.importance && (
                    <div>
                      <h5 className='text-xl font-semibold mt-4'>
                        {t("generic.service.importance")}
                      </h5>

                      {renderText(item.importance)}
                    </div>
                  )}

                  {item.steps && (
                    <div>
                      <h5 className='text-xl font-semibold mt-4'>
                        {t("generic.service.steps")}
                      </h5>

                      {renderText(item.steps)}
                    </div>
                  )}

                  {item.benefits && (
                    <div>
                      <h5 className='text-xl font-semibold mt-4'>
                        {t("generic.service.benefits")}
                      </h5>

                      {renderText(item.benefits)}
                    </div>
                  )}

                  {item.recipients && (
                    <div>
                      <h5 className='text-xl font-semibold mt-4'>
                        {t("generic.service.recipients")}
                      </h5>

                      {renderText(item.recipients)}
                    </div>
                  )}
                </section>
              );
            })}
        </div>
      </div>
    </div>
  );
}
