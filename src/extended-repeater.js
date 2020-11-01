  
const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, { repeatTimes = 1, separator = '+', addition = '', additionRepeatTimes = 1, additionSeparator = '|' }) {

  let addStr = new Array(additionRepeatTimes).fill(`${addition}`).join(additionSeparator);

  return new Array(repeatTimes).fill(`${str}${addStr}`).join(separator);
};
