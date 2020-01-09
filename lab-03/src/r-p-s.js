import { getRandomThrow, checkResult } from './get-random-throw.js';

const resultDisplay = document.getElementById('result-display');
const button = document.getElementById('submit-button');
const resultImage = document.getElementById('result-image');
const winsDisplay = document.getElementById('wins');
const lossesDisplay = document.getElementById('losses');
const drawsDisplay = document.getElementById('draws');

let wins = 0;
let losses = 0;
let draws = 0;

button.addEventListener('click', () => {
  const userInput = document.querySelector('input:checked');
  const userChoice = userInput.value;
  const computerChoice = getRandomThrow();
  const result = checkResult(userChoice, computerChoice);

  if(computerChoice === 'rock') resultImage.src="https://www.wickedhorror.com/wp-content/uploads/2019/08/The-Rock-864x467.jpg";
  if(computerChoice === 'scissors') resultImage.src="https://www.wweek.com/resizer/86tt-U3ytIrtb7bBYXAIg7XWz7A=/1200x0/filters:quality(100)/s3.amazonaws.com/arc-wordpress-client-uploads/wweek/wp-content/uploads/2019/08/30145212/Nicolas-Cage.jpg";
  if(computerChoice === 'paper') resultImage.src="https://www.wickedhorror.com/wp-content/uploads/2019/08/The-Rock-864x467.jpg"
  
  if(result === 'win') {
    wins++;
    winsDisplay.textContent = wins;
    resultDisplay.classList.remove('hidden');
    resultDisplay.textContent = 'You win!';
  } else if(result === 'loss') {
    losses++;
    lossesDisplay.textContent = losses;
    resultDisplay.classList.remove('hidden');
    resultDisplay.textContent = 'You lose!';
  } else {
    draws++;
    drawsDisplay.textContent = draws;
    resultDisplay.classList.remove('hidden');
    resultDisplay.textContent = 'Draw!';
  }
})

