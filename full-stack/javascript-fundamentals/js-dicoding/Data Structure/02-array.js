const myArray = ["Chocolate", 32.2, 22, true, "Programming"];

// push
myArray.push("light saber");
console.log(myArray);

// pop
let popped_element = myArray.pop();
console.log(popped_element);
console.log(myArray);

// shift
let shifted_element = myArray.shift();
console.log(shifted_element);
console.log(myArray);

// unshift
let currentArrLen = myArray.unshift("Mango");
console.log(currentArrLen);
console.log(myArray);

// splice
let spliced_elements = myArray.splice(1, 2);
console.log(spliced_elements); 
console.log(myArray);
