import compareNumbers from '../src/compareNumbers.js';
const test = QUnit.test;

QUnit.module('Testing if numbers compare');

test('test numbers are identical', assert => {
  const userGuess = 5;
  const expected = 0;

  const result = compareNumbers(userGuess, 5);

  assert.equal(result, expected);
});

test('test numbers are lower', assert => {
  const userGuess = 5;
  const expected = -1;

  const result = compareNumbers(userGuess, 6);

  assert.equal(result, expected);
});

test('test numbers are higher', assert => {
  const userGuess = 5;
  const expected = 1;

  const result = compareNumbers(userGuess, 4);

  assert.equal(result, expected);
});

test('test valid input', assert => {
  const userGuess = 'potato';
  assert.throws(compareNumbers(userGuess, 9));
});