// Assignment Code
var generateBtn = document.querySelector("#generate");

// Character Set
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = upperCase.toLowerCase();
var number = "0123456789";
var special = "!@#$%^&*()-+";


// Write password to the #password input
function writePassword() {


  // var defined query selectors
  var passwordText = document.querySelector("#password");
  var charBase = null;
  var randomChar = "";

  //  Password Character length User Input
  var passwordLength = parseInt(prompt("Enter password length Min 8 - Max 128"));

  // Password length Condition and Codeblock
  if (passwordLength >= 8 && passwordLength <= 128) {
    var lowerConf = confirm("Include lowercase characters?");
    var upperConf = confirm("Include uppercase characters?");
    var numberConf = confirm("Include numbers?");
    var specialConf = confirm("Include special characters?");

    // charBase character set concatenation

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

    // Charcter set condition 

    if (charBase != null) {

      // Password Generation Loop
      for (let i = 0; i < passwordLength; i++) {
        randomChar += charBase.charAt(Math.floor(Math.random() * charBase.length));
        passwordText.value = randomChar;
      }
    }
    else {
      // Undefined charSet error message 
      passwordText.value = "You must select at least one character set. Click the Generate Password button to try again.";
    }
  }else{
      passwordText.value = "Your password legnth is out of bounds. Click the Generate Password button and select a number between 8 and 128"}
   }



// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);
