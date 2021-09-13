// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

    passwordText.value = password;
 
}

function generatePassword() {
  var length = prompt('Password length : Enter 8 to 128');

  if(length<8){
    alert('Password should be greater than 8.');
    return '';
  } else if(length>128){
    alert('Password should be less than 128.')
    return '';
  } else {

  var option = [];


  if (confirm('Do you want lowercase letters to include in your password?') == true){
    var lowercase = 'abcdefghijklmnopqrstuvwxyz';
    option.push(lowercase);
  }


  if (confirm('Do you want uppercase letters to include in your password?') == true){
    var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    option.push(uppercase);  
  }
   
  if (confirm('Do you want numbers to include in your password?') == true){
    var number = '1234567890';
    option.push(number);
  }
  
  if (confirm('Do you want special characters to include in your password?') == true){
    var specialChar = "!@#$%^&*()-=+[]'?/<>";
    option.push(specialChar);  
  }

  if (option.length === 0) {
    alert('Choose at least one character type.')
    return '';
  }


  var RandomPassword = "";

  for(let i=0; i<length; i++){
    var selector = option.join('');
    RandomPassword += selector[Math.floor(Math.random() * selector.length)]; 
  }

 
  return RandomPassword;

  }
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
