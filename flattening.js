// import assert to use in unit tests
var assert = require('assert');

// Use the reduce method in combination with the concat method
// flatten an array of arrays

var arrays = [[1,2,3], [4,5], [6]];
var result = [1,2,3,4,5,6];

var flatten = function(arr) {
  var initial = [];
  var result = arr.reduce(function(previousValue, currentValue, index, array) {
    return previousValue.concat(currentValue);
  }, initial);
  return result;
};

// Assert causes the script to error out if the assertion isn't met
assert.deepEqual(flatten(arrays), result);
