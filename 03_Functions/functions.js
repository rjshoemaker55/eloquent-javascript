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

// findSolution(24);
// find(1, '1');
// find(6, `(1 + 5)`);
// find(11, `((1 + 5) + 5)`);
// find(16, `(((1 + 5) + 5 ) + 5)`);
// find(21, `((((1 + 5) + 5) + 5) + 5)`);
// find(26, `(((((1 + 5) + 5) + 5) + 5) + 5)`); // 26 is over 24, returns null
// null;
// find(63, `(((((1 + 5) + 5) + 5) + 5) * 3)`); // 63 is over 24, returns null
// null;
// find(48, `((((1 + 5) + 5) + 5) * 3)`);
// null; // 48 is over 24, returns null
// find(33, `(((1 + 5) + 5) * 3)`); // 33 is over 24, returns null
// null;
// find(18, `((1 + 5) * 3)`);
// find(23, `(((1 + 5) * 3) + 5)`);
// find(28, `((((1 + 5) * 3) + 5) + 5)`); // 28 is over 24, returns null
// null;
// find(69, `((((1 + 5) * 3) + 5) + 5)`); // 69 is over 24, returns null
// null;
// find(54, `(((1 * 5) * 3) * 3)`); // 54 is over 24, returns null
// null;
// find(3, `(1 * 3)`);
// find(8, `((1 * 3) + 5)`);
// find(13, `(((1 * 3) + 5) + 5)`);
// find(18, `((((1 * 3) + 5) + 5) + 5)`);
// find(23, `(((((1 * 3) + 5) + 5) + 5) + 5)`);
// find(28, `((((((1 * 3) + 5) + 5) + 5) + 5) + 5)`); // returns null, 28 is over 24
// null;
// find(69, `((((((1 * 3) + 5) + 5) + 5) + 5) * 3)`); // returnes null, 69 is over 24
// null;
// find(54, `(((((1 * 3) + 5) + 5) + 5) * 3)`); // returns null, 54 is over 24
// null;
// find(39, `((((1 * 3) + 5) + 5) * 3)`); // returns null, 39 is over 24
// find(24, `(((1 * 3) + 5) * 3)`) // returns history, 24 = 24
// `(((1 * 3) + 5) * 3)`;
// find(9, `((1 * 3) * 3)`);

function riddle(target) {
  function find(current, history) {
    if (current > target) return null;
    else if (current == target) return history;
    else {
      return (
        find(current + 5, `(${history} + 5)`) ||
        find(current * 3, `(${history} * 3)`)
      );
    }
  }
  return find(1, '1');
}

console.log(riddle(54));

function printFarmStock(cows, chickens) {
  let cowString = String(cows);
  while (cowString.length < 3) {
    cowString = '0' + cowString;
  }
  console.log(`${cowString} Cows`);

  let chickenString = String(chickens);
  while (chickenString.length < 3) {
    chickenString = '0' + chickenString;
  }
  console.log(`${chickenString} Chickens`);
}

printFarmStock(52, 3);

function printFarmStock2(animal, number) {
  let numberString = String(number);
  while (numberString.length < 3) {
    numberString = '0' + numberString;
  }
  return `${numberString} ${animal}`;
}

console.log(printFarmStock2('Deer', 6));
console.log(printFarmStock2('Dogs', 632));

function zeroPad(number) {
  let numberString = String(number);
  while (numberString.length < 3) {
    numberString = '0' + numberString;
  }
  return numberString;
}

console.log(`${zeroPad(13)} Pigs`);

// Exercises
// Minimum - write a function that takes two arguments and returns their minimum
const minimum = (a, b) => Math.min(a, b);

console.log(minimum(1, 3));

// Recursion - 0 is even, 1 is odd, for any other number n, its evennes is the same as n - 2
// Defie a recursive function isEven corresponding to this description. Should accept a single parameter and returna boolean
const isEven = number => {
  if (number == 0) return true;
  else if (number == 1) return false;
  else if (number < 0) return isEven(number + 2);
  // if number is negative, keep adding 2 and passing back in til lands on 1 or 0
  else return isEven(number - 2); // keep subtracting 2 and passing back into isEven until 1 or 0 is returned (odd or even)
};

console.log(isEven(-1));

// Bean Counting - Write a function countBs that takes a string as its only argumetn and returns a number that indicates how many uppcase 'B's
const countBs = string => {
  let count = 0;
  for (i = 0; i <= string.length - 1; i++) {
    if (string[i] == 'B') count++;
  }
  return count;
};

console.log(countBs('BarBarian'));

// Same function as above, but user can pass in letter to be counted
const countChars = (string, letter) => {
  let count = 0;
  for (i = 0; i <= string.length - 1; i++) {
    string[i] === letter && count++;
  }
  return count;
};

console.log(countChars('Hello', 'l'));
