// Establishing possible characters

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "{", "|", "}", "~", + '"'];

// Connecting DOM elements to HTML
var generateBtn = document.querySelector("#generate");
var resultEl = document.querySelector("#passwordbox");
var lengthBox = document.querySelector("#length");
var lowerCaseSwitch = document.querySelector("#lowercase");
var upperCaseSwitch = document.querySelector("#uppercase");
var numbersSwitch = document.querySelector("#numbers");
var specialCharSwitch = document.querySelector("#special");

// User input of parameters 
  var length = parseInt(lengthBox.value);
  var hasLowerCase = lowerCaseSwitch.checked;
  var hasUpperCase = upperCaseSwitch.checked;
  var hasNumbers = numbersSwitch.checked;
  var hasSpecialChar = specialCharSwitch.checked;

//generate password with parameters
generatePassword(hasLowerCase, hasUpperCase, hasNumbers, hasSpecialChar, length);

//Generate password function 
function generatePassword (lower, upper, number, specialChar, length) {

  let generatedPassword = " ";
  var typesCount = lower + upper + number + specialChar;
  var typesArr = [{lower }, {upper}, {number}, {specialChar}].filter(item => Object.values(item)[0]);

  if(typesCount === 0) {
    return '';
  }

  for(let i=0; i < length; i+= typesCount) {
    typesArr.forEach(type => {
      var funcName = Object.keys(type)[0];

      generatedPassword += randomFunc[funcName]();
    });
  }
  var password = generatedPassword;
  
  return generatedPassword;
}
//Establishing randomized parameters
const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  special: getRandomSpecial,
};
  //Randomising lowercase
  function getRandomLower () {
      return lowerCase [Math.floor(Math.random() * lowerCase.length)];
  }
  //Randomising uppercase
  function getRandomUpper () {
    return upperCase [Math.floor(Math.random() * upperCase.length)];
  }
  //Randomising numbers
  function getRandomNumber () {
    return numbers [Math.floor(Math.random() * numbers.length)];
  }
  //Randominsion special characters
  function getRandomSpecial () {
    return specialChar [Math.floor(Math.random() * specialChar.length)];
  }

// Write password to the #password input
function writePassword() {
  var password = generatedPassword();
  var passwordText = document.querySelector("#passwordbox");
  passwordText.value = password;

}

//Vaildating Password criteria
if (length < 8 || length > 128) {
  alert("Please enter a password length between 8-128");
} else if (typecount = 0)
  alert("Atleast one password criteria must be selected")

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)