import { useLocale } from "next-intl";

export default function CorporateTransparencyReports({ breadcrumbs }) {
  const locale = useLocale();
  return (
    <div>
      {breadcrumbs}
      CorporateTransparencyReports in {locale}
    </div>
  );
}
