import { defineStore } from "pinia";
import { customStore } from "../customStore";
import { useActions } from "./rootActions";
import { useGetters } from "./rootGetters";
import { useState } from "./rootState";

export const useRootStore = defineStore('root', () => {
  return {
    ...customStore(useState()),
    ...customStore(useGetters()),
    ...customStore(useActions())
  }
})
