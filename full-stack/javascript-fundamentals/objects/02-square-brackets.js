let user = {};

console.log(user);
user["like birds"] = true;
console.log(user);
console.log(user["like birds"]);

function makeUser(name, age) {
  return {
    name,
    age,
  };
}

let aUser = makeUser("Mochi", 5);
console.log(aUser);
