import {
  createRouter,
  createWebHistory,
  RouteRecordRaw,
} from 'vue-router';
import { store } from '@/store';
import { matomoMutations } from '@/store/modules/matomo/mutations';

import Home from '@/views/Home/Home.vue';
import Projects from '@/views/Projects/Projects.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/projects',
    name: 'projects',
    component: Projects,
  },
];

const afterEachActions = () => {
  const matomoDemoGdprAgreement = localStorage.getItem('matomoDemo_gdprAgreement');
  if (matomoDemoGdprAgreement === 'true') {
    store.commit(matomoMutations.unsetShowGDPRModal);
  } else if (matomoDemoGdprAgreement === 'false') {
    store.commit(matomoMutations.unsetShowGDPRModal);
  } else if (matomoDemoGdprAgreement === null || matomoDemoGdprAgreement === undefined) {
    store.commit(matomoMutations.setShowGDPRModal);
  }
};

const initRouter = () => {
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });

  router.afterEach(() => {
    afterEachActions();
  });

  return router;
};

export default initRouter;
