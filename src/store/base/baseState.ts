import { RoutePath } from "@/models/enums/RoutePath";
import { LanguageTypes } from "@/resources/languageTypes";
import { RouteLocationNormalizedLoaded } from "vue-router";
import { IBaseState } from "./types/IBaseState";

export function baseState(): IBaseState {
    return {
        Language: LanguageTypes.DK,
        CurrentRoute: RoutePath.LandingPage,
        RoutesToHideAppBar: [RoutePath.LandingPage]
    }
}