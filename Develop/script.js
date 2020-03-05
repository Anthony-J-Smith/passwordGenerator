// Assignment Code
var generateBtn = document.getElementById("generate");
//A-Z a-z 0-9 and special characters without $ to accommidate european keyboards
var alphaNumericSpecial = ["a","b", "c", "d","e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "!", "@", "#", "&", ":", ";", "-", "/", "?"]

var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase =  "";
var numCase = "";
var specialCase = "";
// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  var password = "";
  // Loop 15 times
  for (var i = 0; i < 15; i++) {
    // 

    password += alphaNumericSpecial[Math.floor(Math.random() * alphaNumericSpecial.length)];
    
    // Display in console
    console.log(password);

    
  }
  document.getElementById("password").value = password;
}




  (writePassword);



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

