const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (value === undefined) {
      this.chain.push(' ');
    } else {
      this.chain.push(String(value));
    }
    return this;
  },
  removeLink(position) {
    if (position <= 0 || position > (this.getLength() - 1) || typeof position !== 'number') {
      this.chain = [];
      throw new Error("Invalid position");
    } else {
      this.chain.splice(position - 1, 1);
    }
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let result = `( ${this.chain.join(' )~~( ')} )`;
    this.chain = [];
    return result;
  }
};

module.exports = chainMaker;
