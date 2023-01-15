let accessAllowed;
let age = prompt("How old are you?", "");

if (age > 18) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}

alert(accessAllowed);

// ternary
accessAllowed = age > 18 ? true : false;

// task
let answer = prompt('What\'s the "official" name of JavaScript?', "");
answer == "ECMAScript"
  ? alert("Right")
  : alert('You don\'t know? "ECMAScript"');

// task
let userNumber = prompt("Enter a number:", 0);
if (userNumber > 0) {
  alert(1);
} else if (userNumber < 0) {
  alert(-1);
} else {
  alert(0);
}

// task
let result = a + b < 4 ? "Below" : "Over";

// task
let message =
  login == "Employee"
    ? "Hello"
    : login == "Director"
    ? "Greetings"
    : login == ""
    ? "No login"
    : "";
