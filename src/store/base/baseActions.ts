import { i18n } from "@/resources/i18n";
import { LanguageTypes } from "@/resources/languageTypes";
import { BaseStoreMapper } from "./baseStore";
import { PiniaActionMapper } from "@/store/storeAdaptionHelpers"
import { IBaseActions } from "./types/IBaseActions";
import { RouteLocationNormalizedLoaded } from "vue-router";
import router from "@/router";
import { RoutePathEnum } from "@/models/enums/RoutePathEnum";

export const baseActions: PiniaActionMapper<IBaseActions, BaseStoreMapper> = {
    async setCurrentLanguage(languageType: LanguageTypes) {
        this.Language = languageType;
        i18n.global.locale = languageType;
    },
    async setCurrentRoute(newRoute: RouteLocationNormalizedLoaded) {
        const newRouteAsPathEnum = newRoute.fullPath as RoutePathEnum;
        this.CurrentRoute = newRouteAsPathEnum;
    },
    async navigateToView(fullRoutePath: RoutePathEnum) {
        router.push(fullRoutePath);
    }
}