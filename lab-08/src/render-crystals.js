import crystals from '../data/crystals.js';
import toUSD from '../src/format.js';
import { findById } from '../common/utils.js';

function renderCrystals(crystal) {

  const li = document.createElement('li');
  
  const h2 = document.createElement('h2');
  h2.textContent = crystal.name;
  li.appendChild(h2);

  const h3 = document.createElement('h3');
  h3.textContent = crystal.category;
  li.appendChild(h3);
  
  const img = document.createElement('img');
  img.src = crystal.image;
  img.alt = crystal.name + ' image';
  li.appendChild(img);

  const h4 = document.createElement('h4');
  h4.textContent = crystal.description;
  li.appendChild(h4);
  
  const p = document.createElement('p');
  p.textContent = toUSD(crystal.price);
  p.id = 'price';
  li.appendChild(p);

  const button = document.createElement('button');
  button.textContent = 'Add';
  button.value = crystal.id;
  button.addEventListener('click', () => {
    let json = localStorage.getItem('CART');
    let cart;
    if(json) {
      cart = JSON.parse(json);
    } else {
      cart = [];
    }

    let lineItem = findById(cart, crystal.id);

    if(!lineItem) {
      lineItem = {
        id: crystal.id,
        quantity: 1
      };

      cart.push(lineItem);
    } else {
      lineItem.quantity++;
    }

    json = JSON.stringify(cart);
    localStorage.setItem('CART', json);

    alert('1' + crystal.name + ' added to cart');
  });
  
  li.appendChild(button);

  return li;
}

export default renderCrystals;