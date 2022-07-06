import { defineStore } from "pinia";
import { computed } from "vue";
import { useState } from "./rootState";

export const useGetters = defineStore('root.getters', () => {
    const state = useState()
  
    const GetCurrentLanguage = computed(() => {
      return state.Language;
    })
  
    return {
        GetCurrentLanguage
    }
  })