import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import MainPage from "@/pages/MainPage";
import { useLocale } from "next-intl";

export default async function Home() {
  // const locale = useLocale();

  return <MainPage />;
}
