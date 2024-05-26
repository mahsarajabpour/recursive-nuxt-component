<script setup lang="ts">
  import Sidebar from "~/components/Sidebar.vue";
  useHead({
    meta: [{ name: "Dashboard" }],
  });
</script>

<template>
  <div
    id="dashboard-layout"
    class="dashboard"
  >
    <navbar />
    <div class="relative">
      <sidebar />
      <div class="p-4 h-full absolute inset-0">
        <slot class="content" />
      </div>
    </div>
  </div>
</template>

<style scoped>
  .dashboard {
    background-image: url("assets/images/background-image.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
  }
</style>
