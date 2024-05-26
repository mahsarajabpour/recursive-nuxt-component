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
      <div class="mr-auto text-2xl text-gray-700">Sidebar items</div>
      <button
        @click="sidebarStore.status = 'inactive'"
        class="bg-gray-200"
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
      {{ sidebarStore.items }}
    </div>
  </div>
</template>

<style scoped></style>
