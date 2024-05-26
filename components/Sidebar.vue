<script setup>
  import { useSidebarStore } from "~/stores/sidebar";

  const sidebarStore = useSidebarStore();

  const openChild = (item_id) => {
    sidebarStore.fillOpenItemData(item_id);
  };
</script>
<template>
  <div
    class="relative top-[-76px] w-1/3 bg-white border transform transition duration-150 ease-in-out z-10 shadow-lg ring-black ring-opacity-5 focus:outline-none"
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
        class="list-none hover:list-disc"
      >
        <li class="flex items-center justify-between border-b py-2 px-5">
          {{ item.id }}
          <button
            v-if="item.children.length > 0"
            class="transition ease-in-out delay-150 hover:scale-110 duration-300"
            @click="openChild(item.id)"
          >
            <svg
              class="-mr-1 h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
          <div
            v-if="
              sidebarStore.openItemData[item.id] &&
              sidebarStore.openItemData[item.id].isOpen
            "
            class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabindex="-1"
          >
            {{ item.id }}
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>
