// a data type that allows us to store key-value pairs, where the key can have an arbitrary data type.
// unlike objects, which require us to store strings / symbols as keys.
const myMap = new Map([
  [1, "a number key"],
  ["1", "a string key"],
  [true, true],
]);

console.log(myMap);

// getting the size
console.log(myMap.size);

// getting a key-value pair
console.log(myMap.get("1"));

// adding a key-value pair
console.log(myMap.set("random", 1e-2));

// checking a key
console.log(myMap.has("1")); // output true

// deleting a key
myMap.delete("random");
