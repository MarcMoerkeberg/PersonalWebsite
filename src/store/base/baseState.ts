import { LanguageTypes } from "@/resources/languageTypes";
import { IBaseState } from "./types/IBaseState";

export function baseState(): IBaseState {
    return {
        Language: LanguageTypes.DK
    }
}