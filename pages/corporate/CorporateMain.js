import { useLocale } from "next-intl";

export default async function CorporateMain() {
  const locale = useLocale();
  return <div>CorporateMain in {locale}</div>;
}
