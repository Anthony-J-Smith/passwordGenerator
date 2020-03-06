// Assignment Code
var generateBtn = document.getElementById("generate");
//A-Z a-z 0-9 and special characters without $ to accommidate european keyboards



var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase =  "QWERTYUIOPASDFGHJKLZXCVBNM";
var numCase = "1234567890";
var specialCase = "!@#%&";
// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  var password = "";
  //
  var alphaNumericSpecial = "";
 
 

  // Loop 15 times
  //add a variable selector on 15 for an user input
  for (var i = 0; i < 15; i++) {
    // 
//takes the lowercase letters to alpha
alphaNumericSpecial + lowerCase
    //checks to see of checkbox is checked
      if (document.getElementById("capital").checked = true){
        //if the box is checked it adds upperCase to the array
alphaNumericSpecial + upperCase
      } else if (document.getElementById("number").checked = true) {
        //if box is checked it adds numCase to the array
alphaNumericSpecial + numCase
      } else if (document.getElementById("special").checked = true) {
        //if box is checked it adds specialCase to the array
        alphaNumericSpecial + specialCase
      } else {
        //if no boxes are checked return to default
        alphaNumericSpecial
      }
    
   


      alphaNumericSpecial += [Math.floor(Math.random() * alphaNumericSpecial.length)];
    
    // Display in console
    console.log(alphaNumericSpecial);

    
  }
  document.getElementById("password").value = alphaNumericSpecial;
}







// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

