import i18n from "i18next"
import { initReactI18next } from "react-i18next"

import enFallback from "./locales/en/fallback.json"
import enNs1 from "./locales/en/ns1.json"
export const defaultNS = "ns1"
export const fallbackNS = "fallback"

void i18n.use(initReactI18next).init({
  debug: process.env.NODE_ENV === "development",
  fallbackLng: "en",
  defaultNS,
  fallbackNS,
  resources: {
    en: {
      ns1: enNs1,
      fallback: enFallback,
    },
  },
})

export default i18n
