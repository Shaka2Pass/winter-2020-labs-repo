import renderLineItem from '../src/render-line-item.js';
import { findById } from '../common/utils.js';
import crystals from '../data/crystals.js';

const test = QUnit.test;

QUnit.module('Render Line Items');

test('does it render a line item?', assert => {
  // arrange

  const crystal = {
    id: 'amethyst',
    quantity: 3
  }

  const expected = `<tr><td>3</td><td>Amethyst</td><td>$5.00</td><td>$15.00</td></tr>`;

  // act
  const result = renderLineItem(crystal, findById(crystals, crystal.id)).outerHTML;
  console.log(result);

  // assert
  assert.equal(result, expected);
});