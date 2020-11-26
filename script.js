var button = document.querySelector("#generateButton");

// Establishing possible characters
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "{", "|", "}", "~", + '"'];

//Establishing variables for password
var passwordLength = parseInt(prompt("Choose a password length between 8 - 128 characters",""));

  if (passwordLength < 8 || passwordLength > 128){
    prompt("Your number (" + passwordLength + ") is outside the range of [8-128]. Choose again!");
  }
  if (passwordLegth >= 8 || passwordLength <= 128) {
  }
  else{
  var userLowerCase = confirm ("Would you like to use lower case letters in your password?");
  var userUpperCase = confirm ("Would you like to use uppercase letters in your password?");
  var userNumbers = confirm ("Would you like to use numbers in your password?");
  var userSpecialChar = confirm ("Would you like to use special characters in your password?");
  }

//Generating appropriate password length


  // Establishing variables
var password = "";
var allParameters = {}; // Object includes all possible parameters
var userParameters = {}; // Object includes only parameters selected by user
var parameterCount = 0
var possibleChars = "";


//Establishing Possible useparameters
// if user selects to use only one of the password criteria
 lowerCase.charAt()

//if user selects to use 2 of the 4 password criteria



//if user selects to use 3 of the 4 criteria


//if user selects to use 4 of the 4 criteria



// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);














