const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let input = str.split('')
  let output = []
  let counter = 1
  for (let i = 1; i < input.length; i++) {
    if (input[i] === input[i - 1]) {
      counter++
    } else {
      output.push(counter, input[i - 1])
      counter = 1
    }
    if (i === input.length - 1) {
      if (input[i] === input[i - 1]) {
        output.push(counter, input[i - 1])
      } else {
        output.push(counter, input[i])
      }
    }
  }
  console.log(str, output)
  return output.filter(a => a !== 1).join('')
}

module.exports = {
  encodeLine
};
