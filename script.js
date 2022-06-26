// prompt >dialog box
// 8-128 chars
// prompt for uppercase, lowercase, numeric, and/or special characters

const upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const specialChars = ["!", "#", "$", "%", "&", "*", "_", "=", "~", "?"]

console.log(upperCase)
console.log(lowerCase)
console.log(numbers)
console.log(specialChars)

var length = prompt ("Please select a password length between 8 and 128 characters.")

var isUpperCase = confirm("Include uppercase characters?")

var isLowerCase = confirm ("Include lowercase characters?")

var isNumbers = confirm ("Include numbers?")

var isSpecialChars = confirm("Include special characters?")

// need maybe two functions: 
    // one for generating random number
    // one for handling answers from user