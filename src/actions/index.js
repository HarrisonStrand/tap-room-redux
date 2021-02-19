import * as c from './ActionTypes';

export const deleteItem = id => ({
  type: c.DELETE_ITEM,
  id
});
export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});
export const addItem = (item) => {
  const { category, name, brand, price, ABV, amount, stock, size, id } = item;
  return {
    type: c.ADD_ITEM,
    category,
    name,
    brand,
    price,
    ABV,
    amount,
    stock,
    size,
    id
  }
}