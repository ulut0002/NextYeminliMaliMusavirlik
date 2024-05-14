import { useLocale } from "next-intl";

export default function CorporateOurDirectors() {
  const locale = useLocale();
  return <div>CorporateOurDirectors in {locale}</div>;
}
