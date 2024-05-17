import CorporateFoundingDocuments from "@/pages/corporate/CorporateFoundingDocuments";
import { useTranslations } from "next-intl";

export default function CorporateFoundingDocs() {
  const t = useTranslations();

  return <CorporateFoundingDocuments />;
}
