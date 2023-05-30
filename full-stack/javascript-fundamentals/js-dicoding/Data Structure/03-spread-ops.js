const countries = [
  "Singapore",
  "Malaysia",
  "Indonesia",
  "Philippines",
  "Cambodia",
];
const otherCountries = ["England", "USA", "China", "Russia", "Ukraine"];
const worldCountries = [...countries, ...otherCountries];
console.log(worldCountries);

function test({ name, age }) {
  console.log(`${name}, ${age}`);
}

test({ name: "Bruh", age: 12 });
