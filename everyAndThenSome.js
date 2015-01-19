// Write two functions - every and some
// Both take an array, and then a predicate function that returns true or false
// if executed on an element of an array.
// every returns true if the predicate returns true on every element of the array
// otherwise it returns false
// it should return false as soon as it hits a false value

// some returns true if the predicate returns true on at least one element of the array
// it returns false otherwise.
// it should stop looping as soon as it finds a true falue.

function every(array, fn) {
  // to break the forEach statement, we can use exceptions and run for each in a try block
  // see http://stackoverflow.com/questions/2641347/how-to-short-circuit-array-foreach-like-calling-break
  // unfortunately, this is a rather ugly solution.
  // see the solution to the some function for an alternate way of doing this using flags
  // but it doesn't use short-circuiting
  var HasFalse = {};
  try {
    array.forEach(function(element) {
      if (fn(element) === false) {
        throw HasFalse;
     }
    });
  } catch(e) {
    if (e === HasFalse) return false;
  }
  return true;
}

function some(array, fn) {
  // use a variable to keep track of result
  // this is prettier than the solution above
  // BUT - it is quite inefficient - it checks more elements than necessary
  var result = false;
  array.forEach(function(element) {
    if (fn(element) === true) {
      result = true;
    }
  });
  return result;
}

var assert = require('assert');

assert.equal(every([NaN, NaN, NaN], isNaN), true, "every: failed test 1");
assert.equal(every([NaN, NaN, 4], isNaN), false, "every: failed test 2");
assert.equal(some([NaN, 3, 4], isNaN), true, "some: failed test 1");
assert.equal(some([2, 3, 4], isNaN), false, "some: failed test 2");
