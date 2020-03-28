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

// This is a function that creates other functions that multiply an argument by the value passed to the original function
function multiplier(factor) {
  return number => number * factor; // Mutliplier function returns a function that will take an argument and multiply it by the multiplier
}

let twice = multiplier(2); // returns a function: number => number * 2 <- return number times 2
console.log(twice(3)); // 3 => 3 * 2; // returns 6

// Recursive function
function power(base, exponent) {
  if (exponent == 0) {
    return 1;
  } else {
    return base * power(base, exponent - 1);
  }
}

console.log(power(3, 4));

power(3, 4); // 81
3 * power(3, 3); // 3 * 27 = 81
3 * power(3, 2); // 3 * 9 = 27
3 * power(3, 1); // 3 * 3 = 9
3 * power(3, 0); // 3 * 1 = 3
1;

function allNumbersBelow(number) {
  if (number == 0) {
    return 0;
  } else {
    console.log(number);
    return allNumbersBelow(number - 1);
  }
}

console.log(allNumbersBelow(5));

allNumbersBelow(5); // console.log(5)
allNumbersBelow(4); // console.log(4)
allNumbersBelow(3); // console.log(3)
allNumbersBelow(2); // console.log(2)
allNumbersBelow(1); // console.log(1)
0; // Console.log(0) because this is returned from original function call

function findSolution(target) {
  function find(current, history) {
    if (current == target) {
      return history;
    } else if (current > target) {
      return null;
    } else {
      return (
        find(current + 5, `(${history} + 5)`) ||
        find(current * 3, `(${history} * 3)`)
      );
    }
  }
  return find(1, '1');
}

console.log(findSolution(24));

findSolution(24);
find(1, '1');
find(6, `(1 + 5)`);
find(11, `((1 + 5) + 5)`);
find(16, `(((1 + 5) + 5 ) + 5)`);
find(21, `((((1 + 5) + 5) + 5) + 5)`);
find(26, `(((((1 + 5) + 5) + 5) + 5) + 5)`); // 26 is over 24, returns null
null;
find(63, `(((((1 + 5) + 5) + 5) + 5) * 3)`); // 63 is over 24, returns null
null;
find(48, `((((1 + 5) + 5) + 5) * 3)`);
null; // 48 is over 24, returns null
find(33, `(((1 + 5) + 5) * 3)`); // 33 is over 24, returns null
null;
find(18, `((1 + 5) * 3)`);
find(23, `(((1 + 5) * 3) + 5)`);
find(28, `((((1 + 5) * 3) + 5) + 5)`); // 28 is over 24, returns null
null;
find(69, `((((1 + 5) * 3) + 5) + 5)`); // 69 is over 24, returns null
null;
find(54, `(((1 * 5) * 3) * 3)`); // 54 is over 24, returns null
null;
find(3, `(1 * 3)`);
find(8, `((1 * 3) + 5)`);
find(13, `(((1 * 3) + 5) + 5)`);
find(18, `((((1 * 3) + 5) + 5) + 5)`);
find(23, `(((((1 * 3) + 5) + 5) + 5) + 5)`);
find(28, `((((((1 * 3) + 5) + 5) + 5) + 5) + 5)`); // returns null, 28 is over 24
null;
find(69, `((((((1 * 3) + 5) + 5) + 5) + 5) * 3)`); // returnes null, 69 is over 24
null;
find(54, `(((((1 * 3) + 5) + 5) + 5) * 3)`); // returns null, 54 is over 24
null;
find(39, `((((1 * 3) + 5) + 5) * 3)`); // returns null, 39 is over 24
find(24, `(((1 * 3) + 5) * 3)`) // returns history, 24 = 24
`(((1 * 3) + 5) * 3)`;
find(9, `((1 * 3) * 3)`);
