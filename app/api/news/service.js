import { newsData } from "@/data/news";
import { DEFAULT_LOCALE_FOR_NEWS } from "@/i18n";
import { normalizeText } from "@/lib/utils";

const getNews = async (payload = {}) => {
  let {
    keyword = "",
    year = null,
    limit = null,
    lang = DEFAULT_LOCALE_FOR_NEWS,
    tags = [],
  } = payload;
  let filteredNewsData = newsData;

  keyword = normalizeText(keyword).trim().toLocaleLowerCase();
  if (keyword && keyword.length > 3) {
    filteredNewsData = filteredNewsData.filter((news) => {
      return (
        normalizeText(news.title).toLocaleLowerCase().includes(keyword) ||
        normalizeText(news.description).toLocaleLowerCase().includes(keyword) ||
        normalizeText(news.content).toLocaleLowerCase().includes(keyword)
      );
    });
  }

  if (year && !isNaN(year)) {
    filteredNewsData = filteredNewsData.filter((news) => news.pubYear === year);
  }

  if (lang) {
    filteredNewsData = filteredNewsData.filter((news) => news.lang === lang);
  }

  // Filter by tags
  if (tags.length > 0) {
    const tagsArray = Array.isArray(tags) ? tags : [tags];
    filteredNewsData = filteredNewsData.filter((newsItem) =>
      tagsArray.some((tag) => newsItem.tags.includes(tag))
    );
  }

  // Limit the number of results
  if (limit) {
    const limitInt = parseInt(limit);
    filteredNewsData = filteredNewsData.slice(0, limitInt);
  }

  return {
    data: filteredNewsData,
    count: filteredNewsData.length,
  };
};

export { getNews };
