import IndustryListServer from "@/components/IndustryList/IndustryListServer";
import MainPageCarouselClient from "@/components/MainPageCarousel/MainPageCarouselClient";
import MainPageCarouselServer from "@/components/MainPageCarousel/MainPageCarouselServer";
import ServiceList from "@/components/ServiceList/ServiceList";
import { useLocale } from "next-intl";

export default function MainPage() {
  const locale = useLocale();

  return (
    <div className='grid grid-cols-1 gap-4'>
      <MainPageCarouselServer />

      <ServiceList />
      <IndustryListServer />
    </div>
  );
}
