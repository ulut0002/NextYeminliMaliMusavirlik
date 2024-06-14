import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import { CONTENT_ITEM_TYPE } from "./constants";

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
};

const translateContent = (content, t, locale) => {
  const newContent = { ...content };
  newContent.title = t(content.title);
  newContent.description = t(content.description);
  if (Array.isArray(content.items)) {
    newContent.items = content.items.map((serviceItem) => {
      const { title, description, importance, steps, benefits, recipients } =
        serviceItem;
      return {
        title: t(title),
        description: translateText(description, t, locale),
        importance: translateText(importance, t, locale),
        steps: translateText(steps, t, locale, true),
        benefits: translateText(benefits, t, locale),
        recipients: translateText(recipients, t, locale),
      };
    });
  }
  return newContent;
};

const translateText = (data, t, locale, debug) => {
  if (!Array.isArray(data)) {
    data = [data];
  }

  data = data.map((item) => {
    const { text, type = CONTENT_ITEM_TYPE.PARAGRAPH } = item;

    if (type === CONTENT_ITEM_TYPE.PARAGRAPH) {
      return {
        ...item,
        type: type || CONTENT_ITEM_TYPE.PARAGRAPH,
        text: t(text),
      };
    } else if (type === CONTENT_ITEM_TYPE.LIST) {
      const listItems = item.items;

      if (Array.isArray(listItems)) {
        return {
          ...item,
          type: type || CONTENT_ITEM_TYPE.PARAGRAPH,
          items: listItems.map((listItem) => {
            return { text: t(listItem.text || "") };
          }),
        };
      }
    } else if (type === CONTENT_ITEM_TYPE.IMAGE) {
    }

    return {
      ...item,
      type: type || CONTENT_ITEM_TYPE.PARAGRAPH,
      text: t(text),
    };
  });

  return data;
};

export { getBreadcrumbData, translateText, translateContent };
