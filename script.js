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





var characters = prompt("How many characters would you like your password to contain?");

if (characters < 8) { 
  alert("Password length must be between 8-50 characters");
} if (characters > 51) {
  alert("Password length must be between 8-50 characters");
} if (characters > 8) {
  console.log(`I want ${characters} characters in my password`);
}
  


