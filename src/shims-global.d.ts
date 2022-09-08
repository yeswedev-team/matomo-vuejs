import MatomoService from './services/MatomoService';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $matomoService: MatomoService;
  }
}
