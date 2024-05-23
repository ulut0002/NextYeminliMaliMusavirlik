import { useLocale } from "next-intl";

export default async function CorporateFoundingDocumentsPage({ breadcrumbs }) {
  const locale = useLocale();
  return (
    <div>
      {breadcrumbs}
      CorporateFoundingDocuments in {locale}
    </div>
  );
}
