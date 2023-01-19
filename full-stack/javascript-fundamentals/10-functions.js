"use strict";

// arrow functions
let ask = (question, yes, no) => (confirm(question) ? yes() : no());

ask(
  "Do you agree?",
  () => alert("you agreed"),
  () => alert("you canceled")
);
