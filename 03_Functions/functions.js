let x = 10;
if (true) {
  let y = 20; // Y is not available outside of an if statement because it is called with let
  var z = 30; // Z is availbale outside an if statement because it is called with var, but would not be available outside  a function
  console.log(x + y + z);
}
console.log(x + z);

// The below 2 functions will 'blow the call stack' due to too much recursion
// function chicken() {
//   return egg();
// }
// function egg() {
//   return chicken();
// }
// console.log(chicken() + ' came first.');
// → ??

// You can pass more or few arguments to a function than it has when declared
function minus(a, b) {
  if (b === undefined) return -a;
  else return a - b;
}

console.log(minus(10)); // will return -10
console.log(minus(10, 5)); // will return 5

// Adding an = sign with a value after an argument sets a default if that argument is not provided
function add(a, b = 5) {
  return a + b;
}

console.log(add(4, 10)); // will return 14, because both argumetns were passed, 4 + 10
console.log(add(6)); // will return 11, because the default (5) is used in place of second arg, 6 + 5
