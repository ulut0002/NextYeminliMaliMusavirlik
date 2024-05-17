import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";

const { DEFAULT_LOCALE } = require("@/i18n");

const getBreadcrumbData = (breadcrumbs = [], locale, t) => {
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
