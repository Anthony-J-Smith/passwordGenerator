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


    
      if (document.getElementById("myCheck").checked = true;){
        
      }
    
    

    
   


    password += alphaNumericSpecial[Math.floor(Math.random() * alphaNumericSpecial.length)];
    
    // Display in console
    console.log(password);

    
  }
  document.getElementById("password").value = password;
}







// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

