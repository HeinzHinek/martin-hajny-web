const SELECT_ITEM = 'menu/SELECT_ITEM';
const selectItem = itemName => ({
  type: SELECT_ITEM,
  payload: itemName,
});

export {
  selectItem, SELECT_ITEM,
};
