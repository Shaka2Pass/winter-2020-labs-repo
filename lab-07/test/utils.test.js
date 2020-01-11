import { findById, calcLineItem, calcOrderTotal } from '../common/utils.js';
import cart from '../data/cartData.js';
import crystals from '../data/crystals.js';

const test = QUnit.test;

QUnit.module('Test utils');

test('does it find by id?', assert => {
  const id = 'amethyst';

  const expected = {
    id: 'amethyst',
    name: 'Amethyst',
    image: 'assets/amethyst.jpg',
    description: 'purple and amazing',
    category: 'quartz',
    price: 5.00,
    cost: 3.00
  }

  const result = findById(crystals, id);

  assert.deepEqual(expected, result);
})

test('it returns null', assert => {
  const id = 'dog';

  const expected = null;

  const result = findById(crystals, id);

  assert.deepEqual(expected, result);
})

test('it multiplies', assert => {
  const price = 5;
  const quantity = 5;

  const expected = 25;

  const result = calcLineItem(price, quantity);

  assert.equal(expected, result);
})

test('it multiplies decimals', assert => {
  const price = 5.25;
  const quantity = 5;

  const expected = 26.25;

  const result = calcLineItem(price, quantity);

  assert.equal(expected, result);
})

test('it calculates order total', assert => {

  const expected = '$26.00'

  const result = calcOrderTotal(cart, crystals);

  assert.equal(expected, result);
})