import { useLocale } from "next-intl";

export default function CorporateMissionVision() {
  const locale = useLocale();
  return <div>CorporateMissionVision in {locale}</div>;
}
