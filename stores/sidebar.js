import { defineStore } from "pinia";

export const useSidebarStore = defineStore("sidebar", {
  state: () => {
    return {
      status: "inactive",
      items: {},
    };
  },
  actions: {
    changeStatus() {
      this.status = this.status === "active" ? "inactive" : "active";
    },

    saveSidebarItems(payload) {
      this.items = {};
      this.items = payload;
    },
  },
});
