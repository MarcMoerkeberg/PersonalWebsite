import { defineStore, Store } from 'pinia'
import { baseActions } from '@/store/base/baseActions'
import { baseState } from './baseState'
import { baseGetters } from './baseGetters'
import { IBaseState } from '@/store/base/types/IBaseState'
import { IBaseGetters } from '@/store/base/types/IBaseGetters'
import { IBaseActions } from '@/store/base/types/IBaseActions'

export type BaseStoreMapper = Store<'baseStore', IBaseState, IBaseGetters, IBaseActions>;

export const baseStore = defineStore({
    id: 'baseStore',
    state: baseState,
    getters: baseGetters,
    actions: baseActions
})