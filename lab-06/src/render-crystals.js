import crystals from '../data/crystals.js';

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
  h4.textContent = crystal.price;
  li.appendChild(h4);

  const p = document.createElement('p');
  p.textContent = crystal.description;
  li.appendChild(p);

  const button = document.createElement('button');
  li.appendChild(button);

}

export default renderCrystals;