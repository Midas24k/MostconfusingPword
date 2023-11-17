// Assignment Code
var generateBtn = document.querySelector("#generate");
var UppercaseArr = ["A", "B", "C", "D", "E", "F", "G", "H", " I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowercaseArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var numbArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var symbolArr = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]
var allChars = []; //charactersLowercase + charactersUppercase + characternumb + charactersymbol
var charLength = "";

function generatePassword() {

  // prompt user "do you want to use lowercase letters?" or something
  console.log("you clicked the button ");
  // prompt user for length of password
  var charLength = prompt("Choose a number of characters between 8 and 128");
  charLength = parseInt(charLength);
  if (charLength < 8 || charLength > 128) {
    alert("Did not meet criteria, please try again") // something telilng the user they did not follow the rules and need to try again
    return '';
  }
  var password = "";

  var charactersLowercase = confirm("Would you like to use lowercase letters?");
  console.log(charactersLowercase)
  if (charactersLowercase == true) {
    console.log(charactersLowercase);
    // add lowercase letters to the allChars array
    allChars = allChars.concat(lowercaseArr)
    // add a random lc letter to password to ensure one is chosen
    password += charactersLowercase[Math.floor(Math.random() * charactersLowercase.charLength)]
  }
  // prompt user something like "Uppercase letters?"

  var charactersUppercase = confirm("Would you like to use Uppercase letters?");
  console.log(charactersUppercase)
  if (charactersUppercase == true) {
    console.log(charactersUppercase)
    // add uppercase chars to the allChars array
    allChars = allChars.concat(UppercaseArr)
    password += charactersUppercase[Math.floor(Math.random() * charactersUppercase.charLength)]
  }
  // prompt for nums?

  var characternumb = confirm("would you like to use numbers?");
  console.log(characternumb)
  if (characternumb == true) {
    console.log(characternumb)
    // add to allChars
    allChars = allChars.concat(numbArr)
    password += characternumb[Math.floor(Math.random() * characternumb.charLength)]

  }
  // prompt for special chars?

  var charactersymbol = confirm(" would you like to use symbols?")
  console.log(charactersymbol)
  if (charactersymbol == true) {
    console.log(charactersymbol);
    // add to allChars
    allChars = allChars.concat(symbolArr)
    password += charactersymbol[Math.floor(Math.random() * charactbol.charLength)]

  }
  // when all prompts are answered then a password is generated that matches the selceted criteria





  while (charLength > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  // For the below, look into confirm(). It is like alert() and prompt(), but just for Y/N questions

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // Array.from = charLength
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
