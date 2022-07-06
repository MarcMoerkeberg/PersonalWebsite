import { createI18n } from "vue-i18n"
import { LanguageType } from "./languageTypes"
import dk from "./translations/dk.json";
import en from "./translations/en.json";

export const languageOptions = {
  [LanguageType.DK]: dk,
  [LanguageType.EN]: en,
}

export const i18n = createI18n({
  locale: LanguageType.DK,
  messages: languageOptions
})
