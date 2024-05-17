import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import { useLocale } from "next-intl";

export default async function Home() {
  // const locale = useLocale();

  return (
    <div>
      <h1>Main page in {"locale"}</h1>
    </div>
  );
}
