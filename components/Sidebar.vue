<script setup>
  import { useSidebarStore } from "~/stores/sidebar";
  import useHelpers from "~/composables/useHelpers.js";
  import CustomDialog from "~/components/CustomDialog.vue";
  import NestedItems from "~/components/NestedItems.vue";

  const sidebarStore = useSidebarStore();
  const { findItemById } = useHelpers();
  const emit = defineEmits(["update:dialog", "openInfo"]);

  const infoItems = ref();
  const dialog = ref(false);

  const openInfo = (item_id, item) => {
    dialog.value = true;
    infoItems.value = findItemById(sidebarStore.items, item_id);
  };
</script>
<template>
  <div
    class="relative top-[-76px] lg:w-1/3 md:w-1/2 w-full bg-white border transform transition duration-150 ease-in-out z-10 shadow-lg ring-black ring-opacity-5 focus:outline-none"
    :class="{
      'translate-x-0 ': sidebarStore.status === 'active',
      '-translate-x-full': sidebarStore.status === 'inactive',
    }"
  >
    <div class="flex items-center p-2 bg-gray-200 h-[75px]">
      <div class="mr-auto text-2xl text-gray-700">Sidebar items</div>
      <button
        class="transition ease-in-out delay-150 hover:scale-110 duration-300"
        @click="sidebarStore.status = 'inactive'"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          color="#374151"
          class="size-8"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>

    <div>
      <ul
        v-for="item in sidebarStore.items"
        :key="item.id"
        class="list-none hover:list-disc group-card-hover:block -right-12"
      >
        <nested-items
          :item="item"
          @openInfo="openInfo"
        />
      </ul>
    </div>
  </div>

  <!--  dialog-->
  <custom-dialog
    :dialog
    :items="infoItems"
    @update:dialog="(val) => (dialog = val)"
  />
</template>

<style scoped></style>
