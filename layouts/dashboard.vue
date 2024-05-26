<script setup lang="ts">
  import Sidebar from "~/components/Sidebar.vue";
  useHead({
    meta: [{ name: "Dashboard" }],
  });
</script>

<template>
  <div
    id="dashboard-layout"
    class="dashboard flex flex-col min-h-screen"
  >
    <navbar />
    <div class="flex-grow relative">
      <sidebar />
      <div class="p-4 absolute inset-0 overflow-auto">
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
    background-attachment: fixed;
  }

  .content {
    min-height: 100vh;
  }
</style>
