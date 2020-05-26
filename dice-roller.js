//takes a single parameter from the command line
const nDices = process.argv;

//random whole number function
const getRandomInt = function(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

//rolls that many 6 sided dice
const diceRoll = function(nDices) {
  let Dices = [];
  for (let i = 0; i < nDices; i++) {
    Dices.push(getRandomInt(1, 6));
  }
  return Dices;
};

//logs answer
console.log(`Rolled ${nDices} dice: ${diceRoll(nDices).join(', ')}`);
