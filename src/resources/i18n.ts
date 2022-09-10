import { createI18n } from "vue-i18n"
import { LanguageTypes } from "./languageTypes"
import dk from "./translations/dk.json";
import en from "./translations/en.json";

export const languageOptions = {
  [LanguageTypes.DK]: dk,
  [LanguageTypes.EN]: en,
}

export const i18n = createI18n({
  locale: LanguageTypes.DK,
  messages: languageOptions
})
