import cart from '../data/cartData.js';
import crystals from '../data/crystals.js';
import renderLineItem from './render-line-item.js';
import { findById, calcOrderTotal } from '../common/utils.js';


const root = document.getElementById('root');
const total = document.getElementById('total');
const placeOrderButton = document.getElementById('place-order-button');

const json = localstorage.getItem('CART');
let shoppingCart;
if(json){
  shoppingCart = JSON.parse(json);
} else {
  shoppingCart = [];
}

for(let i = 0; i < cart.length; i++) {
  const element = renderLineItem(cart[i], findById(crystals, cart[i].id));
  root.appendChild(element);
}

total.textContent = calcOrderTotal(cart, crystals);

if(cart.length === 0){
  placeOrderButton.disabled = true;
} else {
  placeOrderButton.addEventListener('click', () => {
    localstorage.removeItem('CART');
    alert('order place:\n' + JSON.stringify(cart, true, 2));
    window.location = '../';
  });
}