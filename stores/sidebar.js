import { defineStore } from "pinia";
import useHelpers from "~/composables/useHelpers.js";

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

    addSpecificIndexDataToOpenItemData(item_id) {
      const { findItemById } = useHelpers();
      let findItemData = findItemById(this.items, item_id);

      this.openItemData.forEach((item) => {
        item.isOpen = false;
      });
      this.openItemData[item_id] = { findItemData, isOpen: true };
    },

    fillOpenItemData(item_id) {
      if (this.openItemData[item_id] === undefined) {
        this.addSpecificIndexDataToOpenItemData(item_id);
      } else {
        return this.addSpecificIndexDataToOpenItemData(
          item_id,
          this.openItemData[item_id].data
        );
      }
    },
  },
});
