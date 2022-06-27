// prompt >dialog box
// 8-128 chars
// prompt for uppercase, lowercase, numeric, and/or special characters
var generatePassBtn = document.querySelector("#generate");

// function that prompts users with questions about what to be included in their randomly generated password
// sets password length
function passwordGenerator() {
  console.log("inside");
  var length = prompt(
    "Please select a password length between 8 and 128 characters."
  );

//   ensures proper password length is entered
  if (length < 8 || length > 128) {
    alert("Please select a password length between 8 and 128 characters.");
    return null;
  } else {

    // possible characters
    var upperCase = "QWERTYUIOPASDFGHJKLZXCVBNM"
    var lowerCase = "qwertyuiopasdfghjklzxcvbnm"
    var numbers = "1234567890"
    var specialChars = "!~`@#$%^&*()_-+=|\}]{[;:/?.>,<"

    console.log(upperCase);
    console.log(lowerCase);
    console.log(numbers);
    console.log(specialChars);

    // populates questions
    var isUpperCase = confirm("Include uppercase characters?");
    var isLowerCase = confirm("Include lowercase characters?");
    var isNumbers = confirm("Include numbers?");
    var isSpecialChars = confirm("Include special characters?");
    console.log(isUpperCase)
    console.log(isLowerCase)
    console.log(isNumbers)
    console.log(isSpecialChars)

    // adds specified character types to password pool variable
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

    // loops over full password character pool until reaching entered specified character length for the password
    for (let i = 0; i < length; i++) {
        finalPassword += passwordPool[Math.floor(Math.random() * passwordPool.length)]
        console.log(i + " time in for loop " +finalPassword)        
    }
    console.log(finalPassword)
  }
//   returns final password
  return finalPassword;
}

// function that causes final password to populate into the text box on the screen.
function popPassword() {
    passwordGen = passwordGenerator()
    var passwordTextbox = document.querySelector("#password")
    passwordTextbox.value = passwordGen
    
}
// even listener for click
generatePassBtn.addEventListener("click", popPassword);
