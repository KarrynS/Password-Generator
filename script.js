// Assignment Code
var generateBtn = document.querySelector("#generate");

//Write password to the password box
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//Generating a function to establish possbible parameters.
function generatePassword() {
  var passLength = prompt ("Please select password length between 8-128 characters?");
  var lowerCase = confirm ("Would you like to use lowercase letters?");
  var upperCase = confirm ("Would you like to use uppercase letters?");
  var numeric = confirm ("Would you like to use numbers?");
  var specialChar = confirm ("Would you like to use special characters?");

//Validating password criteria
  if (passLength <8 || passLength > 128) {
    alert ("Please ensure number of characters is between 8 - 128 characters"); 
  }
  else if (lowerCase === false && upperCase === false && numeric === false && specialChar === false) {
    alert ("Please select atleast one or more of the password criteria");
  } else {
  
  var lowerCaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperCaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specialChars = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "{", "|", "}", "~",];
  
  var possibleChars = [];
    var generatedPassword = " ";

  if(lowerCase === true) {
      possibleChars = possibleChars.concat(lowerCaseChar);
      console.log()
  }
  if(upperCase === true) {
      possibleChars = possibleChars.concat(upperCaseChar);
  }
  if(numeric === true) {
      possibleChars = possibleChars.concat(numbers);
  }
  if(specialChar === true) {
      possibleChars = possibleChars.concat(specialChars);
  }
//generate password matching the password length criteria
for(var i=0; i < passLength; i++) {
  var randomNumber = Math.floor(Math.random()*possibleChars.length);
  generatedPassword += possibleChars[randomNumber]; 
}
  return generatedPassword;

}
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
