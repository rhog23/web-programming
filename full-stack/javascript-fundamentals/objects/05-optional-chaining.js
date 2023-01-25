/* To check whether a property exists in an object */
let user = {};

// console.log(user?.address);
if (user?.address) {
  console.log(user.address);
} else {
  console.log("no such property :(");
}

// html element example
let html = document.querySelector(".elem")?.innerHTML;

// checks nested property
console.log(user?.address?.street);

// don't overuse ?.
console.log(user.address?._);

// -------------------------------------------------------
/* ?.() to check whether an object has a specific method */
let userAdmin = {
  admin() {
    console.log("I'm an admin");
  },
};

let userGuest = {};

userAdmin.admin?.();
userGuest.admin?.();
