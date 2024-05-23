"use client";

import { DEFAULT_LOCALE, LOCALE_OBJECTS } from "@/i18n";
import { switchLanguage } from "@/lib/utils";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

export default function LanguageSwitcher() {
  const router = useRouter();
  //   const { asPath } = router;

  const pathname = usePathname();
  const locale = useLocale();

  const handleLanguageChange = (newLang) => {
    // const newPath = switchLanguage(currentLang, newLang, asPath);
    // router.push(newPath);
    const newPath = switchLanguage(locale, newLang, pathname);

    console.log("newPath", newPath);

    if (newPath) {
      router.push(newPath);
    }
  };
  return (
    <div>
      <select
        onChange={(e) => handleLanguageChange(e.target.value)}
        value={locale || DEFAULT_LOCALE}
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
