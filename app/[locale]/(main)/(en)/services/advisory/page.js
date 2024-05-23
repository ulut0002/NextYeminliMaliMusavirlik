import { NEXT_SERVICES } from "@/appConfig";
import ServiceDetailPage from "@/sitePages/services/ServiceDetailPage";

export default function ServiceAdvisory() {
  return <ServiceDetailPage service={NEXT_SERVICES.advisory} />;
}
