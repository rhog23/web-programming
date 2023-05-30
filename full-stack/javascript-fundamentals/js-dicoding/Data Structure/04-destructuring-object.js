const profile = {
  firstName: "Bulba",
  lastName: "Saur",
  age: 20,
};

const { firstName, lastName, age } = profile;
console.log(firstName, lastName, age);

// can be used to create a variable
// const { age } = profile;

// destructuring with default value
const user = {
  id: "test",
  car: "volvo",
};

const { id, car, isGood = true } = user;
console.log(id, car, isGood);
