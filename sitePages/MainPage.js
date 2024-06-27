import ContactUs from "@/components/ContactUs/ContactUs";
import IndustryListServer from "@/components/IndustryList/IndustryListServer";
import MainPageCarouselServer from "@/components/MainPageCarousel/MainPageCarouselServer";
import ServiceList from "@/components/ServiceList/ServiceList";

export default function MainPage() {
  return (
    <div className='main-page-container' role='main'>
      <MainPageCarouselServer />
      <ServiceList />
      <IndustryListServer />
      <ContactUs />
    </div>
  );
}
