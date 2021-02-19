export const deleteKeg = id => ({
  type: 'DELETE_KEG',
  id
});
export const toggleForm = () => ({
  type: 'TOGGLE_FORM'
});
export const addKeg = (keg) => {
  const { name, brand, price, ABV, pints, stock, id } = keg;
  return {
    type: 'ADD_KEG',
    name,
    brand,
    price,
    ABV,
    pints,
    stock,
    id
  }
}