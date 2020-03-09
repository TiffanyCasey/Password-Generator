/* 
The Password generator will provide a password with 8-50 
characters based on criteria the user specifies.
*/

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

// If outside 8-50 units, ask to enter a new number within these parameters 
if (characters < 8 || characters > 50) {
 alert("Password length must be between 8-50 characters");
 prompt("How many characters would you like your password to contain?");
 // If within 8-50 units, record the number 
} else if (characters > 8 || characters < 51) {
  console.log(`I want ${characters} characters in my password`);
}
// NEED TO LOOP IF DON'T GIVE CORRECT # 

  
// Determine how many characters user wants in special characters
var specialCharacter = true; 
var questionOne = confirm("Click OK to confirm if you would like to include special characters");

 if (questionOne === specialCharacter) {
  console.log("I do want special characters");
} else {
  console.log("I do NOT want special characters");
}

// Determine how many characters user wants numeric characters
var numericCharacter = true;
var questionTwo= confirm("Click OK to confirm if you would like to include numeric characters");


if (questionTwo === numericCharacter) {
  console.log("I do want numeric characters");
} else {
  console.log("I do NOT want numeric characters");
}

// Determine if users would like lowercase characters 
var lowerCase = true;
var questionThree= confirm("Click OK to confirm if you would like to include lowercase characters");


if (questionThree === lowerCase) {
console.log("I do want lowercase characters");
} else {
  console.log("I do NOT want lowercase characters");
}

// Determine if users would like uppercase characters 
var upperCase = true;
var questionFour= confirm("Click OK to confirm if you would like to include uppercase characters");


if (questionFour === upperCase) {
console.log("I do want uppercase characters");
} else {
  console.log("I do NOT want uppercase characters");
}



// If neither, loop to ask the question again 
alert("You have to at least choose one");

console.log("I do NOT want numeric characters");

// Generate Password 