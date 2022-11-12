import { RoutePathEnum } from "@/models/enums/RoutePathEnum";
import { LanguageTypes } from "@/resources/languageTypes";
import { RouteLocationNormalizedLoaded } from "vue-router";
import { IBaseState } from "./types/IBaseState";

export function baseState(): IBaseState {
    return {
        Language: LanguageTypes.DK,
        CurrentRoute: {} as RouteLocationNormalizedLoaded,
        RoutesToHideAppBar: [RoutePathEnum.LandingPage.toString()]
    }
}