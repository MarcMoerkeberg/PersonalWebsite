import { i18n } from "@/resources/i18n";
import { LanguageTypes } from "@/resources/languageTypes";
import { BaseStoreMapper } from "./baseStore";
import { PiniaActionMapper } from "@/store/storeAdaptionHelpers"
import { IBaseActions } from "./types/IBaseActions";
import { RouteLocationNormalizedLoaded } from "vue-router";
import router from "@/router";
import { RoutePath } from "@/models/enums/RoutePath";

export const baseActions: PiniaActionMapper<IBaseActions, BaseStoreMapper> = {
    async SetCurrentLanguage(languageType: LanguageTypes) {
        this.Language = languageType;
        i18n.global.locale = languageType;
    },
    async SetCurrentRoute(newRoute: RouteLocationNormalizedLoaded) {
        const newRouteAsPathEnum = newRoute.fullPath as RoutePath;
        this.CurrentRoute = newRouteAsPathEnum;
    },
    async NavigateToView(fullRoutePath: RoutePath) {
        router.push(fullRoutePath);
    },
    OpenInNewTab: function (link: string | URL): void {
        window.open(link);
    }
}