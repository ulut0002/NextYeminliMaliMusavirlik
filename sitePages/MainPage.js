import MainPageCarousel from "@/components/MainPageCarousel/MainPageCarousel";
import ServiceList from "@/components/ServiceList/ServiceList";
import { useLocale } from "next-intl";

export default function MainPage() {
  const locale = useLocale();

  return (
    <div>
      <MainPageCarousel />
      <ServiceList />
    </div>
  );
}
