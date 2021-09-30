// var for Generate Button using query seletor
var generateBtn = document.querySelector("#generate");

// Character Set
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = upperCase.toLowerCase();
var number = "0123456789";
var special = "!@#$%^&*()-+";


// Write password to the #password input
function writePassword() {


  // var defined query selector
  var passwordText = document.querySelector("#password");


  //  Password character length user input
  var passwordLength = parseInt(prompt("Enter password length Min 8 - Max 128"));

  // local writePassword vars
  var charBase = null;
  var randomChar = "";

  // Password length Condition and code block
  if (passwordLength >= 8 && passwordLength <= 128) {
    var lowerConf = confirm("Include lowercase characters?");
    var upperConf = confirm("Include uppercase characters?");
    var numberConf = confirm("Include numbers?");
    var specialConf = confirm("Include special characters?");

    // Character set coditions for character set concatenation

    if (lowerConf) {
      charBase += lowerCase;
    }

    if (upperConf) {
      charBase += upperCase;
    }

    if (numberConf) {
      charBase += number;
    }

    if (specialConf) {
      charBase += special;
    }

    // charBase conditional

    if (charBase != null) {

      // Password Generation Loop
      for (let i = 0; i < passwordLength; i++) {
        randomChar += charBase.charAt(Math.floor(Math.random() * charBase.length));
        passwordText.value = randomChar;
      }
    }
    else {
      // null charSet error message 
      passwordText.value = "You must select at least one character set. Click the Generate Password button to try again.";
    }
    // Password length out of bounds error message
  } else {
    passwordText.value = "Your password length is out of bounds. Click the Generate Password button and select a number between 8 and 128"
  }
}



// Event listener for Generate Password button click

generateBtn.addEventListener("click", writePassword);
