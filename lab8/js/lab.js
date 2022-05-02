/*
* Author: Yasmin Kashani <ykashani@ucsc.edu>
Created: 2 May
*License: Public Domain
*/


function isEven(x) {
  return (x % 2 == 0);
}

console.log("Is 1 even?", isEven(1));
console.log("IS 2 even?", isEven(2));

array = [100, 81, 4, 16, 42, 144, 10000]
console.log("My array", array);

var result = array.map(isEven);
console.log("Test of evenness of array:", result);

var result = array.map(function(x) {
  return x ** 0.5;
})

console.log("Squareroot of array:", result);
