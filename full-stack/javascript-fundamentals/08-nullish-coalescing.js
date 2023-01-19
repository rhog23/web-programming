// nullish coalescing will return the first value from a list that isn't null/undefined
let firstName = null;
let lastName = null;
let nickName = null;

alert(firstName ?? lastName ?? nickName ?? "Anonymous");
