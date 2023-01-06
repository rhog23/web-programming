// String Conversion
let value = true;
console.log(typeof value);

value = String(value);
console.log(typeof value);

// Number Conversion
console.log(Number("123"));
console.log(Number(true));
console.log(Number(false));
console.log(Number(null));
console.log(Number(undefined));

// Boolean Conversion
// False
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean(undefined));

// True
console.log(Boolean("hi"));
console.log(Boolean(1));
console.log(Boolean("!"));
console.log(Boolean(" "));
console.log(Boolean("0"));
