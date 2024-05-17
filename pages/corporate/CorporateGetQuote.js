import { useLocale } from "next-intl";

export default function CorporateGetQuote({ breadcrumbs }) {
  const locale = useLocale();
  return (
    <div>
      {breadcrumbs}
      CorporateGetQuote in {locale}
    </div>
  );
}
