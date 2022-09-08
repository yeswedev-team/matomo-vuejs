import { MatomoInterface } from '@/models/interfaces/MatomoInterface';

const mutations = {
  addActionBeforeProjectClicked(state: MatomoInterface): void {
    state.actionsBeforeProjectClicked += 1;
  },
  resetActionsBeforeProjectClicked(state: MatomoInterface): void {
    state.actionsBeforeProjectClicked = 0;
  },
  setShowGDPRModal(state: MatomoInterface): void {
    state.showGDPRModal = true;
  },
  unsetShowGDPRModal(state: MatomoInterface): void {
    state.showGDPRModal = false;
  },
};

const matomoMutations = {
  addActionBeforeProjectClicked: 'matomo/addActionBeforeProjectClicked',
  resetActionsBeforeProjectClicked: 'matomo/resetActionsBeforeProjectClicked',
  setShowGDPRModal: 'matomo/setShowGDPRModal',
  unsetShowGDPRModal: 'matomo/unsetShowGDPRModal',
};

export {
  mutations,
  matomoMutations,
};
