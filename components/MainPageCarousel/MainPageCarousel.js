"use client";
import hero1 from "@/public/images/hero1.jpg";
import hero2 from "@/public/images/hero2.jpeg";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Requires CSS for the carousel

export default function MainPageCarousel() {
  return (
    <Carousel showArrows={true} showStatus={false}>
      <div>
        <Image src={hero1} alt='hero1' width={500} height={100} />
        <p className='legend'>abc</p>
      </div>
      <div>
        <Image src={hero2} alt='hero2' width={500} height={100} />
        <p className='legend'>def</p>
      </div>
    </Carousel>
  );
}
