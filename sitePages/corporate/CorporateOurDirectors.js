import { useLocale } from "next-intl";

export default function CorporateOurDirectors({ breadcrumbs }) {
  const locale = useLocale();
  return (
    <div>
      {breadcrumbs}
      <div>CorporateOurDirectors in {locale}</div>
    </div>
  );
}
