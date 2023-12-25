const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error ("'arr' parameter must be an instance of the Array!")
  }
  if (arr.length === 0) {
    return []
  }

  let output = []
  arr.map ((a, i, arr) => {
    if (arr[i-1] === '--discard-next') {
      output.push(undefined);
    } else {
      switch (a) {
        case '--double-prev':
          output.push(output.at(-1));
        break;
        case '--double-next':
          output.push(arr[i+1]);
        break;
        case '--discard-prev':
          output.pop();
        break;

        case '--discard-next':
          output.push(undefined);
        break;

        default: output.push(a);
      }
    }
  })
  return output.filter( a => a !== undefined)
}

module.exports = {
  transform
};
