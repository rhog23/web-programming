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
