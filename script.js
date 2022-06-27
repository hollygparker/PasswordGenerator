// prompt >dialog box
// 8-128 chars
// prompt for uppercase, lowercase, numeric, and/or special characters
var generatePassBtn = document.querySelector("#generate");

function passwordGenerator() {
  console.log("inside");
  var length = prompt(
    "Please select a password length between 8 and 128 characters."
  );

  if (length < 8 || length > 128) {
    alert("Please select a password length between 8 and 128 characters.");
    return null;
  } else {

    var upperCase = "QWERTYUIOPASDFGHJKLZXCVBNM"
    var lowerCase = "qwertyuiopasdfghjklzxcvbnm"
    var numbers = "1234567890"
    var specialChars = "!~`@#$%^&*()_-+=|\}]{[;:/?.>,<"

    console.log(upperCase);
    console.log(lowerCase);
    console.log(numbers);
    console.log(specialChars);

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

    for (let i = 0; i <= length; i++) {
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
