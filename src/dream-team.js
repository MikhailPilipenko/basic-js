const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let newArrMembers = [];

  if (!Array.isArray(members)) {
    return false;
    //Array.isArray()
  }

  members.forEach(element => {
    if (typeof element === 'string') {
      newArrMembers.push(element.trim().charAt(0).toUpperCase());
      //String.prototype.trim()
      //String.prototype.charAt()
      //String.prototype.toUpperCase()
    }
  });

  return newArrMembers.sort().join('');
  //Array.prototype.sort()
  //Array.prototype.join()
};
