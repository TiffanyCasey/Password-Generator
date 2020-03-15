// The Password generator will provide a password with 8-50  characters based on criteria the user specifies.

//Assignment Code + Event Listener to prompt questions when button pushed
document.querySelector("#generate").addEventListener("click", writePassword);

// Various Arrays 
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Variable Declaration 
var confirmLength
var confirmSpecialCharacter
var confirmNumericCharacter
var confirmUpperCase
var confirmLowerCase 

// Prompt to confirm how many characters the user would like in their password
function writePassword() {
  var confirmLength = parseInt(prompt("How many characters would you like your password to contain?"))

  // Loop if answer is outside the parameters 
  while(confirmLength <= 7 || confirmLength >= 51) {
      alert("Password length must be between 8-50 characters Try again");
      var confirmLength = parseInt(prompt("How many characters would you like your password to contain?"));
      } 

      // Repeat back how many charactes the user will have  
      alert(`Your password will have ${confirmLength} characters`);

    // Determine parameters of password 
    var confirmSpecialCharacter = confirm("Click OK to confirm if you would like to include special characters");
    var confirmNumericCharacter= confirm("Click OK to confirm if you would like to include numeric characters");    
    var confirmLowerCase= confirm("Click OK to confirm if you would like to include lowercase characters");
    var confirmUpperCase= confirm("Click OK to confirm if you would like to include uppercase characters");
    // Loop if answer is outside the parameters 
      while(confirmUpperCase === false && confirmLowerCase === false) {
        alert("You must choose at least upper case or lower case");
        var confirmLowerCase= confirm("Click OK to confirm if you would like to include lowercase characters");
        var confirmUpperCase= confirm("Click OK to confirm if you would like to include uppercase characters");
        } 

      // Determine parameters of password 
      var selectedCharacters;

      if (confirmSpecialCharacter === true) {
        var selectedCharacters = specialChar; 
      }
      if (confirmNumericCharacter === true) {
        var selectedCharacters = number; 
      }
      if (confirmUpperCase === true) {
        var selectedCharacters = alphaUpper;
      }
      if (confirmLowerCase === true) {
        var selectedCharacters = alphaLower;
      }

  // Empty string to be filled based on for loop selecting random characters from above array
  var randomPassword = "";

  for (var i = 0; i < confirmLength; i++) {
    randomPassword = randomPassword + selectedCharacters[Math.floor(Math.random() * selectedCharacters.length)];
  }
  return randomPassword;


// Begin function to write password to #password input 
function writePassword() {
var password = writePassword() 
var passwordText = document.querySelector("#password");
passwordText.value = password;
}
}

// Add event listener to generate button




