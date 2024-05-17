import { useLocale } from "next-intl";

export default function ToolsMain({ breadcrumbs }) {
  const locale = useLocale();
  return (
    <div>
      {breadcrumbs}
      ToolsMain in {locale}
    </div>
  );
}
