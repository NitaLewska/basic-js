const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let options = []
  let input = ('' + n).split('')
  for (let i=0; i<input.length; i++) {
    options.push(+input.slice(0,i).concat(input.slice(i + 1)).join(''))
  }
  options = options.sort((a,b) => b - a)
  return options[0]
}

module.exports = {
  deleteDigit
};
