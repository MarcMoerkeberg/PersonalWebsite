import { LanguageTypes } from "@/resources/languageTypes";
import { PiniaGetterMapper } from "../storeAdaptionHelpers";
import { BaseStoreMapper } from "./baseStore";
import { IBaseGetters } from "./types/IBaseGetters";

export const baseGetters: PiniaGetterMapper<IBaseGetters, BaseStoreMapper> = {
    getCurrentCurrentLanguage(state): LanguageTypes {
        return state.Language;
    },
    showAppBar(state): boolean {
        return !state.RoutesToHideAppBar.includes(state.CurrentRoute.path);
    }
}