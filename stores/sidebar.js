import { defineStore } from "pinia";

export const useSidebarStore = defineStore("sidebar", {
  state: () => {
    return {
      status: false,
    };
  },
  actions: {
    changeStatus() {
      this.status = !this.status;
    },
  },
});
