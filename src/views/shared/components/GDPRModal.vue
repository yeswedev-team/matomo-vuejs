<template>
  <section
    class="fixed z-990 inset-0 overflow-y-auto"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
  >
    <div class="  bg-blue-900 flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <div
        class="has-dots-constellation-background fixed inset-0 transition-opacity"
        aria-hidden="true"
      />
      <span
        class="hidden sm:inline-block sm:align-middle sm:h-screen"
        aria-hidden="true"
      >
        &#8203;
      </span>
      <div class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-xl sm:w-full sm:p-6">
        <div>
          <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-blue-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div class="mt-3 text-center sm:mt-5">
            <h3
              id="modal-title"
              class="text-lg leading-6 font-medium text-gray-900"
            >
              Data recording
            </h3>
            <p>
              Paragraph or link about Privacy Policy and data recording.
            </p>
          </div>
        </div>
        <div class="flex mt-5 sm:mt-6">
          <button
            type="button"
            class="mr-4 inline-flex items-center justify-center w-full rounded-md border border-transparent bg-indigo-200 px-6 py-3 text-base font-medium text-indigo-700 shadow-sm hover:bg-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:ring-offset-2"
            @click="refuse"
          >
            Refuse
          </button>
          <button
            type="button"
            class="ml-4 inline-flex items-center justify-center w-full rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            @click="agree"
          >
            Agree
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import {
  defineComponent,
} from 'vue';
import { useStore } from '@/store';

export default defineComponent({

  emits: ['agreed', 'refused'],

  setup() {
    const store = useStore();

    return {
      store,
    };
  },

  methods: {
    agree() {
      localStorage.setItem('matomoDemo_gdprAgreement', 'true');
      this.$emit('agreed');
    },
    refuse() {
      localStorage.setItem('matomoDemo_gdprAgreement', 'false');
      this.$emit('refused');
    },
  },
});
</script>
