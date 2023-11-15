// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var passwordLength = document.querySelector("12 <= 128" )
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

// when the user clicks button a password is generated 

function generatePrompt () {


}



// Then the the user is presented with a series of prompts for the password criteria





// the user is prompted to select which criteria to include in the password
function passwordText () {


}



//the user will be prompted to select at least 8 characters and no more than 128 characters
function passwordLength () {


}


//the user will be asked about charactor types that include lowercase, UPPERCASE, numeric, and/or special characters
function Characters () {


} 


//the users inputs should be validated and atleast one character type should be selceted after all prompts are answered and a password is generated with the selected criteria 
