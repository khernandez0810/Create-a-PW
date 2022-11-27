// Assignment Code

//assign variables to user prompts for password generator
var generateBtn = document.querySelector("#generate");
var UpperCaseChars = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var LowercaseChars = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var SpecialChars = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "<",
  ">",
  "?",
  "-",
  "_",
];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var pwdChoice = [];
var pwdGenerator = "";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  //display value as text in text area box
  passwordText.value = password;
}

//Create Generate password function
function generatePassword() {
  pwdChoice = [];
  //prompt user to select character length 
  var pwdLength = prompt(
    "Please select the length you would like your password to be. Choose a Number between 8 and 128)"
  );
  //require password to be atleast 8 and maximum of 128 characters, only numbers
  while (isNaN(pwdLength) || pwdLength <= 7 || pwdLength >= 129) {
    alert("please choose a Number between 8 and 128");
    generatePassword();
  }

  //alert user of choice and character length selection
  alert("You have chosen a password with character length of : " + pwdLength);

  //assign user prompts to obtain choice value

  var GetSpecialChar = confirm(
    "Would you like to include special characters ?"
  );
  var GetUpperCase = confirm(
    "Would you like to include UpperCase characters ?"
  );
  var GetLowerCase = confirm(
    "Would you like to include Lowercase characters ?"
  );
  var GetNumbers = confirm("Would you like to include Numbers ?");

  //Generate your Password
  if (GetLowerCase) {
    pwdChoice = pwdChoice.concat(LowercaseChars);
  }
  if (GetUpperCase) {
    pwdChoice = pwdChoice.concat(UpperCaseChars);
  }
  if (GetSpecialChar) {
    pwdChoice = pwdChoice.concat(SpecialChars);
  }
  if (GetNumbers) {
    pwdChoice = pwdChoice.concat(numbers);
  }

  //create loop to generate password randomization
  for (i = 0; i < pwdLength; i++) {
    pwdGenerator =
      pwdGenerator + pwdChoice[Math.floor(Math.random() * pwdChoice.length)];
  }
  //return value to writepassword function to display password
  return pwdGenerator;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());
