import isYes from './is-yes.js';

const quizButton = document.getElementById('quizbutton');
const total = document.getElementById('total');

quizButton.addEventListener('click', () => {
  console.log('button works');
  const name = prompt('What\'s your name?');
  const confirmation = confirm(`${name}, are you sure you want to take the quiz?`)
  if(confirmation === false) return;
  const answer1 = prompt('Question 1 is yes');
  const answer2 = prompt('Question 2 is no');
  const answer3 = prompt('Question 3 is yes');
  let count = 0;
  if(isYes(answer1)) count += 1;
  if(!isYes(answer2)) count += 1;
  if(isYes(answer3)) count += 1;
  total.textContent=`${name}, You got ${count} correct`;
})