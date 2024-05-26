export default function useHelpers() {
  function findItemById(items, id) {
    for (const item of items) {
      if (item.id === id.toString()) {
        // Ensure the comparison is with a string
        return item;
      }
      if (item.children.length) {
        // Check if children array is not empty
        const found = findItemById(item.children, id);
        if (found) {
          return found;
        }
      }
    }
    return null; // Return null if the item is not found
  }
  return {
    findItemById,
  };
}
