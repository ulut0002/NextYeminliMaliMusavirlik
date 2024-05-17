"use client";
export default function News({ news: { data = [] }, breadcrumbs }) {
  if (data.length === 0) {
    return <div>There is no news</div>;
  }

  return (
    <div>
      {breadcrumbs}
      {data.map((item) => {
        return <div key={item.id}>{item.title}</div>;
      })}
    </div>
  );
}
