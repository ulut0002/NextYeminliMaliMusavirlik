import { useLocale } from "next-intl";

export default function CorporateTransparencyReports() {
  const locale = useLocale();
  return <div>CorporateTransparencyReports in {locale}</div>;
}
