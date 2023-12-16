const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, args) {
  let defaults = {repeatTimes: 1, separator: '+', addition: '', additionRepeatTimes: 1, additionSeparator: '|'};
  let options = {...defaults, ...args}
  let addition = []
  for (let i = 0; i<options.additionRepeatTimes; i++) {
    addition.push("" + options.addition)
  }
  addition = addition.join(options.additionSeparator)
  let output = []
  for (let i = 0; i<options.repeatTimes; i++) {
    output.push("" + str + addition)
  }
  return output.join(options.separator)
}

module.exports = {
  repeater
};
