import { NEXT_SERVICES } from "@/appConfig";
import ServiceDetailPage from "@/pages/services/ServiceDetailPage";

export default function page() {
  return <ServiceDetailPage service={NEXT_SERVICES.advisory} />;
}
