import { useLocale } from "next-intl";

export default function OurServicesMain({ breadcrumbs }) {
  const locale = useLocale();
  return (
    <div>
      {breadcrumbs}OurServicesMain in {locale}
    </div>
  );
}
