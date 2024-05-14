import { useLocale } from "next-intl";

export default function CorporateGetQuote() {
  const locale = useLocale();
  return <div>CorporateGetQuote in {locale}</div>;
}
