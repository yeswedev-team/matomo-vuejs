// store.ts
import { InjectionKey } from 'vue';
import {
  createStore,
  useStore as baseUseStore,
  Store,
} from 'vuex';
import { MatomoInterface } from '@/models/interfaces/MatomoInterface';
import MatomoModule from './modules/matomo/MatomoModule';

// define your typings for the store state
// Here the State is empty beacause we use Modules
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface State {
  matomo: MatomoInterface,
}

// define injection key
// eslint-disable-next-line symbol-description
export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  modules: {
    matomo: MatomoModule,
  },
});

// define your own `useStore` composition function
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function useStore() {
  return baseUseStore(key);
}
