// Creating object
// empty object
const user = {};

// object with key-value pair
const character = {
  firstName: "Luke",
  lastName: "Skywalker",
  age: 19,
  species: "human",
  "hair color": "blond",
  isJedi: true,
  "home world": "Tattooine"
};

console.log(`${character['firstName']}`);

character['isDumb'] = true;
 console.log(character)