import { LanguageTypes } from "@/resources/languageTypes";
import { RouteLocationNormalizedLoaded } from "vue-router";

export type IBaseState = {
    Language: LanguageTypes,
    CurrentRoute: RouteLocationNormalizedLoaded,
    RoutesToHideAppBar: String[]
}