// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var upperCase = "ABCDEFG"
  var lowerCase = upperCase.toLowerCase();
  var number = "0123456789";
  var special = "!@#$%^&*()-+";
  var charBase = "";
  var passwordLength = parseInt(prompt("How long to you want your password to be?"));
  var lowerConf = confirm("Do you want lowercase characters?");
  var upperConf = confirm("Do you want uppercase characters?");
  var specialConf = confirm("Do you want any special characters?");
  var numberConf = confirm("Do you want to include numbers?");
  var finalPassword = "";

  passwordText.value = password;
  // function here

  // Inputs for password length, yes or no for special characters

  //   Conditions

  //   - 8 - 128 Characters, or weather not to include lowercase, uppercase, numeric, and / or special characters


  if (lowerConf) {
    charBase = charBase + lowerCase;
  }
  if (upperConf) {
    charBase = charBase + upperCase;
  }
  if (numberConf) {
    charBase = charBase + number;
  }
  if (specialConf) {
    charBase = charBase + special;
  }

  for (let i = 0; i < passwordLength; i++) {

    let randomChar;
    randomChar = charBase.charAt(Math.floor(Math.random() * charBase.length));
    finalPassword += randomChar;
    

  }
  return finalPassword;

}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);







// return

