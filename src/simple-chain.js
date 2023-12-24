const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  currentChain: ['('],
  getLength() {
  },
  addLink(value = "  ") {
    this.currentChain.push(value)
  },
  removeLink(position) {
    if(!position) {
      throw new Error("You can't remove incorrect link!")
    }
    this.currentChain.push(this.currentChain.slice(0,position + 2).concat(this.currentChain.slice(position + 3)))
  },
  reverseChain() {
    this.currentChain = this.currentChain.reverse()
  },
  finishChain() {
    this.currentChain.push(')')
    return this.currentChain.join(' )~~( ')
  }
};

module.exports = {
  chainMaker
};
