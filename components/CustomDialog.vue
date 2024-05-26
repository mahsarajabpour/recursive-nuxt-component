<script setup lang="ts">
  const props = defineProps({
    dialog: {
      type: Boolean,
      default: false,
    },
  });
  const emit = defineEmits(["update:dialog"]);
</script>

<template>
  <div
    v-if="dialog"
    class="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-40"
  >
    <div class="bg-white p-4 rounded-lg shadow-xl">
      <h2 class="text-lg font-bold">Modal Title</h2>
      <p class="mt-2">Your modal content goes here.</p>
      <button
        class="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        @click="$emit('update:dialog', false)"
      >
        Close
      </button>
    </div>
  </div>
</template>

<style scoped></style>
