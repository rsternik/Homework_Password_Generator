// Assignment Code
var generateBtn = document.querySelector("#generate");
// Character Set
var upperCase = "ABCDEFG";
var lowerCase = "abcdefg";
var number = "0123456789";
var special = "!@#$%^&*()-+";
var charBase = "";
var randomChar = "";




// Write password to the #password input
function writePassword() {

  var passwordText = document.querySelector("#password");
  

  //  User Input
  var passwordLength = parseInt(prompt("How long to you want your password to be?"));
  var lowerConf = confirm("Do you want lowercase characters?");
  var upperConf = confirm("Do you want uppercase characters?");
  var specialConf = confirm("Do you want any special characters?");
  var numberConf = confirm("Do you want to include numbers?");
  // Conditions

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

  // Loop
  for (let i = 0; i < passwordLength; i++) {

    
    randomChar += charBase.charAt(Math.floor(Math.random() * charBase.length));
    passwordText.value = randomChar;
  }
}
// Add event listener to generate button

generateBtn.addEventListener("click", writePassword());
