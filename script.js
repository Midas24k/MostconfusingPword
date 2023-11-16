// Assignment Code
var generateBtn = document.querySelector("#generate");
var password = generatePassword()
var charactersUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var charactersLowercase = "abcdefghijklmnopqrstuvwxyz"
var characternumb = "0123456789"
var charactersymbol = "!@#$%^&*()"
var confirmBtn = "validation"


function generatePassword() {
  // when the user clicks button a password is generated 
  //function generatePrompt(charLength, includeNumbers, includeUppercase, includeLowercase, includeSymbols) {
  // var charLength = Array.from({length:128},(i) => i + 8);
  // for (charLength [i] = 8; i <= 128; i++);{
  // }  
  //}
  // Then the the user is presented with a series of prompts for the password criteria
  // function confirm () {

  // }
  // // the user is prompted to select which criteria to include in the password
  // function generateCharacters( ) {
  // var count = prompt("Gimme a number between 1 and 1000");
  // count = parseInt(count);
  // if (count > 1000 || count < 1) {
  //   console.log('Bad');
  // }


  // }
  //the user will be prompted to select at least 8 characters and no more than 128 characters
  //the user will be asked about charactor types that include lowercase, UPPERCASE, numeric, and/or special characters
  //the users inputs should be validated and atleast one character type should be selceted after all prompts are answered and a password is generated with the selected criteria 


  // prompt user "do you want to use lowercase letters?" or something
  console.log("you clicked the button ");
  // prompt user for length of password
  var charLength = prompt("How long do you want your password to be?");
  charLength = parseInt(charLength);
  // if length < 8 or length > 128, say "DO BETTER" and retry
  if (charLength < 8 || charLength > 128) {
    alert("Did not meet criteria, please try again") // something telilng the user they did not follow the rules and need to try again
    return '';
  }
  var charactersLowercase = confirm("Would you like to use lowercase letters?");
    console.log(charactersLowercase)
  if (charactersLowercase == true || !charactersLowercase == false){
   charactersLowercase = ("abcdefghijklmnopqrstuvwxyz");
   console.log("abcdefghijklmnopqrstuvwxyz")
  }
  // prompt user something like "Uppercase letters?"

  var charactersUppercase = confirm("Would you like to use Uppercase letters?");
    console.log(charactersUppercase)
  if (charactersUppercase == true){
    charactersUppercase = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
    console.log("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
  }
  // prompt for nums?
  
  var characternumb = confirm("would you like to use numbers?");
    console.log(characternumb)
  if (characternumb == true || !characternumb == false){
    characternumb = ("0123456789")
    console.log("0123456789")
  }
  // prompt for special chars?
  
  var charactersymbol = confirm(" would you like to use symbols?")
    console.log(charactersymbol)
  if (charactersymbol == true){
    charactersymbol = ("!@#$%^&*()")
    console.log("!@#$%^&*()")
  }
  


  // For the below, look into confirm(). It is like alert() and prompt(), but just for Y/N questions

  // when all prompts are answered then a password is generated that matches the selceted criteria




  return "Generated password goes here";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword()
  var passwordText = document.querySelector("#password");

  // Array.from = charLength
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
