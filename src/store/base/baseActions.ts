import { i18n } from "@/resources/i18n";
import { LanguageTypes } from "@/resources/languageTypes";
import { BaseStoreMapper } from "./baseStore";
import { PiniaActionMapper } from "@/store/storeAdaptionHelpers"
import { IBaseActions } from "./types/IBaseActions";

export const baseActions: PiniaActionMapper<IBaseActions, BaseStoreMapper> = {
    async setCurrentLanguage(languageType: LanguageTypes) {
        this.Language = languageType;
        i18n.global.locale = languageType;
    }
}