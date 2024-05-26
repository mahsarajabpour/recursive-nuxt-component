import { defineStore } from "pinia";

export const useSidebarStore = defineStore("sidebar", {
  state: () => {
    return {
      status: "inactive",
      items: [],
      openItemData: [],
    };
  },
  actions: {
    changeStatus() {
      this.status = this.status === "active" ? "inactive" : "active";
    },

    saveSidebarItems(payload) {
      this.items = [];
      this.items = payload;
    },

    addSpecificIndexDataToOpenItemData(item_id, data) {
      this.openItemData.forEach((item) => {
        item.isOpen = false;
      });
      this.openItemData[item_id] = { data, isOpen: true };
    },

    fillOpenItemData(item_id) {
      const data = this.items.filter(
        (sidebarItem) => sidebarItem.id === item_id
      );
      this.addSpecificIndexDataToOpenItemData(item_id, data);
    },
  },
});
