// Assignment Code
var generateBtn = document.querySelector("#generate");

function randomInt(min, max) {
  if (!max) {
    max = min;
    min = 0;
  }
  var rand = Math.random();
  return Math.floor(min * (1 - rand) + rand * max);
}

function getRandomItem(list) {
  return list[randomInt(list.length)];
}

function generatePassword() {
  var userInput = window.prompt("How long do you want your password?");
  var passwordLength = parseInt(userInput);
  // must choose good values
  if (isNaN(passwordLength)) {
    window.alert("Must choose a number");
    return;
  }

  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Password length must be between 8 and 128.");
    return;
  }
  // questions
  var userNum = window.confirm("Do you want numbers in password?");
  var userSym = window.confirm(
    "Do you want Special Charcters in your password?"
  );
  var userLcase = window.confirm(
    "Do you want lower case letters in your password?"
  );
  var userUcase = window.confirm(
    "Do you want UPPER case letters in your password?"
  );
  // list of inputs
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
  // make lowerCase to upperCase
  var upperCaselist = [];

  var everything = [];

  for (var i = 0; i < lowerCase.length; i++) {
    upperCaselist[i] = lowerCase[i].toUpperCase();
  }
  // add values into one
  if (userNum === true) {
    everything.push(numList);
  }
  if (userSym === true) {
    everything.push(sysList);
  }
  if (userLcase === true) {
    everything.push(lowerCase);
  }
  if (userUcase === true) {
    everything.push(upperCaselist);
  }

  if (everything.length === 0) {
    window.alert("Must choose 1 option");
    return;
  }

  var generatePassword = "";

  for (var i = 0; i < passwordLength; i++) {
    var randomList = getRandomItem(everything);
    var randomChar = getRandomItem(randomList);
    generatePassword += randomChar;
  }

  return generatePassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
