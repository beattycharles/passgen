// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var userInput = window.prompt("How long do you want your password?");
  var passwordLength = parseInt(userInput);

  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    window.alert("Must choose a number between 8 and 128");
    return;
  }
}
// Can combine with above if statement
//   if (passwordLength < 8 || passwordLength < 128) {
//     window.alert("Password length must be between 8 and 128.");
//     return;
//   }
// }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
