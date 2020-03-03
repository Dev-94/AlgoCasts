// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {

    // BELOW WORKS
    // creates a string with the first letter uppercase
    let result = str[0].toUpperCase()
    // loops through str
    for (let i = 1; i < str.length; i++) {
        // if char to the left of i is a space, capitalize letter
        if (str[i - 1] === ' ') {
            // add to result string
            result += str[i].toUpperCase()
        }
        // add letter to string if not first letter
        else {
            result += str[i]
        }
    }

    // retrun final string
    return result









    // //  BELOW WORKS
    // // creates an empty array to store each word in str
    // let words = []
    // // splits str into words by finding spaces
    // for (let word of str.split(' ')) {
    //     // capitalizes first letter of each word
    //     // takes rest of each word
    //     // pushed them into words array
    //     words.push(word[0].toUpperCase() + word.slice(1))


    // }
    // // joins all words arrays with capitalized letters
    // return words.join(' ')




}

module.exports = capitalize;
