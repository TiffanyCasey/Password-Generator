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

// Begin function to generate the passcode 
function writePassword() {
  // Confirm length of password 
  var confirmLength = prompt("How many characters would you like your password to contain?");
    // If outside range, ask to enter a different number 
    if (confirmLength < 8 || confirmLength > 51) {
      alert("Password length must be between 8-50 characters Try again");
      // If inside range, continue with password requirements 
    } else {
      confirmSpecialCharacter = confirm("Click OK to confirm if you would like to include special characters");
      confirmNumericCharacter= confirm("Click OK to confirm if you would like to include numeric characters");    
      confirmLowerCase= confirm("Click OK to confirm if you would like to include lowercase characters");
      confirmUpperCase= confirm("Click OK to confirm if you would like to include uppercase characters");
      // If neither, loop to ask the question again 
      alert("You have to at least choose one"); 
    };
      
       // All four options  
      else if (confirmSpecialCharacter && confirmNumericCharacter && confirmUpperCase) {
        choices = ); 
    }
      // Three Options 
      else if (confirmSpecialCharacter && confirmNumericCharacter && confirmLowerCase) {
        choices = ); 
      } else if (confirmNumericCharacter && confirmLowerCase && confirmUpperCase) {
          choices = ); 
      } else if (confirmNumericCharacter && confirmLowerCase && confirmUpperCase) {
          choices = ); 
      }
      // Two options
      else if (confirmNumericCharacter && confirmUpperCase) {
        choices = ); 
        else if (confirmNumericCharacter && confirmLowerCase) {
          choices = ); 
          else if (confirmSpecialCharacter && confirmNumericCharacter) {
            choices = ); 
            else if (confirmLowerCase && confirmUpperCase) {
              choices = ); 
              else if (confirmSpecialCharacter && confirmUpperCase) {
                choices = ); 
                else if (confirmSpecialCharacter && confirmLowerCase) {
                  choices = ); 

      // One options 
      else if (confirmSpecialCharacter) {
        choices = ); 
        else if (onfirmNumericCharacter) {
          choices = ); 
          else if (onfirmUpperCase) {
            choices = ); 
            else if (confirmLowerCase) {
              choices = ); 

    }
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
    var password = generatePassword();

    
    }
}
// Function Return 
 writePassword(); 

// Event Listener 
generateBtn.addEventListener("click", writePassword);
