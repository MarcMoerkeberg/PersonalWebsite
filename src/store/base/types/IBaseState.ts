import { RoutePath } from "@/models/enums/RoutePath";
import { LanguageTypes } from "@/resources/languageTypes";

export type IBaseState = {
    Language: LanguageTypes,
    CurrentRoute: RoutePath,
    RoutesToHideAppBar: RoutePath[]
}