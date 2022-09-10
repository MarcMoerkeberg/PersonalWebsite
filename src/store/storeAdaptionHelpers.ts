import { Store } from "pinia";

export type PiniaGetterMapper<GettersType, StoreType extends Store> = {
  [Key in keyof GettersType]: (this: StoreType, state: StoreType['$state']) => GettersType[Key];
};

export type PiniaActionMapper<Type extends Record<string, (...args: any) => any>, StoreType extends Store> = {
  [Key in keyof Type]: (this: StoreType, ...p: Parameters<Type[Key]>) => ReturnType<Type[Key]>;
};