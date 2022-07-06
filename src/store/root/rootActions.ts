import { defineStore } from 'pinia'
import { useState } from './rootState'
import { LanguageType } from "@/resources/languageTypes";
import { i18n } from '@/resources/i18n';

export const useActions = defineStore('root.actions', () => {
  const state = useState()

  function SetLanguage(language: LanguageType): Promise<void>  {
    return new Promise((resolve) => {
      state.Language = language;
      i18n.global.locale = language;
      return resolve();
    })
  }

  return {
    SetLanguage
  }
})