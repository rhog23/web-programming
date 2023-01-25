let user = {
  name: "John",
  age: 23,
};

console.log(user.name);
console.log(user.age);

// adding new property after object creation
user.isAdmin = true;

console.log(user.isAdmin);

console.log(user);
// deleting a property
delete user.isAdmin;
console.log(user);
