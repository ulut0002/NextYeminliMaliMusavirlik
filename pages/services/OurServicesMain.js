import { useLocale } from "next-intl";

export default function OurServicesMain() {
  const locale = useLocale();
  return <div>OurServicesMain in {locale}</div>;
}
