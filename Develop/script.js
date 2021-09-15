// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

    passwordText.value = password;
 
}

function generatePassword() {
  var length = prompt('How many characters would you like to include in your password?');

  if(length<8){
    alert('Password should be greater than 8.');
    return '';
  } else if(length>128){
    alert('Password should be less than 128.');
    return '';
  } else if((length >=8) && (length <= 128)) {

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
    var number = '123456789';
    option.push(number);
  }
  
  if (confirm('Do you want special characters to include in your password?') == true){
    var specialChar = "!@#$%^&*()-=+[]'?/<>{}";
    option.push(specialChar);  
  }

  if (option.length === 0) {
    alert('Choose at least one character type.')
    return '';
  }


  var RandomPassword = "";
  for(let i=0; i<option.length; i++){
    RandomPassword += option[i][Math.floor(Math.random() * option.length)];
  }

  var returnPassword = RandomPassword;

  for(let j=0; j<length-option.length; j++){
    var selector = option.join('');
    returnPassword += selector[Math.floor(Math.random() * selector.length)];
  }

   return returnPassword;



  }else {
    alert('Enter the correct type of input.');
    return '';
  }
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
