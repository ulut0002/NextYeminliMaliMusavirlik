import { CONTENT } from "@/content/content";
import { createUrl } from "@/lib/utils";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

export default function ServiceList() {
  const t = useTranslations();
  const locale = useLocale();

  const services =
    CONTENT.main.ourServices[locale] ||
    CONTENT.main.ourServices.default ||
    null;

  if (!services || !services.length) {
    console.error("No services found in content file", locale);
    return <h1>Nothing</h1>;
  }

  return (
    <section
      className='section-padding flex flex-col'
      role='region'
      aria-label='our-services-title'
    >
      <div className='flex flex-col gap-1 md:gap-1'>
        <h2 className='section-title' id='our-services-title'>
          {t("main.ourServices.title")}
        </h2>
        <h3 className='section-header'>{t("main.ourServices.description")}</h3>
      </div>

      <section className='section-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-4 overflow-hidden relative pb-16 px-1'>
        {services.map((service, index) => (
          <article
            key={index}
            className='flex flex-col relative p-4 border border-zinc-200 shadow-lg hover:shadow-xl justify-between items-start rounded-sm overflow-hidden '
            aria-labelledby={`service-title-${index}`}
          >
            <div className='absolute bg-yellow-500 rounded-full w-64 h-64 left-3/4 top-3/4 opacity-50 z-0' />
            <div className='flex-grow relative z-10'>
              <h3
                className='block font-semibold text-lg mb-2 border-b-2 border-b-zinc-200 w-3/4' // 75% width
                id={`service-title-${index}`}
              >
                {t(service.title)}
              </h3>
              <p>{t(service.description)}</p>
            </div>
            <Link
              href={createUrl(service.href, locale)}
              className='button button-learnMore mt-4 relative z-10'
              aria-label={t("generic.learnMore")}
            >
              {t("generic.learnMore")}
            </Link>
          </article>
        ))}
      </section>
    </section>
  );
}

// <div>
// <section className='section-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-4'>
//   {services.map((service, index) => (
//     <article
//       key={index}
//       className='p-4 border-2 shadow-lg hover:shadow-2xl flex flex-col justify-between rounded-sm'
//       aria-labelledby={`service-title-${index}`}
//     >
//       <div className='flex-grow'>
//         <h3
//           className='font-semibold text-lg b mb-2'
//           id={`service-title-${index}`}
//         >
//           {t(service.title)}
//         </h3>
//         <p>{t(service.description)}</p>
//       </div>
//       <Link
//         href={createUrl(service.href, locale)}
//         className='button mt-4'
//         aria-label={t("generic.learnMore")}
//       >
//         {t("generic.learnMore")}
//       </Link>
//     </article>
//   ))}
// </section>
// </div>
