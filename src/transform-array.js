const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {

  if (!Array.isArray(arr)) {
    throw new Error("It's not an array");
  }

  const controlers = [
    '--discard-next',
    '--discard-prev',
    '--double-next',
    '--double-prev'
  ];

  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case controlers[0]:
        i++;
        break;

      case controlers[1]:
        if (arr[i - 2] !== controlers[0]) {
          newArr.pop();
        }
        break;

      case controlers[2]:
        if (arr[i + 1] !== undefined) {
          newArr.push(arr[i + 1]);
        }
        break;

      case controlers[3]:
        if (arr[i - 2] !== controlers[0] && arr[i - 1] !== undefined) {
          newArr.push(arr[i - 1]);
        }
        break;
      default:
        newArr.push(arr[i]);
    }
  }

  return newArr;

};
