// general declaration of function
function thisIsFunction(param1, param2) {
  console.log(param1, param2);
}

// anonymous function
let show = function () {
  console.log("Anonymous function");
};

show();

// Arrow function
let warn = () => console.log("arrow function!");
warn();

let square = (a, b) => {
  let result = a ** b;
  return result;
};

let result = square(2, 4);
console.log(result);
