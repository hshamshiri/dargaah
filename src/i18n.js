import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import detector from "i18next-browser-languagedetector";
import translationEN from "./locales/en/translation.json";
import translationFa from "./locales/fa/translation.json";

// the translations
const resources = {
  en: {
    translation: translationEN,
  },
  fa: {
    translation: translationFa,
  },
};

i18n
  .use(detector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "fa",
    fallbackLng: "fa",

    keySeparator: ".",

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
