const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(reverse) {
    this.alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
    this.reverse = reverse === false ? !reverse : false
  }

  encrypt(input, key) {
    if (!input || !key) {throw new Error('Incorrect arguments!')} else {
      input = input.toLowerCase().split('')
      key = key.toLowerCase().  split('')
      let output = ''
      let i = 0
      input.map((a) => {
        if(this.alphabet.indexOf(a) != -1) {
      output += this.alphabet[(this.alphabet.indexOf(a) + this.alphabet.indexOf(key[i % key.length])) % this.alphabet.length]
          i++
        } else {
          output += a
        }

      })
      if (this.reverse) {
        output = output.split('').reverse().join('')
      }
          return output.toUpperCase()
    }
  }

  decrypt(input, key) {
    if (!input || !key) {throw new Error('Incorrect arguments!')} else {
      input = input.toLowerCase().split('')
      key = key.toLowerCase().split('')
      let output = ''
      let i = 0
      input.map((a) => {
        if(this.alphabet.indexOf(a) != -1) {
      output += this.alphabet[(this.alphabet.length + this.alphabet.indexOf(a) - this.alphabet.indexOf(key[i % key.length])) % this.alphabet.length]
          i++
        } else {
          output += a
        }

      })
          if (this.reverse) {
            output = output.split('').reverse().join('')
          }
          return output.toUpperCase()
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};
