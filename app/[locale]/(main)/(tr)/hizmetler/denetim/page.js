import { NEXT_SERVICES } from "@/appConfig";
import ServiceDetailPage from "@/sitePages/services/ServiceDetailPage";

export default function HizmetlerDenetim() {
  return <ServiceDetailPage service={NEXT_SERVICES.audit} />;
}
