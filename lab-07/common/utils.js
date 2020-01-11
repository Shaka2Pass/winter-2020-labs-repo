import toUSD from '../src/format.js';
import crystals from '../data/crystals.js';

const findById = (arr, id) => {
  if(arr.find(element => element.id === id)) return arr.find(element => element.id === id);
  return null;
};

const calcLineItem = (quantity, amount) => {
  return (quantity * amount).toFixed(2);
};

const calcOrderTotal = (cart, products) => {
  let orderTotal = 0;
  for(let i = 0; i < cart.length; i++) {
    orderTotal += parseInt(calcLineItem(cart[i].quantity, findById(crystals, cart[i].id).price));
  }
  return toUSD(orderTotal);
}
export { findById, calcLineItem, calcOrderTotal };