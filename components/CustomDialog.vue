<script setup lang="ts">
  const props = defineProps({
    dialog: {
      type: Boolean,
      default: false,
    },
    items: {
      type: Object,
      default: {},
    },
  });
  const emit = defineEmits(["update:dialog"]);
</script>

<template>
  <div
    v-if="dialog"
    class="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-40"
  >
    <div class="bg-white rounded-lg shadow-xl">
      <h2 class="px-4 pt-4 pb-2 text-lg font-bold border-b w-full">
        {{ items.title }}
      </h2>
      <div class="p-4">
        <p class="mt-2">{{ items.description }}</p>
        <p class="mt-2">
          <span class="text-gray-500 pr-2">id:</span> {{ items.id }}
        </p>
        <p class="mt-2">
          <span class="text-gray-500 pr-2">slug:</span> {{ items.slug }}
        </p>
        <p class="mt-2">
          <span class="text-gray-500 pr-2">name:</span> {{ items.name }}
        </p>
        <button
          class="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          @click="$emit('update:dialog', false)"
        >
          Close
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
