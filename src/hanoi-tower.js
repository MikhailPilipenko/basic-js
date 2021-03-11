const CustomError = require("../extensions/custom-error");

const SECONDS_PER_HOUR = 3600;

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  //https://ru.wikipedia.org/wiki/%D0%A5%D0%B0%D0%BD%D0%BE%D0%B9%D1%81%D0%BA%D0%B0%D1%8F_%D0%B1%D0%B0%D1%88%D0%BD%D1%8F
  let turns = Math.pow(2, disksNumber) - 1;

  let seconds = Math.floor(turns / turnsSpeed * SECONDS_PER_HOUR);

  let turnsSeconds = {};
  turnsSeconds.turns = turns;
  turnsSeconds.seconds = seconds;
  //let turnsSeconds = {turns, seconds};

  return turnsSeconds;
};
