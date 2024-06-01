"use client";

import Link from "next/link";
import { Suspense, useEffect, useState } from "react";
// import Skeleton from "../Skeleton/Skeleton";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function IndustryContent({ selectedIndustry }) {
  // Simulating a delay for the suspense demo
  if (!selectedIndustry) {
    throw new Promise((resolve) => setTimeout(resolve, 1));
  }

  return <p>{selectedIndustry.description}</p>;
}

export default function IndustryListClient({ data, locale }) {
  const [selectedIndustry, setSelectedIndustry] = useState(null);

  const {
    mainTitle,
    title,
    description,
    ctaLabelAllIndustries,
    ctaLabelOneIndustry,
    items,
  } = data;

  useEffect(() => {
    if (data.items && data.items.length) {
      setSelectedIndustry(data.items[0]);
    }
  }, [data]);

  const handleIndustryChange = (e) => {
    setSelectedIndustry(items[e.target.value] || null);
  };

  console.log(data);

  return (
    <section className='grid grid-cols-1 lg:grid lg:grid-cols-3 bg-gray-200 py-10 px-2 gap-4 '>
      <h1 className='title'>{mainTitle}</h1>
      <h2 className='industries-title'>{title}</h2>

      {items && items.length && (
        <div className='block lg:hidden'>
          <select
            defaultValue={selectedIndustry}
            onChange={handleIndustryChange}
          >
            {items.map((item, index) => {
              return (
                <option key={item} value={index}>
                  {item.title}
                </option>
              );
            })}
          </select>
        </div>
      )}

      <div className='block lg:hidden'>
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

      <div className='hidden lg:block'></div>
    </section>
  );
}
