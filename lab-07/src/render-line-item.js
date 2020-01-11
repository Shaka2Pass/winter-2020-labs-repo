import { calcLineItem } from '../common/utils.js';
import toUSD from '../../lab-06/src/format.js';

export default function renderLineItem(item, crystal) {

  const tr = document.createElement('tr');

  const quantity = document.createElement('td');
  quantity.textContent = item.quantity;
  tr.appendChild(quantity);

  const name = document.createElement('td');
  name.textContent = crystal.name;
  tr.appendChild(name);

  const price = document.createElement('td');
  price.textContent = toUSD(crystal.price);
  tr.appendChild(price);

  const total = document.createElement('td');
  const getLineTotal = parseInt(calcLineItem(item.quantity, crystal.price));
  total.textContent = toUSD(getLineTotal);
  tr.appendChild(total);

  return tr;
}