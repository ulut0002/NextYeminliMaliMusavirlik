import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";

const getBreadcrumbData = (breadcrumbs, locale, t) => {
  try {
    let data =
      breadcrumbs.items[locale] || breadcrumbs.items["default"] || null;

    if (!data) {
      return null;
    }

    data = data.map((item, index) => {
      const isLast = index === data.length - 1;

      let { href, text } = item;
      href = `/${locale}${href}`;
      return {
        href,
        text: t(text),
        isLast,
      };
    });

    return <Breadcrumb data={data} />;
  } catch (error) {
    console.error("Error in getBreadcrumbData", error);
    return null;
  }

  if (!Array.isArray(breadcrumbs) || breadcrumbs.length === 0 || !locale) {
    return [];
  }
  const data = breadcrumbs.map((item, index) => {
    const isLast = index === breadcrumbs.length - 1;
    const { path, label } = item;
    const href = `/${locale}${path}`;
    return {
      href,
      text: t(label),
      isLast,
    };
  });
  return <Breadcrumb data={data} />;
  return data;
};

export { getBreadcrumbData };
