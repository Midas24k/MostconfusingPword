// Assignment Code
var generateBtn = document.querySelector("#generate");
var UppercaseArr = ["A", "B", "C", "D", "E", "F", "G", "H", " I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowercaseArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var numbArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var symbolArr = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]
var allChars = []; //charactersLowercase + charactersUppercase + characternumb + charactersymbol
var charLength = 0;

function generatePassword() {
 
while (charLength < 8 || charLength > 128 || isNaN(charLength) || charLength == ""){
  charLength = prompt("Choose a number of characters between 8 and 128");
}
 
    
  // CONFIRMS ON CHARCTERS TO BE USED IN PASSWORD
    var charactersLowercase = confirm("Would you like to use lowercase letters?");
    if (charactersLowercase ) {
      allChars = allChars.concat(lowercaseArr)
    }


    var charactersUppercase = confirm("Would you like to use Uppercase letters?");
    if (charactersUppercase ) {
      allChars = allChars.concat(UppercaseArr);
    }
  
    var characternumb = confirm("would you like to use numbers?");
    if (characternumb) {
      allChars = allChars.concat(numbArr) 
    }
  

    var charactersymbol = confirm(" would you like to use symbols?");
    if (charactersymbol) {
      allChars = allChars.concat(symbolArr)
    }

    if(!charactersLowercase && !charactersUppercase
      && !characternumb && !charactersymbol){
        alert("You must select at least one type of character in order to generate your password")
        window.location.reload()
      }
  
      var password = "";
    for( let i=0; i<charLength ; i++) {
      password += allChars[Math.floor(Math.random() * allChars.length)];
      console.log(password);
    };

  

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

