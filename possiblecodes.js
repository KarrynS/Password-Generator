var requiredParams = function(userParameters) {
    if (userParameters["lowercase"]) {
        possibleChars = possibleChars + lettersLo;
        // Generate random lowercase letter
        var newChar = lowerCase[ Math.floor(Math.random()*lowerCase.length) ];
        password = password + newChar;
        console.log(password);
    };
    if (userParameters["uppercase"]) {
      possibleChars = possibleChars + lettersUp;
      // Generate random uppercase letter
      var newChar = upperCase[ Math.floor(Math.random()*upperCase.length) ];
      password = password + newChar;
      console.log(password);
  };
  if (userParameters["numeric"]) {
      possibleChars = possibleChars + numbers;
      // Generate random number between 0 - 9
      var newChar = numbers[ Math.floor(Math.random()*numbers.length) ];
      password = password + newChar;
      console.log(password);
  };
  if (userParameters["specialChar"]) {
      possibleChars = possibleChars + specialCharString;
      // Generate random special character
      var newChar = specialChar[ Math.floor(Math.random()*specialChar.length) ];
      password = password + newChar;
      console.log(password);
  };
  
  return [password, possibleChars];
  }