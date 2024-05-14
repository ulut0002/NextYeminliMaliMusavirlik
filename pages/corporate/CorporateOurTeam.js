import { useLocale } from "next-intl";

export default function CorporateOurTeam() {
  const locale = useLocale();
  return <div>CorporateOurTeam in {locale}</div>;
}
