import { LanguageTypes } from "@/resources/languageTypes";

export type IBaseActions = {
    setCurrentLanguage: (languageType: LanguageTypes) => Promise<void>;
}