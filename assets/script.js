// Assignment Code
var generateBtn = document.querySelector("#generate");
// added the requirements for the password
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var sybols = "!@#$%^&*()_+";
// Write password to the #password input
function writePassword() {
  var passwordLength = prompt("How long would you like the password length to be?");
  if (passwordLength === null || passwordLength.trim() === "") {
    return;
}
  passwordLength = Number(passwordLength);
  var uselowercase = confirm("Include lowercase lettters?")
  var uppercase = confirm("Include uppercase lettters?")
  var usenumbers = confirm("Include numbers?")
  var usesybols = confirm("Include Sybols")
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
