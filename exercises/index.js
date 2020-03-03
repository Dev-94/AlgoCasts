// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz


// for loop to check all numbers up to n
// if statemets to checks for multiples, print string continegently

function fizzBuzz(n) {

    for (let i = 1; i <= n; i++)

        if (i % 15 === 0) {
            console.log('fizzbuzz')
        } else if (i % 3 === 0) {
            console.log('fizz')
        } else if (i % 5 === 0) {
            console.log('buzz')
        } else {
            console.log(i)
        }


}

console.log(fizzBuzz(5))



















// function fizzBuzz(n) {
//     // loop and print out i
//     // increment by 1 until it hits n
//     // start at 1
//     // until it is less than or equal to n
//     // console.log each line
//     for (let i = 1; i <= n; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log("fizzbuzz")
//         } else if (i % 3 === 0) {
//             console.log("fizz")
//         } else if (i % 5 === 0) {
//             console.log("buzz")
//         } else console.log(i)
//     }
// }

module.exports = fizzBuzz;
