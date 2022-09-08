/* eslint-disable @typescript-eslint/no-explicit-any */

import { createApp } from 'vue';
import VueMatomo from 'vue-matomo';
import Notifications from '@kyvg/vue3-notification';
import App from './App.vue';
import { store, key } from './store';
import './styles/vendor.css';
import './styles/app.scss';
import MatomoService from './services/MatomoService';
import initRouter from './router';

declare global {
  interface Window {
    _paq: any;
  }
}

const application = createApp(App);

const initApplication = async () => {
  // Declare window
  application.config.globalProperties.window = window;

  // Declare router
  const router = initRouter();

  application
    .use(store, key)
    .use(router)
    .use(Notifications);

  const mountApplication = async () => {
    const matomoConfig = MatomoService.getConfig(router);
    application.use(VueMatomo, matomoConfig);

    application.mount('#app');
  };

  mountApplication();
};

initApplication();
