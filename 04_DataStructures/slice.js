// slice() takes a start and end index and returns an array of the elements in between
let array = [1, 2, 3, 4, 5];

console.log(array.slice(2, 4));

// when an end index is not given, it just returns all elements after the first
console.log(array.slice(2));

// concat is used to combine multiple strings to create an array

function remove(array2, index) {
  return array2
    .slice(0, index) // creates a new array starting from 0 and between 2 [ 'a', 'b' ]
    .concat(array2.slice(index + 1)); // create a new array starting from 3 and going to end [ 'd', 'e' ]
  // then combines (concatinates) with the first array ['a', 'b', 'd', 'e']
}

console.log(remove(['a', 'b', 'c', 'd', 'e'], 2));
