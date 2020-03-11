// The Password generator will provide a password with 8-50  characters based on criteria the user specifies.

// Variable Declaration 
var confirmLength
var confirmSpecialCharacter
var confirmNumericCharacter
var confirmUpperCase
var confirmLowerCase 

// Values 
var number = "0123456789";
var specialChar = "!$&()*+,-./:;<=>?@^_`{|}"
var alphaLower = "abcdefghijklmnopqrstuvwxyz"
var alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

// Assignment Code 
var generateBtn = document.querySelector("#generate");

// ORIGINAL CODE - REVISIT Write password to the #password input  
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Begin function to generate the passcode 
function writePassword() {
  // Confirm length of password 
  var confirmLength = prompt("How many characters would you like your password to contain?");
    // If outside range, ask to enter a different number 
    if (confirmLength < 8 || confirmLength > 51) {
      alert("Password length must be between 8-50 characters Try again");
      // If inside range, continue with password requirements 
    } else {
      var confirmSpecialCharacter = confirm("Click OK to confirm if you would like to include special characters");
      var confirmNumericCharacter= confirm("Click OK to confirm if you would like to include numeric characters");    
      var confirmLowerCase= confirm("Click OK to confirm if you would like to include lowercase characters");
      var confirmUpperCase= confirm("Click OK to confirm if you would like to include uppercase characters");
        // If neither, loop to ask the question again 
        alert("You have to at least choose one");

// Function Return 
return password; 

// Event Listener 
generateBtn.addEventListener("click", writePassword);
