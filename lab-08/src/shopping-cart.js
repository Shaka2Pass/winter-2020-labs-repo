import crystals from '../data/crystals.js';
import renderLineItem from './render-line-item.js';
import { findById, calcOrderTotal } from '../common/utils.js';


const root = document.getElementById('root');
const total = document.getElementById('total');
const placeOrderButton = document.getElementById('place-order-button');

const json = localStorage.getItem('CART');
let cart;
if(json){
  cart = JSON.parse(json);
} else {
  cart = [];
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
    localStorage.removeItem('CART');
    alert('order placed:\n' + JSON.stringify(cart, true, 2));
    window.location = '../';
  });
}