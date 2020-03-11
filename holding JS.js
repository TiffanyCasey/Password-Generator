
// Assignment Code 
var generateBtn = document.querySelector("#generate");

// Variable Declaration 
var confirmLength
var confirmSpecialCharacter
var confirmNumericCharacter
var confirmUpperCase
var confirmLowerCase 

// Values 
var number = ("0", "1", "2", "3", "4", "5", "6", "7", "8", "9");
var specialChar = ("!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~");
var alphaLower = ("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
var alphaUpper = ("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");



  // Confirm length of password 
  var confirmLength = prompt("How many characters would you like your password to contain?");
  console.log(confirmLength)
  // If inside range, continue with password requirements 
  if (confirmLength > 8 || confirmLength < 51) {
    alert(`Your password will have ${confirmlength} characters`);
  }
  // If outside range, ask to enter a different number 
    else if (confirmLength < 8 || confirmLength > 51) {
      alert("Password length must be between 8-50 characters Try again");
      return ""; 
    }
  
// Begin function to generate the passcode 
  function writePassword() {
  }

/*
  // If outside range, ask to enter a different number
  var confirmSpecialCharacter = confirm("Click OK to confirm if you would like to include special characters");
  var confirmNumericCharacter= confirm("Click OK to confirm if you would like to include numeric characters");    
  var confirmLowerCase= confirm("Click OK to confirm if you would like to include lowercase characters");
  confirmUpperCase= confirm("Click OK to confirm if you would like to include uppercase characters");
  
  // If neither, loop to ask the question again 
  if (confirmLowerCase === true || confirmUpperCase === true || confirmNumericCharacter === true || confirmSpecialCharacter === true) {

  } else {
    alert("You must choose at least upper case or lower case"); 
    return "";
  }

    // All four options  
      else if  (confirmSpecialCharacter && confirmNumericCharacter && confirmUpperCase) {
        choices = ); 
      }
      // Three Options 
      else if (confirmSpecialCharacter && confirmNumericCharacter && confirmLowerCase) {
        choices = ); 
      } else if (confirmNumericCharacter && confirmLowerCase && confirmUpperCase) {
          choices = ); 
      }
      else if (confirmNumericCharacter && confirmLowerCase && confirmUpperCase) {
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
      }
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

  // Empty string to be filled based on for loop selecting random characters from above array
  var computerSelection = ""


  for (var i = 0; i < passwordLength; i++) {
    var pickChoices = choices[Math.floor(Math.random() * choices.length)];
    password.push(pickChoices)
  }

// Return password from function 
  return randomPassword; 
  }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Event Listener 
generateBtn.addEventListener("click", writePassword);
