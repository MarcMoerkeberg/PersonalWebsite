import { LanguageTypes } from "@/resources/languageTypes";

export type IBaseGetters = {
    getCurrentCurrentLanguage: LanguageTypes;
    showAppBar: boolean;
}