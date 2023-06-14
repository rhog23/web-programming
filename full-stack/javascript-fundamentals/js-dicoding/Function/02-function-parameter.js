/* Object Parameter */
const user = {
  id: 123,
  displayName: "fth",
  fullName: "Finn The Human",
};

function introduce({ displayName, fullName }) {
  console.log(`${displayName} is ${fullName}`);
}

introduce(user);

/**
 * Rest Parameter
 * rest parameter is used when we are uncertain about the number of parameters required
 */
function sum(...numbers) {
  let result = 0;
  for (let number of numbers) {
    result += number;
  }
  return result;
}

console.log(sum(11, 12, 13, 14, 15));
