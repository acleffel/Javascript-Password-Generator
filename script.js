// Assignment Code
var generateBtn = document.querySelector("#generate");

var pwLength;
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" 
var special = '!@#$%^&*-+';
var number = '0123456789';
var arrayEmpty = [];
// Write password to the #password input
lowerCase = Array.from(lowerCase);

upperCase = Array.from(upperCase); 

special = Array.from(special);

number = Array.from(number);




    function writePassword() {
  var password = generatePassword();
   pwLength = prompt("Choose a number of characters between 8 and 128 for your passoword)")
  if  (pwLength >= 8 && pwLength <= 128) {
    confirmNumber = confirm("Will this contain numbers?");
  }  
  else {
    alert("Please choose an integer between 8 and 128 characters")
    return writePassword();
  }  
 if (confirmNumber) {
    confirmLowercase = confirm("Will this contain Lowercase letters?");
    arrayEmpty = arrayEmpty.concat(number);
}
 else {
    confirmLowercase = confirm("Will this contain Lowercase letters?");
 }   
 if (confirmLowercase){
    confirmUppercase = confirm("Will this contain Uppercase letters?");
    arrayEmpty = arrayEmpty.concat(lowerCase);
 }    
 else  {   
    confirmUppercase = confirm("Will this contain Uppercase letters?");
 }    
 if(confirmUppercase) {
    confirmspecial = confirm("Will this contain special characters?");
    arrayEmpty = arrayEmpty.concat(upperCase);
 }   
 else {
    confirmspecial = confirm("Will this contain special characters?"); 
 }   
 if (confirmspecial) {
    arrayEmpty = arrayEmpty.concat(special);
 }  
 
  
    

  var passwordText = document.querySelector("#password");
  passwordText = password; {}
  
  
 function generatePassword () {
  for (var i = 0; i < generatePassword; i++) {
    var password = array[Math.floor(Math.random() * array.arrayEmpty)];
    password.push(password);
  }  
  };  
}
  
  


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
