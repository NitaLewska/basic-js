const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!members || !Array.isArray(members)) {
    return false
  }
  members =  members.filter(a => typeof a === 'string' && a.length > 0)
  let teamName = []
  members.map(a => teamName.push(a.trim().charAt(0)))
  teamName = teamName.map(a => a.toUpperCase()).sort()
  return teamName.join('')
}

module.exports = {
  createDreamTeam
};
