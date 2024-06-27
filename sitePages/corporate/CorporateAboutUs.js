import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import { CONTENT } from "@/content/content";
import { CONTENT_ITEM_TYPE } from "@/lib/constants";
import { getBreadcrumbData } from "@/lib/uiUtils";
import { BREADCRUMB_PATHS } from "@/siteConfig";
import { produce } from "immer";
import { useLocale, useTranslations } from "next-intl";
import HorizontalCard from "@/components/Cards/HorizontalCard";
import { allImages } from "@/content/images";
import Image from "next/image";

export default function CorporateAboutUsPage() {
  const locale = useLocale();
  const t = useTranslations();

  const owner1 = allImages.metinArslanImage;
  const owner2 = allImages.sonerAltiogluImage;

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
    <div className='content'>
      {breadcrumbs}
      <div>
        <h2 className='page-title'>{content.title}</h2>
        <div className='w-full my-4 overflow-hidden mb-4 '>
          <Image
            src={allImages.aboutUsHeader.src}
            alt={t(allImages.aboutUsHeader.alt)}
            width={1200}
            height={50}
            className='w-full h-24 md:h-24 lg:h-24 xl:h-24 object-cover page-hero-image'
          />
        </div>
        <div className='flex flex-col flex-grow gap-4'>
          {content.items &&
            content.items.map((item, index) => {
              return (
                <p key={index} className='text'>
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
    </div>
  );
}
