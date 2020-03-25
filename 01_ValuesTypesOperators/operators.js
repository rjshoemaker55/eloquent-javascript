// Unary operators
console.log(typeof 4.5);
console.log(typeof 'x');

// Turnery operators
console.log(true ? 1 : 2);
// If (true) return 1 else return 2

// Converting strings and numbers to booleans
console.log('' || 'helllo');
// returns 'hello' because an empty string returns false

console.log(0 || 'yes');
// returns 'yes' because 0 returns false

console.log(false || 0);
// returns 0 because false returns false

console.log('hello' || true);
// returns 'hello' because it returns true, does not go to second part of operator

console.log('hello' && 'hi!');
// retunrs 'hi!' because 'hello' is converted to true, so the value on the right of && is returned

console.log(false && 'hello');
// returns false because value on left is false, so the value on left is returned

console.log(false && 0);
// returns false because value on left is flase, so value on left is returned
