import compareNumbers from '../lab-02/src/compareNumbers.js'

const userInput = document.getElementById('enter-guess');
const submitButton = document.getElementById('submit-guess');
const tempContainer = document.getElementById('temp-container');
const resultContainer = document.getElementById('result-container');
const tempDisplay = document.getElementById('temp-display');
const resultDisplay = document.getElementById('result-display');
const triesDisplay = document.getElementById('tries-display')

let tries = 4;

let correctNumber = 7;

submitButton.addEventListener('click', () => {
  tries--;
  triesDisplay.textContent = tries;
  if(compareNumbers(userInput.value, correctNumber) === -1) {
    tempDisplay.textContent = 'too low'
    tempContainer.classList.remove('hidden')
  }
  if(compareNumbers(userInput.value, correctNumber) === 1) {
    tempDisplay.textContent = 'too high'
    tempContainer.classList.remove('hidden')
  }
  if(compareNumbers(userInput.value, correctNumber) === 0) {
    tempDisplay.textContent = 'correct'
    tempContainer.classList.remove('hidden')
    resultContainer.classList.remove('hidden')
    submitButton.disabled = true;
  }
  if(tries === 0 && compareNumbers(userInput.value, correctNumber) !== 0) {
    submitButton.disabled = true;
    resultContainer.classList.remove('hidden')
    resultDisplay.textContent = 'lost';
  }
});