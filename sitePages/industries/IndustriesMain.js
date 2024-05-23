import { useLocale } from "next-intl";

export default function IndustriesMain() {
  const locale = useLocale();
  return <div>IndustriesMain in {locale}</div>;
}
