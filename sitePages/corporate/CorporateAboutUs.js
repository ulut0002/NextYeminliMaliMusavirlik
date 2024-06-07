import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import { CONTENT } from "@/content/content";
import { CONTENT_ITEM_TYPE } from "@/lib/constants";
import { getBreadcrumbData } from "@/lib/uiUtils";
import { BREADCRUMB_PATHS } from "@/siteConfig";
import { produce } from "immer";
import { useLocale, useTranslations } from "next-intl";
import owner1 from "@/public/images/people/metin_arslan.jpeg";
import owner2 from "@/public/images/people/soner_altioglu.jpeg";
import HorizontalCard from "@/components/Cards/HorizontalCard";

export default function CorporateAboutUsPage() {
  const locale = useLocale();
  const t = useTranslations();

  const breadcrumbs = getBreadcrumbData(
    BREADCRUMB_PATHS.corporateAbout,
    locale,
    t
  );

  let content =
    CONTENT.corporate.aboutUs[locale] ||
    CONTENT.corporate.aboutUs.default ||
    null;

  if (!content) {
    return <p>Not Found</p>;
  }

  content = produce(content, (draft) => {
    draft.title = t(draft.title);
    draft.items = draft.items.map((item) => {
      item.type = item.type ? item.type : CONTENT_ITEM_TYPE.PARAGRAPH;
      item.text = t(item.text);
      return item;
    });
  });

  return (
    <div>
      {breadcrumbs}
      <h2 className='text-xl font-bold mb-4'>{content.title}</h2>
      <div className='flex flex-col flex-grow gap-4'>
        {content.items &&
          content.items.map((item, index) => {
            return (
              <p
                key={index}
                className='text-sm md:text-base lg:text-lg xl:text-xl'
              >
                {item.text}
              </p>
            );
          })}
      </div>
      <div className='flex flex-row gap-4 justify-center mt-4'>
        <HorizontalCard
          image={owner1}
          title={"Metin Arslan"}
          description={"Hello"}
        />
        <HorizontalCard
          image={owner2}
          title={"Soner Altıoğlu"}
          description={"Hello"}
        />
      </div>
    </div>
  );
}
