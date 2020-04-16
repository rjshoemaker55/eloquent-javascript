// Properties - stored in a value of some sort and accessed using a dot or a square
Math.min(5, 1); // 'min' is a property of the Math object, which is a collection of math related constants and functions

null.length; // Type error, null has no properties

// Dot notation
someValue.x; // x is the literal name of the property
someValue[x]; // x is EVALUTED to get the property name - tries to evaluate x, uses the result, converted to a string, as the property name

// if we know that the property is called 'color', we would use
someValue.color;
