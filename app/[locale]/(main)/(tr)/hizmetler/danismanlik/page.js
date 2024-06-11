import { NEXT_SERVICES } from "@/appConfig";
import ServiceDetailPage from "@/sitePages/services/ServiceDetailPage";

export default function HizmetlerDanismanlik() {
  return <ServiceDetailPage service={NEXT_SERVICES.advisory} />;
}
