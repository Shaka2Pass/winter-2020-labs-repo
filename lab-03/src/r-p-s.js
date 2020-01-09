import { getRandomThrow, checkResult } from './get-random-throw.js';

const resultDisplay = document.getElementById('result-display');
const userInput = document.querySelector('input:checked');
const userChoice = userInput.value;
const button = document.getElementById('submit-button');

