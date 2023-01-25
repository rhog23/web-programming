// 1
let user = {};

user.name = "John";
user.surname = "Smith";
console.log(user);
user.name = "Pete";
console.log(user);
delete user.name;

// 2
function isEmpty(obj) {
  for (key in obj) {
    return false;
  }
  return true;
}
let schedule = {};
console.log(isEmpty(schedule));

// 3
let calcSum = (obj) => {
  let sum = 0;
  for (key in obj) {
    sum += obj[key];
  }
  return sum;
};

let salaries = {
  Pete: 130,
  John: 100,
  Ann: 160,
};
console.log(calcSum(salaries));

// 4
let multiplyNumeric = (obj) => {
  for (key in obj) {
    if (typeof obj[key] == "number") {
      obj[key] *= 2;
    }
  }

  return obj;
};

let menu = {
  width: 200,
  height: 300,
  title: "My menu",
  test: "number",
};

multiplyNumeric(menu);
console.log(menu);

// 5
function makeUser() {
  return {
    name: "John",
    ref: this,
  };
}

let user = makeUser();
console.log(user.ref.name);

// 6
let calculator = {
  read() {
    this.val1 = +prompt("Enter first number: ", 0);
    this.val2 = +prompt("Enter second number: ", 0);
  },
  sum() {
    return this.val1 + this.val2;
  },
  mul() {
    return this.val1 * this.val2;
  },
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());

// 7
let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    console.log(this.step);
    return this;
  },
};

ladder.up().up().down().showStep().down().showStep();

ladder.up();
ladder.up();
ladder.down();
ladder.showStep();
ladder.down();
ladder.showStep();
