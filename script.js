// prompt >dialog box
// 8-128 chars
// prompt for uppercase, lowercase, numeric, and/or special characters
var generatePassBtn = document.querySelector("#generate");

const upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const specialChars = ["!", "#", "$", "%", "&", "*", "_", "=", "~", "?"];

console.log(generatePassBtn);
console.log(upperCase);
console.log(lowerCase);
console.log(numbers);
console.log(specialChars);

function passwordGenerator() {
  console.log("inside");
  var length = prompt(
    "Please select a password length between 8 and 128 characters."
  );
  if (length < 8 || length > 128) {
    alert("Please select a password length between 8 and 128 characters.");
    return null;
  } else {
    var isUpperCase = confirm("Include uppercase characters?");
    var isLowerCase = confirm("Include lowercase characters?");
    var isNumbers = confirm("Include numbers?");
    var isSpecialChars = confirm("Include special characters?");
    console.log(isUpperCase)
    console.log(isLowerCase)
    console.log(isNumbers)
    console.log(isSpecialChars)
    
    var passwordPool = "" 
    if (isUpperCase) {
        passwordPool += upperCase
    }
    if (isLowerCase) {
        passwordPool += lowerCase
    }
    if (isNumbers) {
        passwordPool += numbers
    }
    if (isSpecialChars) {
        passwordPool += specialChars
    }
    console.log(passwordPool)

    var finalPassword = "";

    for (let i = 0; i < length; i++) {
        finalPassword += passwordPool[Math.floor(Math.random() * passwordPool.length)]
        console.log(i + " time in for loop " +finalPassword)        
    }
    console.log(finalPassword)
  }
  return finalPassword;
}


function popPassword() {
    passwordGen = passwordGenerator()
    var passwordTextbox = document.querySelector("#password")
    passwordTextbox.value = passwordGen
    
}

// need maybe two functions:
// one for generating random number
// one for handling answers from user

// refer to math.random

generatePassBtn.addEventListener("click", popPassword);
