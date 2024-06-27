"use client";
import hero1 from "@/public/images/hero1.jpg";
import hero2 from "@/public/images/hero2.jpeg";
import hero3 from "@/public/images/hero3.jpg";
import hero4 from "@/public/images/hero4.jpeg";
import hero5 from "@/public/images/hero5.jpeg";
import cnHero1 from "@/public/images/hero-cn-1.jpeg";
import cnHero2 from "@/public/images/hero-cn-2.jpeg";
import cnHero3 from "@/public/images/hero-cn-3.jpeg";
import ruHero1 from "@/public/images/hero-ru-1.jpeg";
import ruHero2 from "@/public/images/hero-ru-2.jpeg";
import ruHero3 from "@/public/images/hero-ru-3.jpeg";

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
  "@/public/images/hero-cn-1.jpeg": cnHero1,
  "@/public/images/hero-cn-2.jpeg": cnHero2,
  "@/public/images/hero-cn-3.jpeg": cnHero3,
  "@/public/images/hero-ru-1.jpeg": ruHero1,
  "@/public/images/hero-ru-2.jpeg": ruHero2,
  "@/public/images/hero-ru-3.jpeg": ruHero3,
};

export default function MainPageCarouselClient({ data, locale }) {
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
            <div className='carousel--container'>
              <h2 className='header'>{item.title}</h2>
              <p className='text '>{item.description}</p>
              <Link href={item.href} className='button button-light'>
                {ctaLabel}
              </Link>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
