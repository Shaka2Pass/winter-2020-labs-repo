import isYes from '../src/is-yes.js';
const test = QUnit.test;

QUnit.module('Testing isYes');

test('Yes is true', assert => {
  // arrange
  const input = 'Yes';
  const expected = true;
  // act

  const result = isYes(input);

  // assert
  assert.equal(result, expected);
});

test('No is false', assert => {
  // arrange
  const input = 'No';
  const expected = false;
  // act

  const result = isYes(input);

  // assert
  assert.equal(result, expected);
});

test('Y is true', assert => {
  // arrange
  const input = 'Y';
  const expected = true;
  // act

  const result = isYes(input);

  // assert
  assert.equal(result, expected);
});

