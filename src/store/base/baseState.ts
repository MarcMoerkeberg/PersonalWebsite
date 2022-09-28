import { RoutePathEnum } from "@/models/enums/RoutePathEnum";
import { LanguageTypes } from "@/resources/languageTypes";
import { IBaseState } from "./types/IBaseState";

export function baseState(): IBaseState {
    return {
        Language: LanguageTypes.DK,
        RoutesToHideAppBar: [RoutePathEnum.LandingPage.toString()]
    }
}