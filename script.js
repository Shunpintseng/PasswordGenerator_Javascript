// Assignment Code
var letterCounts;
var isLowerCase;
var isUpperCase;
var isNumber;
var isSpecChar;
var generateBtn = document.querySelector("#generate");


//set the process to get the correct user input for letterCounts. running for loop to re-check until letterCounts is correct. 
function getLetterCounts () {
  
  var correctValue;
  
  for (correctValue = false; correctValue == false;) {
    letterCounts = prompt("How many characters do you want to have in your password?");
    if (letterCounts < 8 || letterCounts > 128) {
      alert("Sorry dummy you must enter numbers between 8 and 128!")
    }
    else {
      //the user put a correct value
      correctValue = true;
    }
  }
}

//specified valid character options for each variable and provide valid character for password generator.
function getValidChar(){
  var valid = [];
  if(isSpecChar){
    valid += ["~","!","@","#","$","%","&","^","*","(",")","_","+","{","}","[","]","|","<",">",";",":","?","/"];
  }
  if(isNumber){
    valid += ["0","1","2","3","4","5","6","7","8","9"];
  }
  if(isUpperCase){
    valid += ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  }
  if(isLowerCase){
    valid += ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  }
  return valid;
}

//in put the valid charaters from each category 
function generatePassword () {
  getLetterCounts();
  
  var isAtLeastOneEnabled;
  
  for (isAtLeastOneEnabled = false; isAtLeastOneEnabled == false;) {

  isLowerCase = confirm ("Do you want any lower case?");
  isUpperCase = confirm ("Do you want any upper case?");
  isNumber = confirm ("Do you want any number");
  isSpecChar = confirm ("Do you want any special characters");

  isAtLeastOneEnabled = (isLowerCase == true || isUpperCase == true || isNumber == true || isSpecChar == true);

    if (isAtLeastOneEnabled == false) {
      alert("Sorry dummy please select at least one category!")
    }
  }

  var validCharacters = getValidChar();
  var generatePassword = "";

  for (var x = 0; x<letterCounts; x++){
    var len = validCharacters.length;

    generatePassword += validCharacters[Math.floor(Math.random() * len)];
  }
  return generatePassword;


}


// Write password to the #password input
function writePassword () {


  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);













//      create the generatePassword function
//      prompts of questions for user:

//      Step 1: create prompt ask for lengh of password 8<password<128 save the result to a var. If not between 8 and 128, loop back to alert to remind user requirement.

//      Step 2: use "confirm" for true/ false value for     
//              confirm:upper ?
//              confirm:lower case?
//              confirm:numeric?
//              confirm:special characters?

//     Step 3: for each confirm values. One must be selected if all false loop back to alert for make at least one selection

//     Step 4: after step 1-3. Generate password.
//             Create array for:
//             #lower case 
//             #upper case
//             #number
//             #special characters

//    Step 5: Create a Var that contains the users preferences

//    Step 6: Select the users specifyed length of password form randonly generated password
//            use "math.floor" "math.random" to generate random numbers
//            
