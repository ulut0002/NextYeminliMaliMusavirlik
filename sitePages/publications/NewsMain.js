import { useLocale } from "next-intl";

export default function NewsMain() {
  const locale = useLocale();
  return <div>NewsMain in {locale}</div>;
}
