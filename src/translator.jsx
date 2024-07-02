import i18n from "i18next";
import {initReactI18next} from "react-i18next";

import translationEN from "./translate/en/lang.json";
import translationID from "./translate/id/lang.json";

const resources = {
  en: {
    translation: translationEN,
  },
  id: {
    translation: translationID,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
