// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {

    let reversed = n.toString().split('').reverse().join('')
    return parseInt(reversed) * Math.sign(n)


    // let original = n
    // n.toString().split('').reverse().join('')
    // return parseInt(n) * Math.sign(original)


    // possible issues: 0 in the front should be removed; - sign

    // turn to str, split str
    // turn to array and reversex
    // if - is sin the front, += to let negative
    // join array
    // return as number

    // let str = 'n'
    // let negative = ''
    // let arr = str.split('')
    // if (arr[0] === '-') {
    //     negative = '-'
    //     return negative
    // } arr.reverse()
    // if (negative === '-') return arr.push(negative).join('')
    // else return arr.join('')


}

module.exports = reverseInt;
