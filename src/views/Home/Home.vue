<template>
  <!--
    This example requires updating your template:

    ```
    <html class="h-full">
    <body class="h-full">
    ```
  -->
  <div class="min-h-full">
    <Disclosure
      v-slot="{ open }"
      as="nav"
      class="border-b border-gray-200 bg-white"
    >
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 justify-between">
          <div class="flex">
            <div class="flex flex-shrink-0 items-center">
              <img
                class="block h-8 w-auto lg:hidden"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt="Your Company"
              >
              <img
                class="hidden h-8 w-auto lg:block"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt="Your Company"
              >
            </div>
            <div class="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
              <router-link
                v-for="item in navigation"
                :key="item.name"
                :to="{ name: item.routeName }"
                :class="[item.current ? 'border-indigo-500 text-gray-900' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700', 'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium']"
                :aria-current="item.current ? 'page' : undefined"
              >
                {{ item.name }}
              </router-link>
            </div>
          </div>
          <div class="-mr-2 flex items-center sm:hidden">
            <!-- Mobile menu button -->
            <DisclosureButton class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              <span class="sr-only">
                Open main menu
              </span>
              <Bars3Icon
                v-if="!open"
                class="block h-6 w-6"
                aria-hidden="true"
              />
              <XMarkIcon
                v-else
                class="block h-6 w-6"
                aria-hidden="true"
              />
            </DisclosureButton>
          </div>
        </div>
      </div>

      <DisclosurePanel class="sm:hidden">
        <div class="space-y-1 pt-2 pb-3">
          <DisclosureButton
            v-for="item in navigation"
            :key="item.name"
            as="router-link"
            :to="{ name: item.routeName }"
            :class="[item.current ? 'bg-indigo-50 border-indigo-500 text-indigo-700' : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800', 'block pl-3 pr-4 py-2 border-l-4 text-base font-medium']"
            :aria-current="item.current ? 'page' : undefined"
          >
            {{ item.name }}
          </DisclosureButton>
        </div>
      </DisclosurePanel>
    </Disclosure>

    <div class="py-10">
      <header>
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 class="text-3xl font-bold leading-tight tracking-tight text-gray-900">
            Dashboard
          </h1>
        </div>
      </header>
      <main>
        <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div class="mt-12">
            <h2 class="text-sm font-medium text-gray-500">
              Some fake actions
            </h2>
            <ul
              role="list"
              class="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4"
            >
              <li>
                <button
                  type="button"
                  class="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  @click="doTheFakeAction"
                >
                  Do the action
                </button>
              </li>
              <li>
                <button
                  type="button"
                  class="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  @click="doTheFakeAction"
                >
                  Do this action
                </button>
              </li>
              <li>
                <button
                  type="button"
                  class="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  @click="doTheFakeAction"
                >
                  Do this other action
                </button>
              </li>
            </ul>
          </div>
          <div class="mt-12">
            <h2 class="text-sm font-medium text-gray-500">
              Presentation example
            </h2>
            <div class="mt-3">
              <button
                type="button"
                class="inline-flex items-center rounded-md border border-transparent bg-indigo-200 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:ring-offset-2"
                onclick="window._paq.push(['trackEvent', 'Buttons', 'Informations']);"
              >
                Open informations
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
} from 'vue';
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/vue';
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/vue/24/outline';
import { matomoMutations } from '@/store/modules/matomo/mutations';
import { useStore } from '@/store';

const navigation = [
  { routeName: 'home', name: 'Dashboard', current: true },
  { routeName: 'projects', name: 'Projects', current: false },
];

export default defineComponent({

  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Bars3Icon,
    XMarkIcon,
  },

  setup() {
    const store = useStore();

    return {
      store,
      navigation,
    };
  },

  methods: {
    doTheFakeAction() {
      this.store.commit(matomoMutations.addActionBeforeProjectClicked);
      this.$notify({
        text: `+1 action done before any project clicked. Total count : ${this.store.state.matomo.actionsBeforeProjectClicked}`,
        type: 'info',
      });
    },
  },

});
</script>
