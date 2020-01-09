export default function compareNumbers(userGuess, correctNumber) {
  if (!Number.isInteger(userGuess)) throw new Error('Please Enter a Number!');
  if (userGuess === correctNumber) {
    return 0;
  } else if (userGuess < correctNumber) {
    return -1;
  } else if (userGuess > correctNumber) {
    return 1;
  }
}