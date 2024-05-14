import { useLocale } from "next-intl";

export default function ToolsMain() {
  const locale = useLocale();
  return <div>ToolsMain in {locale}</div>;
}
