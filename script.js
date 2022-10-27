// Assignment Code
var generateBtn = document.querySelector("#generate");

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function generatePassword() {
  var userInput = window.prompt("How long do you want your password?");
  var passwordLength = parseInt(userInput);

  if (isNaN(passwordLength)) {
    window.alert("Must choose a number");
    return;
  }

  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Password length must be between 8 and 128.");
    return;
  }

  var userNum = window.confirm("Do you want numbers in password?");
  var userSym = window.confirm(
    "Do you want Special Charcters in your password?"
  );
  var userLcase = window.confirm(
    "Do you want lower case letters in your password?"
  );
  var userUcase = window.confirm(
    "Do you want upper case letters in your password?"
  );

  var numList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var sysList = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "?"];
  var lowerCase = [
    "q",
    "w",
    "e",
    "r",
    "t",
    "y",
    "u",
    "i",
    "o",
    "p",
    "a",
    "s",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "z",
    "x",
    "c",
    "v",
    "b",
    "n",
    "m",
  ];
  var upperCase = [];

  var everything = [];

  for (var i = 0; i < lowerCase.length; i++) {
    upperCase[i] = lowerCase[i].toUpperCase();
  }

  if (userNum === true) {
    everything.push(numList);
  }
  if (userSym === true) {
    everything.push(sysList);
  }
  if (userLcase === true) {
    everything.push(lowerCase);
  }
  if (upperCase === true) {
    everything.push(upperCase);
  }

  for (var i = 0; i < passwordLength; i++) {
    var randomItem = everything[randomInt(0, everything.length - 1)];
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
