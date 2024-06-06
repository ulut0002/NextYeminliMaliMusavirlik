"use client";

import { LOCAL_STORAGE_KEYS } from "@/lib/constants";
import { getLocalStorage, setLocalStorage } from "@/lib/utils";
import Link from "next/link";
import { Suspense, useEffect, useState } from "react";
// import Skeleton from "../Skeleton/Skeleton";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Svg from "../SVG/Svg";
import Image from "next/image";

import energy from "@/public/images/industries/energy.jpeg";
import finance from "@/public/images/industries/financial.jpeg";
import pharmaceutical from "@/public/images/industries/pharmaceutical.jpeg";
import retail from "@/public/images/industries/retail.jpeg";
import technology from "@/public/images/industries/technology.jpeg";
import production from "@/public/images/industries/production.jpeg";
import construction from "@/public/images/industries/construction.jpeg";

const imageMap = {
  "@/public/images/industries/energy.jpeg": energy,
  "@/public/images/industries/financial.jpeg": finance,
  "@/public/images/industries/pharmaceutical.jpeg": pharmaceutical,
  "@/public/images/industries/retail.jpeg": retail,
  "@/public/images/industries/technology.jpeg": technology,
  "@/public/images/industries/production.jpeg": production,
  "@/public/images/industries/construction.jpeg": construction,
};

function IndustryContent({ selectedIndustry }) {
  // Simulating a delay for the suspense demo
  if (!selectedIndustry) {
    throw new Promise((resolve) => setTimeout(resolve, 1));
  }

  return <p>{selectedIndustry.description}</p>;
}

export default function IndustryListClient({ data, locale }) {
  const [selectedIndustry, setSelectedIndustry] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const {
    mainTitle,
    title,
    description,
    ctaLabelAllIndustries,
    ctaLabelOneIndustry,
    items,
  } = data;

  useEffect(() => {
    const selectedValue = getLocalStorage(LOCAL_STORAGE_KEYS.SELECTED_INDUSTRY);

    if (data.items && data.items.length) {
      if (!isNaN(selectedValue) && data.items[selectedValue]) {
        setSelectedIndex(selectedValue);
        setSelectedIndustry(data.items[parseInt(selectedValue, 10)]);
      } else {
        setSelectedIndustry(data.items[0]);
        setSelectedIndex(0);
      }
    }
  }, []);

  const handleIndustryChange = (e) => {
    const value = e.target.value;
    setSelectedIndustry(items[value] || null);
    if (!isNaN(value)) {
      setSelectedIndex(parseInt(value, 10));
      setLocalStorage(LOCAL_STORAGE_KEYS.SELECTED_INDUSTRY, value);
    }
  };

  const handleLinkClick = (e, index) => {
    e.preventDefault();
    setSelectedIndex(index);
    setSelectedIndustry(data.items[parseInt(index, 10)]);
    setLocalStorage(LOCAL_STORAGE_KEYS.SELECTED_INDUSTRY, index);
  };

  return (
    <section>
      <div className=' lg:hidden grid grid-cols-1  bg-gray-200 py-10 px-2 gap-4'>
        <h1 className='title'>{mainTitle}</h1>
        <h2 className='industries-title'>{title}</h2>
        {items && items.length && (
          <div className='block lg:hidden'>
            <select
              className='block w-full px-4 py-2 pr-8 bg-white border border-gray-300 rounded shadow leading-tight focus:outline-none focus:shadow-outline'
              onChange={handleIndustryChange}
              value={selectedIndex}
            >
              {items.map((item, index) => {
                const { title } = item;
                return (
                  <option key={index} value={index}>
                    {title}
                  </option>
                );
              })}
            </select>
          </div>
        )}

        <Suspense fallback={<Skeleton count={1} />}>
          <IndustryContent selectedIndustry={selectedIndustry} />
        </Suspense>

        <Link
          href={selectedIndustry ? selectedIndustry.href : "/"}
          className='button mt-4'
        >
          {ctaLabelOneIndustry}
        </Link>

        <p className='hidden lg:block'>{ctaLabelAllIndustries}</p>
      </div>

      <div className='hidden lg:grid lg:grid-cols-3 lg:auto-rows-auto bg-blue-gray-100 rounded-xl p-4  gap-20'>
        <div className='col-span-3'>
          <h1 className='title'>{mainTitle}</h1>
          <h2 className='industries-title'>{title}</h2>
        </div>
        <div className='col-span-1 '>
          <div className='grid grid-cols-1 gap-0'>
            {items && items.length && (
              <ul className='flex flex-col gap-5'>
                {items.map((item, index) => {
                  const { title, href, icon } = item;
                  return (
                    <li key={index} value={index}>
                      <Link
                        href={href ? href : "/"}
                        onClick={(e) => {
                          handleLinkClick(e, index);
                        }}
                      >
                        <div className='flex flex-row gap-2 items-center bg-white py-3 rounded-xl px-4 font-semibold'>
                          {icon && <Svg icon={icon} />}

                          {title}
                        </div>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </div>
        <div className='col-span-2 justify-end relative flex gap-0'>
          <div className=''>
            {selectedIndustry && selectedIndustry.image && (
              <Image
                alt='something'
                src={imageMap[selectedIndustry.image]}
                width={800}
                height={150}
                className='rounded-xl'
              ></Image>
            )}
          </div>
          <div>
            <div className='flex flex-end text-end  text-2xl font-semibold'>
              {selectedIndustry ? selectedIndustry.description || "" : ""}
            </div>
            <div className='flex flex-end justify-end'>
              <Link
                href={selectedIndustry ? selectedIndustry.href : "/"}
                className='button mt-4'
              >
                {ctaLabelOneIndustry}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
