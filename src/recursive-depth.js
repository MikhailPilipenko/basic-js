const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {

    if (!Array.isArray(arr)) {
      return 1;
    }

    let count = 1;

    for (let key of arr) {
      if (Array.isArray(key)) {
        let depth = this.calculateDepth(key) + 1;

        if (depth > count) {
          count = depth;
        }
      }
    }

    return count;
  }
};