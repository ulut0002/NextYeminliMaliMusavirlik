import { useLocale } from "next-intl";

export default function CorporateOurTeam({ breadcrumbs }) {
  const locale = useLocale();
  return (
    <div>
      {breadcrumbs}
      CorporateOurTeam in {locale}
    </div>
  );
}
