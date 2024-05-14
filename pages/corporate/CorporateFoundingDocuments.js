import { useLocale } from "next-intl";

export default function CorporateFoundingDocuments() {
  const locale = useLocale();
  return <div>CorporateFoundingDocuments in {locale}</div>;
}
