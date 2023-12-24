const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  depth = 1

  calculateDepth(arr) {
    if (!arr.some(a => Array.isArray(a))) {
      let finalDepth = this.depth
      this.depth = 1
      return finalDepth
} else {
  arr = arr.flat()
  this.depth = +this.depth + 1
  return this.calculateDepth(arr)
}
  }
}

module.exports = {
  DepthCalculator
};
