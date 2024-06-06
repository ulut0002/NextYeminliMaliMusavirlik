import { LOCALES } from "@/i18n";
import { findRouteEntry } from "@/siteConfig";

const normalizeText = (text) => {
  if (!text) {
    return "";
  }
  const map = {
    ç: "c",
    Ç: "C",
    ğ: "g",
    Ğ: "G",
    ı: "i",
    I: "I",
    ö: "o",
    Ö: "O",
    ş: "s",
    Ş: "S",
    ü: "u",
    Ü: "U",
    à: "a",
    À: "A",
    â: "a",
    Â: "A",
    æ: "ae",
    Æ: "AE",
    ç: "c",
    Ç: "C",
    é: "e",
    É: "E",
    è: "e",
    È: "E",
    ê: "e",
    Ê: "E",
    ë: "e",
    Ë: "E",
    î: "i",
    Î: "I",
    ï: "i",
    Ï: "I",
    ô: "o",
    Ô: "O",
    œ: "oe",
    Œ: "OE",
    ù: "u",
    Ù: "U",
    û: "u",
    Û: "U",
    ü: "u",
    Ü: "U",
    ÿ: "y",
    Ÿ: "Y",
  };

  return text.replace(
    /[çğışöşüÇĞIŞÖŞÜàÀâÂæÆçÇéÉèÈêÊëËîÎïÏôÔœŒùÙûÛüÜÿŸ]/g,
    (char) => map[char]
  );
};

const createMetadata = (payload) => {
  const { title, description, keywords } = payload;
  return {
    title: title,
    description: description,
    keywords: keywords,
    generator: "Next.js",
    applicationName: "Next.js",
    referrer: "origin-when-cross-origin",
    authors: [
      { name: "Serdar Ulutas", url: "http://serdar.ca" },
      { name: "Metin Arslan" },
      { name: "Soner Altıoğlu" },
    ],
    creator: "Next Team",
    publisher: "Serdar Ulutas",
  };
};

const switchLanguage = (currLang, newLang, currentPath = []) => {
  let pathArray = currentPath.split("/").filter((item) => {
    if (!item) return false;
    if (LOCALES.includes(item)) return false;
    return true;
  });
  pathArray = pathArray.join("/");
  const currPath = `/${pathArray}`;

  const currPathEntry = findRouteEntry(currPath, newLang);

  if (!currPathEntry) {
    return;
  }

  return `/${newLang}${currPathEntry}`;
};

const createUrl = (path, locale) => {
  return `/${locale}${path}`;
};

const setLocalStorage = (key, value) => {
  try {
    localStorage.setItem(key, value);
  } catch (error) {
    console.error("Error saving to local storage", error);
  }
};

const getLocalStorage = (key) => {
  try {
    return localStorage.getItem(key);
  } catch (error) {
    console.error("Error getting from local storage", error);
    return null;
  }
};

export {
  normalizeText,
  createMetadata,
  switchLanguage,
  createUrl,
  setLocalStorage,
  getLocalStorage,
};
