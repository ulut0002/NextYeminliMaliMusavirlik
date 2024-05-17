import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import { useLocale } from "next-intl";

export default async function CorporateMissionVision({ breadcrumbs }) {
  const locale = useLocale();

  return (
    <div>
      {breadcrumbs}
      <div>CorporateMissionVision in {locale}</div>
    </div>
  );
}
