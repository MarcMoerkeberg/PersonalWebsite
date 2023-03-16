import { RoutePath } from "@/models/enums/RoutePath";
import { LanguageTypes } from "@/resources/languageTypes";
import { RouteLocationNormalizedLoaded } from "vue-router";

export type IBaseActions = {
    SetCurrentLanguage: (languageType: LanguageTypes) => Promise<void>;
    SetCurrentRoute: (newRoute: RouteLocationNormalizedLoaded) => Promise<void>;
    NavigateToView: (fullRoutePath: RoutePath) => Promise<void>;
    OpenInNewTab: (link: string | URL) => void;
}