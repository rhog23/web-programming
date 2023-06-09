// set has no index and unordered
// has unique elements
const numberSet = new Set([1, 2, 2, 3, 4]);
console.log(numberSet);

numberSet.add(100);
console.log(numberSet);

numberSet.add([1, 2, 101]);
console.log(numberSet);

numberSet.forEach((num) => console.log(num * 2));

