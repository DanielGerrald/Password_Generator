var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialC = ["!", "@", "#", "$", "%", "^", "&", "?"];
var LowerC = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var UpperC = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var passLength = "";
var wantNumber = false;
var wantSpecialC = false;
var wantLowerC = false;
var wantUpperC =false;

function generatePassword() {
    passLength = (prompt("How many characters long would you like your password to be? \nPlease choose a number between 8 and 128"));
    if (passLength === null) {
      alert("Good Bye!!");
      return;
    }
    
//console.log(Length)
  while (passLength < 8 || passLength > 128 || isNaN(passLength)) {
      alert("Password must be between 8 and 128 characters long. \nPlease Try again.");
      passLength = (prompt("How many characters long would you like your password to be? \nPlease choose a number between 8 and 128."));
      if (passLength === null) {
        alert("Good Bye!!");
        return;
      }
      passLength = parseInt(passLength);
    }
    alert("Your password will have " + passLength + " characters.");

    var allTrue = confirm("Would you like your password to include ALL of the following:\n-Numbers \n-Special Charecters \n-Lowercase Letters \n-Uppercase Letters \nClick Cancel if you would like to select other charecter options.");
    if (allTrue) {
      wantNumber = true;
      wantSpecialC = true;
      wantLowerC = true;
      wantUpperC =true;
    }
    else {
        wantNumber = confirm("Click OK if you would like to include numbers. \nClick Cancel if you do not wish to include numbers.");
        wantSpecialC = confirm("Click OK if you would like to include special characters. \nClick Cancel if you do not wish to include special characters.");
        wantLowerC = confirm("Click OK if you would like to include lower case letters. \nClick Cancel if you do not wish to include lower case letters.");
        wantUpperC = confirm("Click OK if you would like to include upper case letters. \nClick Cancel if you do not wish to include upper case letters.");
      
      while (wantNumber === false && wantSpecialC === false && wantLowerC === false && wantUpperC === false) {
        alert("You must choose at least one option.");
        wantNumber = confirm("Click OK if you would like to include numbers. \nClick Cancel if you do not wish to include numbers.");
        wantSpecialC = confirm("Click OK if you would like to include special characters. nClick Cancel if you do not wish to include special characters.");
        wantLowerC = confirm("Click OK if you would like to include lower case letters. \nClick Cancel if you do not wish to include lower case letters.");
        wantUpperC = confirm("Click OK if you would like to include upper case letters. \nClick Cancel if you do not wish to include upper case letters.");
      }
    }


  var passwordC = [];
  var newPassword = "";

  if (wantNumber) {
    passwordC.push.apply(passwordC, number);
  }

  if (wantSpecialC) {
    passwordC.push.apply(passwordC, specialC);
  }

  if (wantLowerC) {
    passwordC.push.apply(passwordC, LowerC);
  }

  if (wantUpperC) {
    passwordC.push.apply(passwordC, UpperC);
  }

//console.log(passwordC)

  for (var i = 0; i < passLength; i++) {
    newPassword = newPassword + passwordC[Math.floor(Math.random() * passwordC.length)];
  }
//console.log(newPassword)
  return newPassword;
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

