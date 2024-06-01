import { CONTENT } from "@/content/content";
import { createUrl } from "@/lib/utils";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

export default function ServiceList() {
  const t = useTranslations("");
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
    <section className='block'>
      <h1 className='title  '>{t("main.ourServices.title")}</h1>
      <h2>{t("main.ourServices.description")}</h2>
      <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {services.map((service, index) => (
          <article
            key={index}
            className='p-4 border-2 shadow-lg hover:shadow-2xl flex flex-col justify-between'
          >
            <div className='flex-grow'>
              <h3 className='font-semibold text-lg border-b-2 mb-2'>
                {t(service.title)}
              </h3>
              <p>{t(service.description)}</p>
            </div>
            <Link
              href={createUrl(service.href, locale)}
              className='button mt-4'
            >
              {t("generic.learnMore")}
            </Link>
          </article>
        ))}
      </section>
    </section>
  );
}
