import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import en from "../locals/en.json"
import th from "../locals/th.json"
import jp from "../locals/jp.json"

i18next.use(initReactI18next).init({
    resources: {
        en: { translation: en },
        th: { translation: th },
        jp: { translation: jp }
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false 
    }
})

export default i18next;