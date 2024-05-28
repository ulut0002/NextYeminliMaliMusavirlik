import { CONTENT } from "@/content/content";
import { createUrl } from "@/lib/utils";
import { useLocale, useTranslations } from "next-intl";
import { getLocale, getTranslations } from "next-intl/server";
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
    <div>
      <h1>{t("main.ourServices.title")}</h1>
      <h2>{t("main.ourServices.description")}</h2>
      <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-4 justify-stretch  '>
        {services.map((service, index) => {
          return (
            <article
              key={index}
              className=' p-2 border-2 transform md:hover:scale-105 transition ease-in-out shadow-lg hover:shadow-2xl'
            >
              <h3 className=' font-semibold text-lg border-b-2 '>
                {t(service.title)}
              </h3>
              <h4 className=''>{t(service.description)}</h4>
              <Link href={createUrl(service.href, locale)}>Learn More!</Link>
            </article>
          );
        })}
      </section>
    </div>
  );
}
