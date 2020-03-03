// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) { }

// declare a string
// loop through letters of str
// add each letter to declared string
// return declared string after loop completes
let result = ''
for (let char of str) {
    result = char + result
} return result


// split str, reverse str, join str
// return str.split('').reverse().join('')

module.exports = reverse;
