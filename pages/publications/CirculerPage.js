import { useLocale } from "next-intl";

export default function CirculerPage({ breadcrumbs }) {
  const locale = useLocale();
  return (
    <div>
      {breadcrumbs}
      CirculerPage in {locale}
    </div>
  );
}
