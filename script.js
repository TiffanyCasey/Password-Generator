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




// Determine how many characters user wants in password 
var characters = prompt("How many characters would you like your password to contain?");

if (characters < 8) { 
  alert("Password length must be between 8-50 characters");
} if  (characters > 51) {
  alert("Password length must be between 8-50 characters");
// } if (characters IS NOT A NUMBER) {// NEED TO DETERMINE HOW TO WRITE 
//   alert("Password length must be between 8-50 numeric characters");
} if (characters > 8) {
  console.log(`I want ${characters} characters in my password`);
}

  
// Determine how many characters user wants in special characters
var specialCharacter = true; 
var questionOne = prompt("Click OK to confirm if you would like to include special characters");

 if (questionOne === specialCharacter) {
  console.log("I do want special characters");
} else {
  console.log("I do NOT want special characters");
}

// Determine how many characters user wants numeric characters
var numericCharacter = true;
var quesitonTwo= prompt("Click OK to confirm if you would like to include numeric characters");


if (quesitonTwo === numericCharacter) {
  console.log("I do want numeric characters");
} else {
  console.log("I do NOT want numeric characters");
}