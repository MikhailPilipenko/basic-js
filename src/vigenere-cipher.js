const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(direct) {
    if (direct === undefined || direct === true) {
      this.direct = true;
    } else {
      this.direct = false;
    }
  }

  encrypt(message, key) {
    if (arguments.length < 2) {
      throw new Error('Arguments undefined');
    }
    // [...str] -- for..of -- Array.from
    //charCode A = 65, charCode Z = 90, 26 chars
    //String.fromCharCode()
    message = [...message.toUpperCase()];
    key = [...key.toUpperCase()];
    let arr = [];

    for (let i = 0, j = 0; i < message.length; i++) {
      if (message[i].charCodeAt() < 65 || message[i].charCodeAt() > 90) {
        arr.push(message[i]);
      } else {
        arr.push(String.fromCharCode(((message[i].charCodeAt() - 65 + key[j++ % key.length].charCodeAt() - 65) % 26) + 65));
      }
    }
    return this.direct ? arr.join('') : arr.reverse().join('');
  }

  decrypt(encryptedMessage, key) {
    if (arguments.length < 2) {
      throw new Error('Arguments undefined');
    }

    encryptedMessage = [...encryptedMessage.toUpperCase()];
    key = [...key.toUpperCase()];
    let arr = [];

    for (let i = 0, j = 0; i < encryptedMessage.length; i++) {
      if (encryptedMessage[i].charCodeAt() < 65 || encryptedMessage[i].charCodeAt() > 90) {
        arr.push(encryptedMessage[i]);
      } else {
        arr.push(String.fromCharCode((((encryptedMessage[i].charCodeAt() - 65 - (key[j++ % key.length].charCodeAt() - 65)) + 26) % 26) + 65));
      }
    }
    return this.direct ? arr.join('') : arr.reverse().join('');
  }

}

module.exports = VigenereCipheringMachine;
