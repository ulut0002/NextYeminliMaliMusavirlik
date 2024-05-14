import { useLocale } from "next-intl";

export default function ContactUsMain() {
  const locale = useLocale();
  return <div>ContactUsMain {locale}</div>;
}
