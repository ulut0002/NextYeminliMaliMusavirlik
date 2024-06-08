import { CONTENT } from "@/content/content";
import { metinArslanImage, sonerAltiogluImage } from "@/content/images";
import { getBreadcrumbData } from "@/lib/uiUtils";
import { BREADCRUMB_PATHS } from "@/siteConfig";
import { produce } from "immer";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export default function CorporateOurDirectors() {
  const t = useTranslations();
  const locale = useLocale();

  const breadcrumbs = getBreadcrumbData(
    BREADCRUMB_PATHS.corporateOurDirectors,
    locale,
    t
  );

  let content =
    CONTENT.corporate.ourDirectors[locale] ||
    CONTENT.corporate.ourDirectors.default ||
    null;

  if (!content) {
    return <p>Not found!</p>;
  }

  content = produce(content, (draft) => {
    draft.title = t(content.title);
    draft.items = draft.items.map((item) => {
      item.name = t(item.name);
      item.title = t(item.title);
      item.email = t(item.email);
      item.alt = t(item.alt);
      item.specialties.title = t(item.specialties.title);
      item.specialties.items = item.specialties.items.map((specialty) =>
        t(specialty)
      );
      item.industries.title = t(item.industries.title);
      item.industries.items = item.industries.items.map((industry) =>
        t(industry)
      );
      item.education.title = t(item.education.title);
      item.education.items = item.education.items.map((education) =>
        t(education)
      );
      item.memberships.title = t(item.memberships.title);
      item.memberships.items = item.memberships.items.map((membership) =>
        t(membership)
      );
      return item;
    });
  });

  return (
    <div>
      {breadcrumbs}
      <div>
        <h1 className=' text-4xl'>{content.title}</h1>
        <div className='flex flex-col gap-4 '>
          {content.items.map((item, index) => (
            <div key={index} className='flex flex-col gap-4 bg-blue-gray-100'>
              <div className='flex gap-4'>
                <Image
                  src={metinArslanImage}
                  width={500}
                  alt={item.alt}
                  className='w-32 h-32 rounded-xl col-start-1 col-end-1'
                />
                <div className='flex flex-col'>
                  <h2 className='text-3xl'>{item.name}</h2>
                  <p className='text-xl'>{item.title}</p>
                  <a href={`mailto:${item.email}`}>{item.email}</a>

                  <div className='flex flex-col gap-4 mt-4'>
                    <div>
                      <h3 className='text-xl font-semibold'>
                        {item.specialties.title}
                      </h3>
                      <ul className='list-disc'>
                        {item.specialties.items.map((specialty, index) => (
                          <li key={index} className=''>
                            {specialty}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className='text-xl font-semibold'>
                        {item.industries.title}
                      </h3>
                      <ul>
                        {item.industries.items.map((industry, index) => (
                          <li key={index}>{industry}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className='text-xl font-semibold'>
                        {item.education.title}
                      </h3>
                      <ul>
                        {item.education.items.map((education, index) => (
                          <li key={index}>{education}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className='text-xl font-semibold'>
                        {item.memberships.title}
                      </h3>
                      <ul>
                        {item.memberships.items.map((membership, index) => (
                          <li key={index}>{membership}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
