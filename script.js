// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var passwordLength = document.querySelector(12)
  var specialChar = document.querySelector("!@#$%^&*()_-+=")
  var charsUppercase = document.querySelector("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
  var charsLowercase = document.querySelector("abcdefghijklmnopqrstuvwxyz")
  var charNum = document.querySelector("0123456789")

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword () {

}
