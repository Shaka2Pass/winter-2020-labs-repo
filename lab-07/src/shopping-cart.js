import cart from '../data/cartData.js';
import crystals from '../data/crystals.js';
import renderLineItem from './render-line-item.js';
import { findById } from '../common/utils.js';

const root = document.getElementById('root');

for(let i = 0; i < cart.length; i++) {
  const element = renderLineItem(cart[i], findById(crystals, cart[i].id));
  root.appendChild(element);
}