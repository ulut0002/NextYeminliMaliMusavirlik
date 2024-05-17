import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import { useLocale } from "next-intl";

export default async function CorporateMain({ breadcrumbs }) {
  const locale = useLocale();

  return (
    <div>
      {breadcrumbs}
      <div>CorporateMain in {locale}</div>
    </div>
  );
}

// <Breadcrumb locale={locale} paths={breadcrumb}></Breadcrumb>
