<script setup>
  import { useSidebarStore } from "~/stores/sidebar";

  const sidebarStore = useSidebarStore();
</script>
<template>
  <div v-if="sidebarStore.status === 'active'">
    {{ sidebarStore.items }}
  </div>
</template>

<style scoped></style>
