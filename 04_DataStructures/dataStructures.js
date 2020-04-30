// Properties - stored in a value of some sort and accessed using a dot or a square
Math.min(5, 1); // 'min' is a property of the Math object, which is a collection of math related constants and functions

// null.length; // Type error, null has no properties

// Dot notation
someValue.x; // x is the literal name of the property
someValue[x]; // x is EVALUTED to get the property name - tries to evaluate x, uses the result, converted to a string, as the property name

// if we know that the property is called 'color', we would use
someValue.color;

// If we want to extract te property named by the value held in binding 'i', we would use
someValue[i];

// String and array values also contain properties that hold function values
let doh = 'Doh';

console.log(typeof doh.toUpperCase); // returns function
console.log(doh.toUpperCase()); // returns "DOH"

let sequence = [1, 2, 3];

sequence.push(4); // adds 4 to the END of the array
sequence.pop(); // Removes the LAST item in the array

let day1 = {
  squirrel: false,
  events: ['work', 'touched tree', 'pizza', 'running'],
};

let descriptions = {
  work: 'Went to work',
  'touched tree': 'Touched a tree', // Properties whose names arent valid binding names have to be quoted
};

descriptions.hello = 'Hello'; // adds a property called hello to descriptions object with the value 'Hello'
descriptions.hello = 'Hi'; // changes the property called hello in descriptions object to 'Hi'

// in operator returns a boolean based on whether or not that property name exists in the object
console.log('work' in descriptions); // returns true - the work property DOES exist in descriptions object

Object.keys(day1); // returns all properties a given object has as an array - ['squirrel', 'events']

let objectA = { x: 0, y: 1, z: 2 };
let objectB = { a: 1 };

Object.assign(objectB, objectA); // objectB now contains a: 1
