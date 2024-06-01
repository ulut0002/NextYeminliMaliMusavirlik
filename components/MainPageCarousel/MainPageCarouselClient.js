"use client";
import { createUrl } from "@/lib/utils";
import hero1 from "@/public/images/hero1.jpg";
import hero2 from "@/public/images/hero2.jpeg";
import hero3 from "@/public/images/hero3.jpg";
import hero4 from "@/public/images/hero4.jpeg";
import hero5 from "@/public/images/hero5.jpeg";
import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Requires CSS for the carousel

const imageMap = {
  "@/public/images/hero1.jpg": hero1,
  "@/public/images/hero2.jpeg": hero2,
  "@/public/images/hero3.jpg": hero3,
  "@/public/images/hero4.jpeg": hero4,
  "@/public/images/hero5.jpeg": hero5,
};

export default function MainPageCarouselClient({ data, locale }) {
  // const images = [hero1, hero2, hero3, hero4, hero5];

  const { ctaLabel, items } = data;

  // Map the items to include the imported images
  const mappedItems = items.map((item) => ({
    ...item,
    image: imageMap[item.image]?.src || item.image,
  }));

  return (
    <div>
      <Carousel
        showArrows={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={false}
        interval={4000}
        infiniteLoop={false}
        className=''
      >
        {mappedItems.map((item, index) => (
          <div key={index} className='image-container'>
            <Image
              src={item.image}
              alt={`Image ${index + 1}`}
              layout='fill'
              objectFit='cover'
              priority
            />
            <div className='overlay flex flex-col gap-4'>
              <h2 className='font-semibold'>{item.title}</h2>
              <p className='text-md'>{item.description}</p>
              <Link href={item.href} className='button ctaButton'>
                {ctaLabel}
              </Link>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
