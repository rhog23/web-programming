// calculator with constructor function
function Calculator() {
  this.read = () => {
    this.a = +prompt("Enter a number: ", 0);
    this.b = +prompt("Enter another number: ", 0);
  };

  this.sum = () => {
    return this.a + this.b;
  };

  this.mul = () => {
    return this.a * this.b;
  };
}

let calculator = new Calculator();

calculator.read();
console.log(`Sum: ${calculator.sum()}`);
console.log(`Mul: ${calculator.mul()}`);

function Accumulator(startingValue) {
  this.value = startingValue;
  this.read = () => {
    this.value += +prompt("Enter a number: ", 0);
  };
}

let accumulator = new Accumulator(1);

accumulator.read();
accumulator.read();

console.log(accumulator.value);
