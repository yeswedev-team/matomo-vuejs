<template>
  <div>
    <router-view
      v-slot="{ Component }"
      @contextmenu.prevent=""
    >
      <keep-alive
        :max="10"
      >
        <component
          :is="Component"
          :key="$route.name"
        />
      </keep-alive>
    </router-view>

    <notifications
      :speed="1000"
      :duration="5000"
    />

    <transition
      name="fade-fast"
      mode="out-in"
    >
      <GDPRModal
        v-if="showGDPRModal"
        @agreed="gdprAgreed"
        @refused="gdprRefused"
      />
    </transition>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
} from 'vue';
import { useRoute } from 'vue-router';
import MatomoService from './services/MatomoService';
import { useStore } from './store';
import { matomoMutations } from './store/modules/matomo/mutations';
import GDPRModal from './views/shared/components/GDPRModal.vue';

export default defineComponent({

  components: {
    GDPRModal,
  },

  setup() {
    const store = useStore();
    const route = useRoute();

    return {
      store,
      route,
      showGDPRModal: computed(() => store.state.matomo.showGDPRModal),
    };
  },

  async mounted() {
    // Trigger Matomo if use
    this.initMatomo();

    // Trigger Matomo when user is logged in
    window.addEventListener('user-opt-in', (() => {
      this.initMatomo();
    // eslint-disable-next-line no-undef
    }) as EventListener);
  },

  methods: {
    initMatomo() {
      // Custom consent management
      if (localStorage.getItem('matomoDemo_gdprAgreement') === 'true') {
        // Forget consent : a trick to fix an issue
        MatomoService.forgetUserOptOut();

        // Set consent
        MatomoService.setConsentGiven();
        MatomoService.setCookieConsentGiven();
        MatomoService.rememberConsentGiven();

        // Retrieve the user
        const user = {
          id: 'Glen_User_ID',
          email: 'glen.s@yeswedev.bzh',
          name: 'Glen',
        };

        // Send user's data to Matomo
        MatomoService.setUserId(user.id);
        MatomoService.setEmailVariable(user.email);
        MatomoService.setUsernameVariable(user.name);
      }
    },
    gdprAgreed() {
      this.store.commit(matomoMutations.unsetShowGDPRModal);
      this.initMatomo();
    },
    gdprRefused() {
      this.store.commit(matomoMutations.unsetShowGDPRModal);
    },
  },
});
</script>
