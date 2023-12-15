const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  console.log('!!!!!', sampleActivity, - Math.floor(Math.log2(+sampleActivity / MODERN_ACTIVITY) * HALF_LIFE_PERIOD))
  if (+sampleActivity > MODERN_ACTIVITY || +sampleActivity <= 0 || typeof sampleActivity != 'string') {
    return false
  }
  let output = - Math.floor(Math.log2(+sampleActivity / MODERN_ACTIVITY) * HALF_LIFE_PERIOD)
  return output > 0 ? output : false
}

module.exports = {
  dateSample
};
