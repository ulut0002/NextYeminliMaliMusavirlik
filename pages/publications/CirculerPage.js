import { useLocale } from "next-intl";

export default function CirculerPage() {
  const locale = useLocale();
  return <div>CirculerPage in {locale}</div>;
}
