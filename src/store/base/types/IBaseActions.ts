import { RoutePathEnum } from "@/models/enums/RoutePathEnum";
import { LanguageTypes } from "@/resources/languageTypes";
import { RouteLocationNormalizedLoaded } from "vue-router";

export type IBaseActions = {
    setCurrentLanguage: (languageType: LanguageTypes) => Promise<void>;
    setCurrentRoute: (newRoute: RouteLocationNormalizedLoaded) => Promise<void>;
    navigateToView: (fullRoutePath: RoutePathEnum) => Promise<void>;
}