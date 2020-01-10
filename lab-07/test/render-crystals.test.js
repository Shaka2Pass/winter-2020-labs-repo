import renderCrystals from '../src/render-crystals.js';

const test = QUnit.test;

QUnit.module('Testing crystal rendering');

test('does crystal render?', assert => {
  // arrange
  const crystal = {
    id: 'amethyst',
    name: 'Amethyst',
    image: 'assets/amethyst.jpg',
    description: 'purple and amazing',
    category: 'quartz',
    price: 5.00,
    cost: 3.00
  }
  const expected = `<li><h2>Amethyst</h2><h3>quartz</h3><img src="assets/amethyst.jpg" alt="Amethyst image"><h4>purple and amazing</h4><p id="price">$5.00</p><button value="amethyst">Add</button></li>`
  // act
  const result = renderCrystals(crystal).outerHTML;
  
  // assert
  assert.equal(expected, result);
});