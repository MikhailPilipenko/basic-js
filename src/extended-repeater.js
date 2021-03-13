const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {

  str = String(str);

  let repeatTimes = (options.repeatTimes === undefined ? 0 : options.repeatTimes);
  let separator = (options.separator === undefined ? '+' : options.separator);
  let addition = (options.addition === undefined ? '' : String(options.addition));
  let additionRepeatTimes = (options.additionRepeatTimes === undefined ? 0 : options.additionRepeatTimes);
  let additionSeparator = (options.additionSeparator === undefined ? '|' : options.additionSeparator);

  let result = '';

  let repeatStr = function (str) {
    if (!additionRepeatTimes) {
      return str + addition;
    }

    let addResult = '';

    for (let i = 0; i < additionRepeatTimes; i++) {
      addResult += addition + ((i == (additionRepeatTimes - 1)) ? '' : additionSeparator);
    }

    return str + addResult;
  };

  if (!repeatTimes) {
    result = repeatStr(str);
  }

  for (let i = 0; i < repeatTimes; i++) {
    result += repeatStr(str) + ((i == (repeatTimes - 1)) ? '' : separator);
  }

  return result;
};
