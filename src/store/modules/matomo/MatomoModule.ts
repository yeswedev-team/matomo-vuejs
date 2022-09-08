// import { Commit } from 'vuex';
import { MatomoInterface } from '@/models/interfaces/MatomoInterface';
import MatomoDefault from './MatomoDefault';
import { mutations } from './mutations';

// type Getters = {}

// type Context = {
//   state: MatomoInterface;
//   commit: Commit;
//   getters: Getters;
// }

const MatomoModule = {

  namespaced: true,

  state: (): MatomoInterface => (MatomoDefault),

  getters: {},

  actions: {},

  mutations,
};

export default MatomoModule;
