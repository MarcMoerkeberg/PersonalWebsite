import { RoutePathEnum } from "@/models/enums/RoutePathEnum";
import { LanguageTypes } from "@/resources/languageTypes";

export type IBaseState = {
    Language: LanguageTypes,
    CurrentRoute: RoutePathEnum,
    RoutesToHideAppBar: RoutePathEnum[]
}