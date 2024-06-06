"use client";

import { DEFAULT_LOCALE, LOCALE_OBJECTS } from "@/i18n";
import { switchLanguage } from "@/lib/utils";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

export default function LanguageSwitcher({ style }) {
  const router = useRouter();
  //   const { asPath } = router;

  const pathname = usePathname();
  const locale = useLocale();

  const handleLanguageChange = (newLang) => {
    // const newPath = switchLanguage(currentLang, newLang, asPath);
    // router.push(newPath);
    const newPath = switchLanguage(locale, newLang, pathname);

    if (newPath) {
      router.push(newPath);
    }
  };
  return (
    <div className='flex items-center justify-center'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='icon icon-tabler icon-tabler-world h-8 w-8 '
        width='44'
        height='44'
        viewBox='0 0 24 24'
        strokeWidth='1.5'
        stroke='red'
        fill='none'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <path stroke='none' d='M0 0h24v24H0z' fill='none' />
        <path d='M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0' />
        <path d='M3.6 9h16.8' />
        <path d='M3.6 15h16.8' />
        <path d='M11.5 3a17 17 0 0 0 0 18' />
        <path d='M12.5 3a17 17 0 0 1 0 18' />
      </svg>
      <select
        onChange={(e) => handleLanguageChange(e.target.value)}
        value={locale || DEFAULT_LOCALE}
        className={style}
      >
        {Object.keys(LOCALE_OBJECTS).map((lang) => (
          <option
            key={LOCALE_OBJECTS[lang].value}
            value={LOCALE_OBJECTS[lang].value}
          >
            {LOCALE_OBJECTS[lang].label}
          </option>
        ))}
      </select>
    </div>
  );
}
