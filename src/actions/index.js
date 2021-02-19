import * as c from './ActionTypes';

export const deleteKeg = id => ({
  type: c.DELETE_KEG,
  id
});
export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});
export const addKeg = (keg) => {
  const { category, name, brand, price, ABV, pints, stock, id } = keg;
  return {
    type: c.ADD_KEG,
    category,
    name,
    brand,
    price,
    ABV,
    pints,
    stock,
    id
  }
}