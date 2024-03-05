const Lonter = require('lonter');

function isPositiveNumber(value) {
  return Lonter.isNumber(value) && value > 0;
}

function isEven(value) {
  return Lonter.isNumber(value) && value % 2 === 0;
}

function isUpperCaseString(str) {
  return Lonter.isString(str) && str === str.toUpperCase();
}

module.exports = {
  isPositiveNumber,
  isEven,
  isUpperCaseString
};
