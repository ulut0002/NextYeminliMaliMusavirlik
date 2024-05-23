import MainPageCarousel from "@/components/MainPageCarousel/MainPageCarousel";
import { useLocale } from "next-intl";

export default function MainPage() {
  const locale = useLocale();

  return (
    <div>
      <MainPageCarousel />
    </div>
  );
}
