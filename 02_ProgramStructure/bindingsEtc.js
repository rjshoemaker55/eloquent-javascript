// Examples of expressions
1;
!true;
false && 'hello';
33 - 10;

// Examples of statmenets
let hi = !true; // Let statement

// multiple bindings (variables) can be defined in 1 statement.
let one = 1,
  two = 2;

// Since functions are expressions, they can be used within larger expressions.
console.log(Math.min(2, 4) + 100); // multiple bindings (variables) can be defined in 1 statement.

// let theNumber = Number(prompt('Pick a number:')); // prompt function nested in Number, which converts into INT, just like String() and Boolean()
// alert(theNumber);

// Counts to 12
let num = 0;
while (num <= 12) {
  console.log(num);
  num++;
}

// Gets 2 to the 10th power
let counter = 0;
let result = 1;
while (counter < 10) {
  result = result * 2;
  counter++;
}
console.log(result);

// Do loop always execudes block at least once, then tests the conditional
let yourName;
do {
  yourName = 'RJ';
} while (!yourName);
console.log(yourName);

// For loop
for (i = 0; i <= 10; i++) {
  console.log(`Im counting! Number: ${i}`);
}

let result2 = 1;
for (i = 0; i <= 10; i++) {
  result2 = result2 * result2;
}
console.log(result2);

// Break out of a for loop early
for (i = 20; ; i++) {
  if (i % 7 == 0) {
    console.log(i);
    break;
  }
}
