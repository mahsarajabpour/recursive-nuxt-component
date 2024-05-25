<script setup lang="ts">
  useHead({
    meta: [{ name: "Dashboard" }],
  });
</script>

<template>
  <div id="dashboard-layout">
    <slot class="content" />
  </div>
</template>

<style scoped></style>
