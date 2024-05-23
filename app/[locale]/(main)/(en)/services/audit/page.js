import { NEXT_SERVICES } from "@/appConfig";
import ServiceDetailPage from "@/sitePages/services/ServiceDetailPage";

export default function Service() {
  return <ServiceDetailPage service={NEXT_SERVICES.audit} />;
}
