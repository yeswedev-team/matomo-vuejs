<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div>
    <h2 class="text-sm font-medium text-gray-500">
      Pinned Projects
    </h2>
    <ul
      role="list"
      class="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4"
    >
      <li
        v-for="project in projects"
        :key="project.name"
        class="col-span-1 flex rounded-md shadow-sm cursor-pointer"
        @click="goToProject(project)"
      >
        <div :class="[project.bgColor, 'flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md']">
          {{ project.initials }}
        </div>
        <div class="flex flex-1 items-center justify-between truncate rounded-r-md border-t border-r border-b border-gray-200 bg-white">
          <div class="flex-1 truncate px-4 py-2 text-sm">
            <a
              :href="project.href"
              class="font-medium text-gray-900 hover:text-gray-600"
            >{{ project.name }}</a>
            <p class="text-gray-500">
              {{ project.members }} Members
            </p>
          </div>
          <div class="flex-shrink-0 pr-2">
            <button
              type="button"
              class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white bg-transparent text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <span class="sr-only">Open options</span>
              <EllipsisVerticalIcon
                class="h-5 w-5"
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
} from 'vue';
import { EllipsisVerticalIcon } from '@heroicons/vue/20/solid';
import MatomoService from '@/services/MatomoService';
import { useStore } from '@/store';
import { matomoMutations } from '@/store/modules/matomo/mutations';

interface Project {
  name: string;
  initials: string;
  href: string;
  members: number;
  bgColor: string;
}

const projects: Project[] = [
  {
    name: 'Graph API', initials: 'GA', href: '#', members: 16, bgColor: 'bg-pink-600',
  },
  {
    name: 'Component Design', initials: 'CD', href: '#', members: 12, bgColor: 'bg-purple-600',
  },
  {
    name: 'Templates', initials: 'T', href: '#', members: 16, bgColor: 'bg-yellow-500',
  },
  {
    name: 'React Components', initials: 'RC', href: '#', members: 8, bgColor: 'bg-green-500',
  },
];

export default defineComponent({

  components: {
    EllipsisVerticalIcon,
  },

  setup() {
    const store = useStore();

    return {
      store,
      projects,
    };
  },

  methods: {
    goToProject(project: Project) {
      const { actionsBeforeProjectClicked } = this.store.state.matomo;
      MatomoService.eventProjectClicked(project.name, actionsBeforeProjectClicked);
      this.$notify({
        text: `Project clicked. Actions count done before : ${this.store.state.matomo.actionsBeforeProjectClicked}. Information sent to Matomo.`,
        type: 'success',
      });
      setTimeout(() => {
        this.store.commit(matomoMutations.resetActionsBeforeProjectClicked);
        this.$notify({
          text: 'Actions count resetted.',
          type: 'info',
        });
      }, 4000);
    },
  },

});
</script>
