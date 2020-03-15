// The Password generator will provide a password with 8-50  characters based on criteria the user specifies.

// Assignment Code 
var generateBtn = document.querySelector("#generate");

// Variable Declaration 
var confirmLength
var confirmSpecialCharacter
var confirmNumericCharacter
var confirmUpperCase
var confirmLowerCase 

// Various Arrays 
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Begin with Button push
var link = document.getElementById(generate)

// Prompt to confirm how many characters the user would like in their password
var confirmLength = prompt("How many characters would you like your password to contain?");

// Loop if answer is outside the parameters 
while(confirmLength <= 7 || confirmLength >= 51) {
    alert("Password length must be between 8-50 characters Try again");
    var confirmLength = prompt("How many characters would you like your password to contain?");
} 

// Repeat back how many charactes the user will have  
alert(`Your password will have ${confirmLength} characters`);


  // Determine parameters of password 
  var confirmSpecialCharacter = confirm("Click OK to confirm if you would like to include special characters");
  var confirmNumericCharacter= confirm("Click OK to confirm if you would like to include numeric characters");    
  var confirmLowerCase= confirm("Click OK to confirm if you would like to include lowercase characters");
  confirmUpperCase= confirm("Click OK to confirm if you would like to include uppercase characters");
  
  // If neither, loop to ask the question again 
  if (confirmLowerCase === true || confirmUpperCase === true) {

  } else {
    alert("You must choose at least upper case or lower case"); 
  }

  // Begin function to write password to #password input 
  function writePassword() {
  
  // All four options  
  if  (confirmSpecialCharacter && confirmNumericCharacter && confirmUpperCase) {
    choices = (number, specialChar, alphaLower, alphaUpper); 
  }
  // Three Options 
  else if (confirmSpecialCharacter && confirmNumericCharacter && confirmLowerCase) {
    choices = concat(number, specialChar, alphaLower); 
  } else if (confirmNumericCharacter && confirmLowerCase && confirmUpperCase) {
      choices = concat(specialChar, alphaLower, alphaUpper); 
  } else if (confirmNumericCharacter && confirmLowerCase && confirmUpperCase) {
      choices = concat(number, alphaLower, alphaUpper); 
  }
  // Two options
  else if (confirmNumericCharacter && confirmUpperCase) {
  choices = concat(number, alphaUpper); 
  } else if (confirmNumericCharacter && confirmLowerCase) {
    choices = concat(number, alphaLower); 
  } else if (confirmSpecialCharacter && confirmNumericCharacter) {
    choices = concat(number, specialChar); 
  } else if (confirmLowerCase && confirmUpperCase) {
    choices = concat(alphaLower, alphaUpper); 
  } else if (confirmSpecialCharacter && confirmUpperCase) {
    choices = concat(specialChar, alphaUpper); 
  } else if (confirmSpecialCharacter && confirmLowerCase) {
    choices = concat(specialChar, alphaLower); 
  }
  // One option
  else if (confirmSpecialCharacter) {
    choices = concat(specialChar); 
  } else if (confirmNumericCharacter) {
    choices = concat(number); 
  } else if (confirmUpperCase) {
    choices = concat(alphaUpper); 
  } else if (confirmLowerCase) {
    choices = concat(alphaLower); 
  }
}
    
// Begin function to write password to #password input 

  var password = writePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


// Return the value



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

