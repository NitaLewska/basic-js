const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let firstString = s1.split('')
  let secondString = s2.split('')
  let common = 0
  firstString = firstString.map((a, i) => {
    if (secondString.indexOf(a) != -1) {
      secondString[secondString.indexOf(a)] = ""
      secondString.filter(a => a !== '')
      firstString[i] = ''
      firstString.filter(a => a !== '')
      common++
    }
  })

  secondString = secondString.map((a, i) => {
    if (firstString.indexOf(a) != -1) {
      firstString[firstString.indexOf(a)] = ""
      firstString.filter(a => a !== '')
      secondString[i] = ''
      secondString.filter(a => a !== '')
      common++
    }
  })
  return common
}

module.exports = {
  getCommonCharacterCount
};
