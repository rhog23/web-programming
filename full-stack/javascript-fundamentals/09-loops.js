// while loops
let i = 1;
while (i <= 5) {
  alert(i);
  i++;
}

let sum = 0;
while (true) {
  let value = +prompt("Enter a number: ");
  if (!value) break;
  sum += value;
}
alert(sum);

for (let i = 1; i < 10; i++) {
  if (i % 2) alert(i);
}

// labels
outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    let input = prompt(`Value at coords (${i},${j})`, "");
    if (!input) break outer;
    alert(`(${i},${j}): ${input}`);
  }
}
alert("Done!");

// Tasks
for (let i = 2; i <= 10; i += 2) {
  alert(i);
}

let i = 0;
while (i < 3) {
  alert(`number ${i}!`);
  i++;
}

while (true) {
  let input = prompt("Enter a number:");
  if (input > 100 || !input) {
    alert(input);
    break;
  }
}

let num;
do {
  num = prompt("Enter a number:");
} while (num <= 100 && num);

let n = +prompt("Enter a value:", 2);
prime: for (let i = 2; i <= n; i++) {
  for (let j = i; j >= 1; j--) {
    if (i % j == 0 && j != i && j != 1) continue prime;
  }
  alert(i);
}

let n = +prompt("Enter a value:");
prime: for (let i = 2; i <= n; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j == 0) continue prime;
  }
  alert(i);
}
