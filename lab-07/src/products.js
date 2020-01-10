import crystals from '../data/crystals.js';
import renderCrystals from '../src/render-crystals.js';

const ul = document.getElementById('root');

for(let i = 0; i < crystals.length; i++) {
  const li = renderCrystals(crystals[i]);
  ul.appendChild(li);
}