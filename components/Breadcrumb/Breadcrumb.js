"use client";

import { Breadcrumbs } from "@material-tailwind/react";
import Link from "next/link";
import { useMemo } from "react";

export default function Breadcrumb({ data = [] }) {
  const breadcrumbs = useMemo(() => data, [data]);

  if (breadcrumbs.length === 0) {
    return null;
  }

  return (
    <div role='presentation'>
      <Breadcrumbs separator='/' className='pl-0'>
        {data.map((item, index) => {
          const { href, text, isLast } = item;

          return (
            <Link
              underline='hover'
              color='inherit'
              key={index}
              href={href}
              aria-current={isLast ? "page" : undefined}
            >
              {text}
            </Link>
          );
        })}
      </Breadcrumbs>
    </div>
  );
}
