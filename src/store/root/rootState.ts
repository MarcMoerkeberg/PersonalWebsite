import { LanguageType } from "@/resources/languageTypes";
import { defineStore } from "pinia";
import { IRootState } from "./interfaces/IRootState";

export const useState = defineStore({
    id: 'root.state',
    
    state: (): IRootState => {
      return {
        Language: LanguageType.DK
      }
    }
  })