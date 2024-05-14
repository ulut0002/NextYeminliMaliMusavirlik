import { NEXT_INDUSTRIES } from "@/appConfig";
import IndustryDetailPage from "@/pages/industries/IndustryDetailPage";

export default function page() {
  return <IndustryDetailPage industry={NEXT_INDUSTRIES.technology} />;
}
