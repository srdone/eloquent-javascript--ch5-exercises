// import the ancestry data, then parse into an object
var ancestry = require('./ancestry');
ancestry = JSON.parse(ancestry);

function century(person) {
  return Math.ceil(person.died / 100);
}

function average(array) {
  function plus(a,b) {return a + b; }
  return array.reduce(plus) / array.length;
}

function ages(people) {
  return people.map(function(person) {
    return person.died - person.born;
  });
}

function groupBy(array, groupFn) {
  var groups = {};
  array.forEach(function(element) {
    var group = groupFn(element);
    if (!groups[group]) groups[group] = []; // add group array if it doesn't exist
    groups[group].push(element);
  });
  return groups;
}

function lifeExpectancyByCentury(array) {
  var groups = groupBy(array, century);
  var lifeExpectancy = {};
  for (var key in groups) {
    lifeExpectancy[key] = average(ages(groups[key]));
  }
  return lifeExpectancy;
}

var lifeExpectancy = lifeExpectancyByCentury(ancestry);

console.log(lifeExpectancy);
