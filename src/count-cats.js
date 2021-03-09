const CustomError = require("../extensions/custom-error");

module.exports = function countCats( matrix ) {
  let count = 0;
  
  for (let i = 0; i < matrix.length; i++) {
	matrix[i].forEach( (cats) => {
		if (cats === '^^') count++;
	});
  }
  
  return count;
};
