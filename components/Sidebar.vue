<script setup>
  import { useSidebarStore } from "~/stores/sidebar";

  const sidebarStore = useSidebarStore();
</script>
<template>
  <div
    class="relative top-[-76px] w-1/3 bg-white border transform transition duration-150 ease-in-out z-10"
    :class="{
      'translate-x-0 ': sidebarStore.status === 'active',
      '-translate-x-full': sidebarStore.status === 'inactive',
    }"
  >
    <div class="flex items-center p-2 bg-gray-200 h-[75px]">
      <div class="mr-auto text-2xl">Sidebar items</div>
      <button @click="sidebarStore.status = 'inactive'">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-12 ml-auto"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </button>
    </div>

    <div>
      {{ sidebarStore.items }}
    </div>
  </div>
</template>

<style scoped></style>
