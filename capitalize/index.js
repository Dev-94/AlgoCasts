// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    // creates an empty array to store each word in str
    let words = []
    // splits str into words by finding spaces
    for (let word of str.split(' ')) {
        // capitalizes first letter of each word
        // takes rest of each word
        // pushed them into words array
        words.push(word[0].toUpperCase() + word.slice(1))


    }
    // joins all words arrays with capitalized letters
    return words.join(' ')

    // loop through str
    // slice each letter and if char is [0] or after ' '
    // .toUpperCase() charAt(0)
    // if charAt(i) === ' ' .toUpperCase()

    // str.slice(0, str.length)

    // str.charAt(0).toUpperCase()


    // for (let i = 0; i <= str.length; i++) {
    //     if (str.charAt(i) === ' ')
    //         str.charAt(i + [1]).toUpperCase()

    // }

    // uppercases first letter, returns first letter
    // let first = str.slice(0, 1).toUpperCase()
    // console.log(first)

    // // iterates through string
    // for (let i = 0; i <= str.length; i++) {
    //     // finds spaces
    //     if (str.charAt(i) === ' ') {
    //         // upper cases letters after spaces
    //         let newStr = str.slice(i + 1, i + 2).toUpperCase()
    //         console.log(newStr)
    //     }
    // }
    // console.log(  str.slice(1).toUpperCase())
}

module.exports = capitalize;
