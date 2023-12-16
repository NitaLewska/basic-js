const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let matrixReworked = JSON.parse(JSON.stringify(matrix))
  for (let i = 0; i < matrix.length; i++) {
    for (j = 0; j < matrix[0].length; j++) {
      let counter = 0
      for (let k = -1; k < 2; k++) {
        for (let f = -1; f < 2; f++) {
          if (i + k > -1 && j + f > -1 && i + k < matrix.length && j + f < matrix.length) {
            if (matrix[i + k][j + f] == true) {
              counter = counter + 1
            }
          }
        }
      }
      if (matrix[i][j] == true) {
        counter = counter - 1
      }
      matrixReworked[i][j] = counter
    }
  }
  return matrixReworked
}

module.exports = {
  minesweeper
};
