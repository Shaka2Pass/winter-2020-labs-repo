function getRandomThrow() {
  const randomNumber = Math.floor(Math.random() * 3);
  return getThrowFromNumber(randomNumber);
}

function getThrowFromNumber(number) {
  if(number === 0) 'rock';
  if(number === 1) 'paper';
  if(number === 2) 'scissors';
}

function checkResult(player, computer) {
  if(computer === player) return 'draw';
  if(computer === 'scissors' && player === 'rock') return 'win';
  else if(computer === 'paper' && player === 'scissors') return 'win';
  else if(computer === 'rock' && player === 'paper') return 'win';
  else return 'lose';
}

export {
  getRandomThrow,
  getThrowFromNumber,
  checkResult
}