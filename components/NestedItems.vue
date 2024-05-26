<script setup>
  import NestedItems from "~/components/NestedItems.vue";

  const props = defineProps({
    item: Object,
    default: {},
  });
  const emit = defineEmits(["openInfo"]);

  const isOpen = ref(false);

  const toggleOpen = () => {
    isOpen.value = !isOpen.value;
  };

  const openInfo = (id) => {
    emit("openInfo", id);
  };
</script>

<template>
  <li class="flex flex-col">
    <div class="flex items-center justify-between py-2 px-5 border-b">
      <div class="flex items-center space-x-3">
        <button
          @click="toggleOpen"
          class="text-gray-400 hover:text-gray-600"
        >
          <svg
            v-if="item.children.length > 0"
            :class="{ 'rotate-90': isOpen }"
            class="transition-transform h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
        <span class="font-medium text-gray-700">{{ item.title }}</span>
      </div>
      <button
        @click="openInfo(item.id)"
        class="text-gray-400 hover:text-gray-600"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="h-4 w-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
          />
        </svg>
      </button>
    </div>
    <div
      v-if="isOpen"
      class="pl-4"
    >
      <nested-items
        v-for="childItem in item.children"
        :key="childItem.id"
        :item="childItem"
        @openInfo="openInfo"
      />
    </div>
  </li>
</template>

<style scoped>
  .rotate-90 {
    transform: rotate(90deg);
  }
</style>
