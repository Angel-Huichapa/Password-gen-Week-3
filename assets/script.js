// Assignment Code
var generateBtn = document.querySelector("#generate");

// requirements for the password
var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbersChars = "0123456789";
var symbolsChars = "!@#$%^&*()_+";

// Write password to the #password input
function writePassword() {
  var passwordLength = prompt("How long would you like the password length to be?");
  if (passwordLength === null || passwordLength.trim() === "") {
    return;
  }
  passwordLength = Number(passwordLength);
  if (!Number.isInteger(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a valid password length between 8 and 128.");
    return;
  }
  var useLowercase = confirm("Include lowercase letters?");
  var useUppercase = confirm("Include uppercase letters?");
  var useNumbers = confirm("Include numbers?");
  var useSymbols = confirm("Include symbols?");

  if (!useLowercase && !useNumbers && !useUppercase && !useSymbols) {
    alert("Please select one or more character types.");
    return;
  }
  var password = generatePassword(passwordLength, useLowercase, useUppercase, useNumbers, useSymbols);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(length, useLowercase, useUppercase, useNumbers, useSymbols) {
  var charset = "";

  if (useLowercase) {
    charset += lowercaseChars;
  }
  if (useUppercase) {
    charset += uppercaseChars;
  }
  if (useNumbers) {
    charset += numbersChars;
  }
  if (useSymbols) {
    charset += symbolsChars;
  }

  var password = "";
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * charset.length);
    password += charset.charAt(randomIndex);
  }
  return password;
}