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

export { normalizeText };